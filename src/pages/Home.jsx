import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { prodotti } from "@/data/prodotti";
import { articoli } from "@/data/blog";
import heroImg from "@/assets/hero-nutriforce.jpg";

export default function Home() {
  useEffect(() => { document.title = "NutriForce — Supplementi per chi si allena davvero"; }, []);

  const inEvidenza = ["whey-protein-cioccolato", "creatina-monoidrato", "pre-workout-explosive", "bundle-starter-pack"]
    .map((s) => prodotti.find((p) => p.slug === s));
  const ultimiArticoli = articoli.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-nf-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-nf-ink text-white text-xs font-semibold px-3 py-1 mb-6 uppercase tracking-wider">Made in Italy · Informed Sport</span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              Integratori sportivi<br/><span className="text-nf-green">per chi si allena davvero.</span>
            </h2>
            <p className="text-lg text-nf-ink/70 mb-8 leading-relaxed max-w-lg">
              NutriForce produce supplementi pensati per atleti che cercano risultati misurabili. Formulazioni pulite, ingredienti tracciabili, zero compromessi sulla qualità. Niente claim assurdi, solo nutrizione che funziona.
            </p>
            <div className="flex gap-4">
              <Link to="/catalogo" className="bg-nf-green text-white font-medium px-8 py-4 hover:bg-nf-green/90 transition-colors">Esplora il catalogo</Link>
              <Link to="/chi-siamo" className="border border-nf-ink text-nf-ink font-medium px-8 py-4 hover:bg-nf-ink hover:text-white transition-colors">Scopri il brand</Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-nf-line">
              <div><div className="font-display font-extrabold text-2xl">48k+</div><div className="text-xs text-nf-ink/60">Prodotti venduti</div></div>
              <div><div className="font-display font-extrabold text-2xl">4.7/5</div><div className="text-xs text-nf-ink/60">Recensioni</div></div>
              <div><div className="font-display font-extrabold text-2xl">2019</div><div className="text-xs text-nf-ink/60">Fondazione</div></div>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-4xl mb-4">I nostri valori</h2>
          <p className="text-lg text-nf-ink/70">Tre principi guidano ogni formulazione che esce dal nostro laboratorio di Torino. Niente di rivoluzionario, solo il modo in cui crediamo si dovrebbero fare gli integratori sportivi.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Qualità", d: "Materie prime selezionate da fornitori certificati. Ogni lotto è testato per purezza, dosaggio e assenza di contaminanti. La produzione segue lo standard ISO 22000 e i protocolli Informed Sport." },
            { t: "Trasparenza", d: "Etichette pulite, nessun ingrediente nascosto dietro proprietary blend. Pubblichiamo tutte le analisi di laboratorio per ogni lotto: vuoi sapere cosa stai prendendo, e noi te lo diciamo." },
            { t: "Performance", d: "Formuliamo solo dosaggi clinicamente attivi. Niente quantità simboliche di ingredienti di moda: solo ciò che la ricerca dimostra funzioni davvero, nelle quantità che servono." },
          ].map((v) => (
            <div key={v.t} className="border border-nf-line p-8 hover:border-nf-ink transition-colors">
              <div className="w-12 h-12 bg-nf-green/10 text-nf-green flex items-center justify-center mb-5 font-display font-bold text-xl">✓</div>
              <h3 className="font-display font-bold text-2xl mb-3">{v.t}</h3>
              <p className="text-nf-ink/70 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prodotti in evidenza */}
      <section className="bg-nf-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display font-extrabold text-4xl mb-2">Prodotti in evidenza</h2>
              <p className="text-nf-ink/70">I supplementi più scelti dai nostri clienti questo mese.</p>
            </div>
            <Link to="/catalogo" className="hidden md:inline text-sm font-medium hover:text-nf-green">Vedi tutto →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inEvidenza.map((p) => p && <ProductCard key={p.slug} prodotto={p} />)}
          </div>
        </div>
      </section>

      {/* Perché NutriForce */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="font-display font-extrabold text-4xl mb-12 text-center">Perché NutriForce</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "01", t: "Formulazioni pulite", d: "Nessun colorante artificiale, nessun dolcificante economico, nessun riempitivo inutile." },
            { n: "02", t: "Dosaggi clinici", d: "Tutti gli ingredienti attivi sono presenti nelle quantità validate dagli studi scientifici." },
            { n: "03", t: "Made in Italy", d: "Produzione, miscelazione e confezionamento avvengono interamente nel nostro stabilimento di Torino." },
            { n: "04", t: "Spedizione rapida", d: "Ordini evasi entro 24 ore dal lunedì al venerdì. Spedizione gratuita sopra i 50 euro." },
          ].map((b) => (
            <div key={b.n}>
              <div className="font-display font-extrabold text-3xl text-nf-green mb-2">{b.n}</div>
              <h3 className="font-display font-bold text-xl mb-2">{b.t}</h3>
              <p className="text-sm text-nf-ink/70 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-nf-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display font-extrabold text-4xl mb-2">Ultime dal blog</h2>
              <p className="text-nf-ink/70">Approfondimenti, guide pratiche e risposte alle domande che riceviamo più spesso.</p>
            </div>
            <Link to="/blog" className="hidden md:inline text-sm font-medium hover:text-nf-green">Tutti gli articoli →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ultimiArticoli.map((a) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="group block bg-nf-bg border border-nf-line hover:border-nf-ink transition-colors">
                <img src={a.img} alt="" className="w-full aspect-[3/2] object-cover" />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-nf-green mb-2">{a.categoria} · {a.data}</div>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-nf-green transition-colors">{a.titolo}</h3>
                  <p className="text-sm text-nf-ink/70">{a.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-nf-ink text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-extrabold text-4xl mb-4">Iscriviti alla newsletter</h2>
          <p className="text-white/70 mb-8 text-lg">Ricevi guide nutrizionali, novità sui prodotti e sconti riservati. Una mail al mese, niente spam.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="La tua email" className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-nf-green" />
            <button className="bg-nf-green text-white font-medium px-6 py-3 hover:bg-nf-green/90 transition-colors">Iscriviti</button>
          </form>
          <p className="text-xs text-white/50 mt-4">Iscrivendoti accetti la nostra privacy policy. Puoi cancellarti in qualsiasi momento.</p>
        </div>
      </section>
    </>
  );
}
