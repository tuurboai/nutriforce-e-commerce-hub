import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { count } = useCart();
  const linkCls = ({ isActive }) =>
    `text-sm font-medium hover:text-nf-green transition-colors ${isActive ? "text-nf-green" : "text-nf-ink"}`;
  return (
    <header className="sticky top-0 z-40 bg-nf-bg border-b border-nf-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h2 className="font-display font-extrabold text-2xl tracking-tight">
            NUTRI<span className="text-nf-green">FORCE</span>
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/catalogo" className={linkCls}>Catalogo</NavLink>
          <NavLink to="/blog" className={linkCls}>Blog</NavLink>
          <NavLink to="/chi-siamo" className={linkCls}>Chi siamo</NavLink>
          <NavLink to="/contatti" className={linkCls}>Contatti</NavLink>
        </nav>
        <Link to="/carrello" className="relative flex items-center gap-2 text-nf-ink hover:text-nf-green">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L4 2H1"/></svg>
          <span className="text-sm font-medium">Carrello</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-nf-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{count}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
