import { useParams, Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { prodotti, categorie, slugCategoria } from "@/data/prodotti";

const descrizioni = {
  "proteine": {
    nome: "Proteine Sportive",
    intro: "Le proteine in polvere sono il pilastro della nutrizione di chi si allena con costanza. La nostra linea include whey concentrate, isolate, caseine micellari e blend vegetali al 100%. Ogni formulazione è ottimizzata per garantire un profilo aminoacidico completo, alta digeribilità e dosaggi proteici reali per porzione.",
    extra: "Scegli la whey per il post-workout, la caseina per il recupero notturno o la nostra Vegan Protein se segui una dieta plant-based. Tutti i nostri prodotti sono privi di edulcoranti aggressivi e coloranti artificiali, e sono certificati Informed Sport per garantire l'assenza di sostanze proibite.",
  },
  "pre-workout": {
    nome: "Pre-Workout & Energia",
    intro: "I nostri pre-workout sono formulati per offrirti energia stabile, focus mentale e maggiore resistenza durante le sessioni più impegnative. Caffeina, beta-alanina, citrullina e creatina lavorano in sinergia per aumentare la performance senza il classico crollo energetico post-allenamento.",
    extra: "Scegli la formula completa Explosive per le sedute più dure, oppure i singoli ingredienti come caffeina o beta-alanina se preferisci costruire il tuo stack personalizzato. Inizia sempre con mezza dose per valutare la tua tolleranza.",
  },
  "aminoacidi": {
    nome: "Aminoacidi & Recupero",
    intro: "BCAA, EAA, glutammina e creatina monoidrato: gli aminoacidi sono fondamentali per il recupero muscolare, la sintesi proteica e la performance a lungo termine. La nostra gamma copre tutte le esigenze, dai protocolli intra-workout al supporto del sistema immunitario.",
    extra: "La creatina monoidrato è uno degli integratori più studiati al mondo, con benefici comprovati su forza ed esplosività. Gli EAA forniscono tutti e nove gli aminoacidi essenziali, mentre BCAA e glutammina sono ideali come supporto durante e dopo l'allenamento.",
  },
  "vitamine": {
    nome: "Vitamine & Benessere",
    intro: "Una buona base vitaminica e minerale è ciò che permette a tutto il resto di funzionare. La nostra linea include vitamina D3 con K2, omega-3 ad alta purezza, magnesio bisglicinato e un multivitaminico pensato specificamente per chi si allena ogni giorno.",
    extra: "Le carenze più comuni tra gli sportivi sono vitamina D, magnesio e omega-3: tre nutrienti essenziali per ossa, recupero, salute cardiovascolare e qualità del sonno. I nostri prodotti utilizzano sempre le forme più biodisponibili disponibili sul mercato.",
  },
  "bundle": {
    nome: "Bundle & Kit",
    intro: "I nostri bundle combinano i prodotti più richiesti in pacchetti pensati per obiettivi specifici, con uno sconto significativo rispetto all'acquisto singolo. Starter pack, kit massa, dimagrimento e recupero notturno: scegli quello adatto a te e parti con tutto il necessario.",
    extra: "Ogni bundle include una guida pratica per l'utilizzo combinato dei prodotti, con dosaggi consigliati e timing ottimale rispetto agli allenamenti. È il modo più semplice per iniziare o per rinnovare la propria scorta mensile risparmiando.",
  },
};

export default function CatalogoCategoria() {
  const { categoria } = useParams();
  const cat = categorie.find((c) => slugCategoria(c) === categoria);
  const desc = descrizioni[categoria] || { nome: cat || categoria, intro: "Esplora i prodotti di questa categoria.", extra: "" };
  const filtrati = cat ? prodotti.filter((p) => p.categoria === cat) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/catalogo" className="text-sm text-nf-ink/60 hover:text-nf-green">← Tutti i prodotti</Link>
      <header className="max-w-3xl my-8">
        <div className="text-xs uppercase tracking-wider text-nf-green mb-3">Categoria</div>
        <h1 className="font-display font-extrabold text-5xl mb-5 leading-tight">{desc.nome}</h1>
        <p className="text-lg text-nf-ink/70 leading-relaxed mb-4">{desc.intro}</p>
        <p className="text-base text-nf-ink/60 leading-relaxed">{desc.extra}</p>
      </header>
      <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-nf-line">
        <Link to="/catalogo" className="px-4 py-2 border border-nf-line text-sm font-medium hover:border-nf-ink">Tutti</Link>
        {categorie.map((c) => (
          <Link key={c} to={`/catalogo/${slugCategoria(c)}`} className={`px-4 py-2 text-sm font-medium ${slugCategoria(c) === categoria ? "bg-nf-ink text-white" : "border border-nf-line hover:border-nf-ink"}`}>{c}</Link>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtrati.map((p) => <ProductCard key={p.slug} prodotto={p} />)}
      </div>
    </div>
  );
}
