import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Carrello() {
  const { items } = useCart();
  const totale = items.reduce((s, p) => s + (p.prezzoNumerico || 0), 0);
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display font-extrabold text-4xl mb-8">Il tuo carrello</h1>
      {items.length === 0 ? (
        <div className="border border-nf-line p-12 text-center">
          <p className="text-nf-ink/70 mb-6">Il carrello è vuoto.</p>
          <Link to="/catalogo" className="inline-block bg-nf-green text-white px-6 py-3 font-medium">Esplora il catalogo</Link>
        </div>
      ) : (
        <>
          <div className="border border-nf-line divide-y divide-nf-line mb-8">
            {items.map((p, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <img src={`https://picsum.photos/seed/${p.slug}/120/120`} alt="" className="w-20 h-20 object-cover" />
                <div className="flex-1">
                  <div className="font-display font-bold">{p.nome}</div>
                  <div className="text-sm text-nf-ink/60">{p.grammi}</div>
                </div>
                <div className="font-display font-bold">{p.prezzo}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg">Totale</span>
            <span className="font-display font-extrabold text-2xl">€{totale.toFixed(2).replace(".", ",")}</span>
          </div>
          <Link to="/checkout" className="block text-center bg-nf-green text-white py-4 font-medium hover:bg-nf-green/90">Procedi al checkout</Link>
        </>
      )}
    </div>
  );
}
