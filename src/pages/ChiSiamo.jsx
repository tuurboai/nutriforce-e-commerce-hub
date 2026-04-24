import { useEffect } from "react";
import teamImg from "@/assets/team.jpg";

export default function ChiSiamo() {
  useEffect(() => { document.title = "Chi siamo — NutriForce"; }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-wider text-nf-green mb-3">La nostra storia</div>
      <h1 className="font-display font-extrabold text-5xl mb-8 leading-tight">Nutrizione sportiva fatta sul serio, dal 2019</h1>
      <img src={teamImg} className="w-full aspect-[2/1] object-cover mb-10" />

      <div className="prose max-w-none text-nf-ink/80 leading-relaxed space-y-5 text-lg">
        <p>NutriForce nasce a Torino nel 2019 dall'idea di tre amici accomunati dalla passione per lo sport e dalla frustrazione verso un mercato degli integratori dominato da claim esagerati, etichette poco chiare e prodotti formulati più per il marketing che per i risultati. Volevamo qualcosa di diverso: supplementi seri, formulazioni pulite, dosaggi onesti.</p>

        <h2 className="font-display font-bold text-3xl text-nf-ink mt-10">La nostra missione</h2>
        <p>La nostra missione è semplice: produrre integratori sportivi di alta qualità per chi si allena davvero. Niente pozioni magiche, niente promesse irrealistiche, niente miscele segrete. Solo prodotti formulati con ingredienti tracciati, dosaggi clinicamente attivi e un'etichetta che puoi leggere e capire fino in fondo.</p>
        <p>In sei anni abbiamo venduto oltre 48.000 prodotti, costruito una community di atleti, runner, appassionati di palestra e professionisti della nutrizione che si fidano di noi. Le 4.7 stelle medie su oltre tremila recensioni verificate sono il risultato di una sola cosa: fare bene il proprio lavoro, ogni singolo giorno.</p>

        <h2 className="font-display font-bold text-3xl text-nf-ink mt-10">I nostri valori</h2>
        <p>Crediamo nella trasparenza assoluta: pubblichiamo le analisi di laboratorio per ogni lotto, dichiariamo i fornitori delle materie prime e non utilizziamo proprietary blend per nascondere quantità inadeguate di ingredienti. Crediamo nella qualità: produciamo nel nostro stabilimento ISO 22000 e tutti i prodotti sono certificati Informed Sport, che garantisce l'assenza di sostanze proibite per gli atleti agonisti.</p>
        <p>Crediamo nella performance reale: ogni formulazione nasce da uno studio attento della letteratura scientifica e include solo ingredienti che hanno prove robuste a supporto. Se un componente non ha basi solide, non lo usiamo, anche se è di moda.</p>

        <h2 className="font-display font-bold text-3xl text-nf-ink mt-10">Il team</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          { n: "Luca Bianchi", r: "Co-founder & CEO" },
          { n: "Elena Marchetti", r: "Head of R&D, biotecnologa" },
          { n: "Davide Conti", r: "Responsabile produzione" },
        ].map((m) => (
          <div key={m.n} className="border border-nf-line p-6 text-center">
            <img src={teamImg} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
            <div className="font-display font-bold text-lg">{m.n}</div>
            <div className="text-sm text-nf-ink/60">{m.r}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-nf-line text-center">
        <div><div className="font-display font-extrabold text-4xl text-nf-green">48k+</div><div className="text-sm text-nf-ink/60 mt-1">Prodotti venduti</div></div>
        <div><div className="font-display font-extrabold text-4xl text-nf-green">4.7/5</div><div className="text-sm text-nf-ink/60 mt-1">Recensioni clienti</div></div>
        <div><div className="font-display font-extrabold text-4xl text-nf-green">2019</div><div className="text-sm text-nf-ink/60 mt-1">Anno fondazione</div></div>
      </div>
    </div>
  );
}
