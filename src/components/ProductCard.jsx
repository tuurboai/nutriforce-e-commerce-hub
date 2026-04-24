import { Link } from "react-router-dom";

export default function ProductCard({ prodotto }) {
  return (
    <Link to={`/prodotto/${prodotto.slug}`} className="group block border border-nf-line bg-nf-bg hover:border-nf-ink transition-colors">
      <div className="relative">
        {prodotto.badge && (
          <span className="absolute top-3 left-3 z-10 bg-nf-red text-white text-xs font-semibold px-2 py-1">
            {prodotto.badge}
          </span>
        )}
        <img src={prodotto.img} />
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wider text-nf-ink/50 mb-1">{prodotto.categoria} · {prodotto.grammi}</div>
        <h3 className="font-display font-bold text-base mb-1 group-hover:text-nf-green transition-colors">{prodotto.nome}</h3>
        <p className="text-sm text-nf-ink/70 line-clamp-2 mb-3">{prodotto.descrizioneBreve}</p>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-lg">{prodotto.prezzo}</span>
          <span className="text-nf-green">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
