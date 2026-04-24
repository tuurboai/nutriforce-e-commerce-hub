import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductHero({ prodotto }) {
  const [imgSrc, setImgSrc] = useState(null);
  const { add } = useCart();

  useEffect(() => {
    const t = setTimeout(() => {
      setImgSrc(prodotto.img);
    }, 1200);
    return () => clearTimeout(t);
  }, [prodotto.img]);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="bg-nf-surface aspect-square flex items-center justify-center overflow-hidden">
        {imgSrc ? (
          <img src={imgSrc} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      <div>
        {prodotto.badge && (
          <span className="inline-block bg-nf-red text-white text-xs font-semibold px-2 py-1 mb-4">{prodotto.badge}</span>
        )}
        <div className="text-xs uppercase tracking-wider text-nf-ink/50 mb-2">{prodotto.categoria} · {prodotto.grammi}{prodotto.porzioni ? ` · ${prodotto.porzioni} porzioni` : ""}</div>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-4">{prodotto.nome}</h1>
        <p className="text-lg text-nf-ink/70 mb-6 leading-relaxed">{prodotto.descrizioneBreve}</p>
        <div className="font-display font-extrabold text-3xl mb-6">{prodotto.prezzo}</div>
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => add(prodotto)} className="bg-nf-green text-white font-medium px-8 py-4 hover:bg-nf-green/90 transition-colors">
            Aggiungi al carrello
          </button>
          <span className="text-sm text-nf-ink/60">Spedizione gratuita sopra €50</span>
        </div>
        <div className="border-t border-nf-line pt-6 grid grid-cols-3 gap-4 text-xs text-nf-ink/60">
          <div>✓ Spedizione 24/48h</div>
          <div>✓ Reso entro 30 giorni</div>
          <div>✓ Pagamento sicuro</div>
        </div>
      </div>
    </div>
  );
}
