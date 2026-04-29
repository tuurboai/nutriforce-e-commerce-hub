import { useEffect, useState } from "react";

// Slider volutamente "anti-performance":
// - immagini remote molto pesanti (Unsplash full-res) caricate dopo un delay
// - nessun width/height/aspect-ratio fissato sul contenitore => CLS alto
// - cambio slide automatico con altezze diverse => layout shift continuo
// - immagini caricate una alla volta in modo asincrono => LCP ritardato

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2400&q=95",
    title: "Integratori sportivi",
    subtitle: "per chi si allena davvero.",
    delay: 1800,
  },
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=95",
    title: "Formulazioni pulite",
    subtitle: "ingredienti tracciabili, zero compromessi.",
    delay: 2600,
  },
  {
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=95",
    title: "Made in Italy",
    subtitle: "produzione, miscelazione e confezionamento a Torino.",
    delay: 3400,
  },
];

export default function HeroSlider() {
  const [loaded, setLoaded] = useState({});
  const [index, setIndex] = useState(0);

  // Carico le immagini in modo scaglionato (peggiora LCP).
  useEffect(() => {
    SLIDES.forEach((s, i) => {
      const t = setTimeout(() => {
        const img = new Image();
        img.onload = () => setLoaded((prev) => ({ ...prev, [i]: s.url }));
        img.src = s.url;
      }, s.delay);
      return () => clearTimeout(t);
    });
  }, []);

  // Auto-rotate slides.
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[index];
  const src = loaded[index];

  return (
    <div className="relative w-full">
      {src ? (
        // Nessuna dimensione fissa => l'immagine "spinge" il layout quando arriva.
        <img
          src={src}
          alt={current.title}
          className="w-full h-auto object-cover"
        />
      ) : (
        // Placeholder con altezza minima diversa per slide => CLS quando arriva l'immagine.
        <div
          className="w-full bg-nf-surface flex items-center justify-center text-nf-ink/40 text-sm"
          style={{ minHeight: 120 + index * 80 }}
        >
          Caricamento slide {index + 1}…
        </div>
      )}

      {/* Indicatori */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-nf-green" : "bg-white/60"
            }`}
            aria-label={`Vai alla slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
