import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-nf-ink text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-extrabold text-2xl mb-4">NUTRI<span className="text-nf-green">FORCE</span></div>
          <p className="text-sm text-white/70 leading-relaxed">Supplementi per chi si allena davvero. Formulazioni pulite, ingredienti tracciabili, performance vere.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-nf-green">IG</a>
            <a href="#" className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-nf-green">FB</a>
            <a href="#" className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-nf-green">YT</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/catalogo" className="hover:text-nf-green">Catalogo completo</Link></li>
            <li><Link to="/catalogo/proteine" className="hover:text-nf-green">Proteine</Link></li>
            <li><Link to="/catalogo/pre-workout" className="hover:text-nf-green">Pre-Workout</Link></li>
            <li><Link to="/catalogo/aminoacidi" className="hover:text-nf-green">Aminoacidi</Link></li>
            <li><Link to="/catalogo/bundle" className="hover:text-nf-green">Bundle</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Brand</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/chi-siamo" className="hover:text-nf-green">Chi siamo</Link></li>
            <li><Link to="/blog" className="hover:text-nf-green">Blog</Link></li>
            <li><Link to="/contatti" className="hover:text-nf-green">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Legale</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/privacy-policy" className="hover:text-nf-green">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-nf-green">Cookie Policy</Link></li>
            <li><Link to="/termini-condizioni" className="hover:text-nf-green">Termini e Condizioni</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© 2025 NutriForce S.r.l. — P.IVA IT09384720117 — Sede Legale Torino, Italia</div>
          <div>Produzione ISO 22000 · Certificato Informed Sport</div>
        </div>
      </div>
    </footer>
  );
}
