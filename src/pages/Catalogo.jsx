import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { prodotti, categorie, slugCategoria } from "@/data/prodotti";
import { Link } from "react-router-dom";

export default function Catalogo() {
  useEffect(() => { document.title = "Catalogo Prodotti"; }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <header className="max-w-3xl mb-12">
        <div className="text-xs uppercase tracking-wider text-nf-green mb-3">Shop NutriForce</div>
        <h1 className="font-display font-extrabold text-5xl mb-5 leading-tight">Catalogo Integratori Sportivi</h1>
        <p className="text-lg text-nf-ink/70 leading-relaxed mb-4">
          Esplora tutta la gamma NutriForce: proteine in polvere, pre-workout, aminoacidi essenziali, vitamine, minerali e bundle pensati per ogni obiettivo. Ogni prodotto è formulato nel nostro stabilimento di Torino con ingredienti tracciati e dosaggi clinicamente attivi, senza riempitivi né proprietary blend.
        </p>
        <p className="text-base text-nf-ink/60 leading-relaxed">
          Cerchi un supporto per la massa muscolare, vuoi migliorare il recupero post-allenamento o stai costruendo la tua routine quotidiana di benessere? Filtra per categoria e trova ciò che fa per te. Tutti i prodotti sono certificati Informed Sport e prodotti secondo lo standard ISO 22000.
        </p>
      </header>

      <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-nf-line">
        <button className="px-4 py-2 bg-nf-ink text-white text-sm font-medium">Tutti</button>
        {categorie.map((c) => (
          <Link key={c} to={`/catalogo/${slugCategoria(c)}`} className="px-4 py-2 border border-nf-line text-sm font-medium hover:border-nf-ink transition-colors">{c}</Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prodotti.map((p) => <ProductCard key={p.slug} prodotto={p} />)}
      </div>
    </div>
  );
}
