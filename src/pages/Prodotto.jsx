import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductHero from "@/components/ProductHero";
import ProductCard from "@/components/ProductCard";
import { prodotti } from "@/data/prodotti";

const recensioniMock = [
  { nome: "Marco P.", voto: 5, testo: "Prodotto eccellente, qualità altissima. Si scioglie benissimo e il sapore è ottimo, niente del solito retrogusto chimico. Lo prendo da mesi e ho visto ottimi risultati." },
  { nome: "Giulia R.", voto: 5, testo: "Finalmente un brand italiano serio. Etichetta pulita, ingredienti tracciabili e spedizione velocissima. Lo consiglio a chiunque cerchi un integratore di qualità." },
  { nome: "Stefano M.", voto: 4, testo: "Buon rapporto qualità-prezzo. Confezione robusta, dosaggio chiaro. Una stella in meno solo perché preferirei più formati disponibili, ma il prodotto in sé è eccellente." },
];

export default function Prodotto() {
  const { slug } = useParams();
  const prodotto = prodotti.find((p) => p.slug === slug);
  const [tab, setTab] = useState("descrizione");

  useEffect(() => { if (prodotto) document.title = prodotto.nome; }, [prodotto]);

  if (!prodotto) return <div className="max-w-7xl mx-auto px-6 py-20">Prodotto non trovato.</div>;

  const correlati = prodotti.filter((p) => p.categoria === prodotto.categoria && p.slug !== prodotto.slug).slice(0, 3);

  const descrizioneEstesa = `${prodotto.nome} è uno dei prodotti di punta della linea ${prodotto.categoria} di NutriForce. Formulato nel nostro stabilimento di Torino seguendo lo standard ISO 22000, utilizza ingredienti selezionati da fornitori certificati e testati lotto per lotto per purezza e dosaggio. Ogni confezione contiene ${prodotto.grammi}${prodotto.porzioni ? ` per un totale di ${prodotto.porzioni} porzioni` : ""}, pensata per accompagnarti nelle settimane di allenamento più intense. Quello che ci differenzia è la trasparenza: pubblichiamo le analisi di laboratorio per ogni lotto, e in etichetta trovi solo ciò che è effettivamente nel prodotto, senza proprietary blend o quantità simboliche di ingredienti di moda. Abbiamo formulato ${prodotto.nome} per offrire risultati misurabili a chi si allena seriamente, con dosaggi clinicamente attivi di ogni componente e zero compromessi sulla qualità delle materie prime.`;

  const ingredientiMap = {
    "Proteine": ["Concentrato proteico del siero del latte", "Aroma naturale", "Lecitina di girasole", "Cloruro di sodio", "Sucralosio", "Enzimi digestivi (protease, lattasi)"],
    "Pre-Workout": ["Citrullina malato 6g", "Beta-alanina 3.2g", "Caffeina anidra 200mg", "L-Tirosina 1.5g", "Taurina 1g", "Vitamine del gruppo B", "Aroma naturale"],
    "Aminoacidi": ["L-Leucina", "L-Isoleucina", "L-Valina", "Acido citrico", "Aroma naturale", "Sucralosio", "Steviolglicosidi"],
    "Vitamine": ["Principio attivo standardizzato", "Olio MCT", "Capsula vegetale (HPMC)", "Antiagglomerante naturale"],
    "Bundle": ["Vedi etichette dei singoli prodotti contenuti nel kit"],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <nav className="text-sm text-nf-ink/60 mb-8">
        <Link to="/" className="hover:text-nf-green">Home</Link> / <Link to="/catalogo" className="hover:text-nf-green">Catalogo</Link> / <span className="text-nf-ink">{prodotto.nome}</span>
      </nav>

      <ProductHero prodotto={prodotto} />

      {/* Tabs */}
      <div className="mt-20 border-t border-nf-line pt-12">
        <div className="flex flex-wrap gap-2 border-b border-nf-line mb-8">
          {[
            { id: "descrizione", l: "Descrizione" },
            { id: "ingredienti", l: "Ingredienti" },
            { id: "uso", l: "Come si usa" },
            { id: "recensioni", l: "Recensioni" },
          ].map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${tab === t.id ? "border-nf-green text-nf-green" : "border-transparent text-nf-ink/60 hover:text-nf-ink"}`}>{t.l}</button>
          ))}
        </div>

        {tab === "descrizione" && (
          <div className="max-w-3xl">
            <h3 className="font-display font-bold text-2xl mb-4">Descrizione completa</h3>
            <p className="text-nf-ink/80 leading-relaxed mb-4">{descrizioneEstesa}</p>
            <p className="text-nf-ink/80 leading-relaxed">Pensato per atleti, appassionati di palestra, runner e sportivi a tutti i livelli. Si integra perfettamente in qualsiasi piano nutrizionale strutturato e può essere utilizzato in combinazione con gli altri prodotti della gamma NutriForce per costruire un protocollo completo. Il packaging è progettato per garantire la massima conservazione delle proprietà del prodotto fino all'ultima dose.</p>
          </div>
        )}

        {tab === "ingredienti" && (
          <div className="max-w-3xl">
            <h3 className="font-display font-bold text-2xl mb-4">Lista ingredienti</h3>
            <p className="text-nf-ink/70 mb-6">Etichetta pulita, nessun proprietary blend. Ogni ingrediente è dichiarato in ordine decrescente per quantità.</p>
            <ul className="space-y-2">
              {(ingredientiMap[prodotto.categoria] || []).map((i) => (
                <li key={i} className="flex items-start gap-3 text-nf-ink/80"><span className="text-nf-green mt-1">•</span> {i}</li>
              ))}
            </ul>
            <p className="text-sm text-nf-ink/60 mt-6">Senza glutine. Prodotto in stabilimento che tratta latte, soia e frutta a guscio.</p>
          </div>
        )}

        {tab === "uso" && (
          <div className="max-w-3xl">
            <h3 className="font-display font-bold text-2xl mb-4">Uso consigliato</h3>
            <p className="text-nf-ink/80 leading-relaxed mb-3">Assumere una porzione al giorno, preferibilmente nei 30 minuti successivi all'allenamento o secondo le indicazioni del proprio nutrizionista. Sciogliere in 250-300ml di acqua fredda o bevanda vegetale.</p>
            <p className="text-nf-ink/80 leading-relaxed">Non superare la dose giornaliera raccomandata. Tenere fuori dalla portata dei bambini sotto i tre anni. Gli integratori non vanno intesi come sostituti di una dieta variata ed equilibrata e di uno stile di vita sano.</p>
          </div>
        )}

        {tab === "recensioni" && (
          <div className="max-w-3xl space-y-6">
            <h3 className="font-display font-bold text-2xl mb-4">Recensioni clienti</h3>
            {recensioniMock.map((r, i) => (
              <div key={i} className="border border-nf-line p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{r.nome}</div>
                  <div className="text-nf-green">{"★".repeat(r.voto)}{"☆".repeat(5 - r.voto)}</div>
                </div>
                <p className="text-nf-ink/80 leading-relaxed">{r.testo}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Correlati */}
      {correlati.length > 0 && (
        <section className="mt-24">
          <h3 className="font-display font-extrabold text-3xl mb-8">Prodotti correlati</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {correlati.map((p) => <ProductCard key={p.slug} prodotto={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
