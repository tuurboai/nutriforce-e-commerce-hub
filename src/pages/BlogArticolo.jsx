import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { articoli } from "@/data/blog";
import { prodotti } from "@/data/prodotti";

const corpoArticoli = {
  "quante-proteine-al-giorno": [
    { h2: "Il fabbisogno proteico di base", p: "La RDA classica indica 0.8g di proteine per chilogrammo di peso corporeo al giorno per un adulto sedentario. Si tratta però di una soglia minima per evitare la malnutrizione, non di un valore ottimale per chi si allena. Tutta la letteratura più recente sulla nutrizione sportiva concorda nell'indicare valori sensibilmente più alti per chi pratica attività fisica intensa con regolarità, sia con obiettivi di ipertrofia sia di mantenimento della massa magra durante una fase di dimagrimento." },
    { h2: "Quanto serve davvero a chi si allena?", p: "Per gli sportivi che fanno allenamento di forza con l'obiettivo di costruire massa muscolare, la maggior parte degli studi indica un range tra 1.6 e 2.2g per chilo di peso corporeo. Andare oltre i 2.2g/kg non sembra portare benefici aggiuntivi nella maggior parte dei casi. Per atleti di endurance i valori sono leggermente più bassi, intorno a 1.2-1.6g/kg, mentre durante una fase di restrizione calorica può essere utile salire fino a 2.4g/kg per preservare la massa magra. La distribuzione conta tanto quanto la quantità totale: assumere le proteine in 4-5 pasti distribuiti nell'arco della giornata, con almeno 20-40g per pasto, sembra essere più efficace per stimolare la sintesi proteica muscolare rispetto a concentrare tutto in 1-2 pasti molto abbondanti." },
    { h2: "Cibo o integratore?", p: "La risposta corretta è quasi sempre: prima il cibo, poi l'integratore. Una dieta varia che includa carne, pesce, uova, latticini, legumi e cereali integrali può facilmente coprire il fabbisogno proteico anche di chi si allena pesantemente. Le proteine in polvere diventano utili quando è difficile raggiungere il target giornaliero solo con il cibo, oppure quando serve una fonte proteica rapida e pratica nel post-workout. Una buona whey come la nostra può essere uno strumento eccellente per chiudere il gap proteico, ma non sostituisce mai il valore di una dieta ben strutturata. Se ti serve aiuto per scegliere, dai un'occhiata alla nostra Whey Protein Cioccolato, formulata con dosaggio reale di 24g di proteine per porzione." },
  ],
  "creatina-fa-male": [
    { h2: "Cos'è la creatina e come funziona", p: "La creatina è una molecola che il nostro corpo produce naturalmente a partire da tre aminoacidi (glicina, arginina e metionina) e che si trova in piccole quantità anche in alimenti come carne e pesce. Viene immagazzinata principalmente nei muscoli sotto forma di fosfocreatina, dove serve come riserva rapida di energia per sforzi brevi e intensi. L'integrazione di creatina monoidrato aumenta le riserve muscolari e si traduce in un miglioramento misurabile di forza, potenza ed esplosività." },
    { h2: "Sicurezza e miti da sfatare", p: "Negli ultimi quarant'anni la creatina monoidrato è stata l'integratore più studiato in assoluto, con centinaia di ricerche su sicurezza ed efficacia. La conclusione condivisa dalla comunità scientifica è chiara: la creatina è sicura per la maggior parte delle persone sane, anche con uso prolungato. I miti sui presunti danni renali sono stati smentiti più volte: l'aumento della creatinina sierica in chi assume creatina è dovuto al maggior turnover della molecola, non a un danno renale. Anche le voci sulla ritenzione idrica eccessiva sono in gran parte esagerate: c'è un leggero aumento dell'acqua intracellulare (utile per la performance), non un gonfiore visibile." },
    { h2: "Come assumerla correttamente", p: "Il protocollo più semplice ed efficace è 3-5 grammi al giorno, ogni giorno, senza fasi di carico. Il momento di assunzione non è critico, ma molti preferiscono prenderla insieme al pasto post-allenamento per favorirne l'assorbimento. Non servono cicli: si può assumere continuativamente. Per saperne di più sulla nostra formulazione pura, scopri la Creatina Monoidrato NutriForce." },
  ],
  "pre-workout-quando-prenderlo": [
    { h2: "Cosa contiene un buon pre-workout", p: "Un pre-workout efficace combina ingredienti con prove solide a supporto: caffeina per il focus mentale e la riduzione della percezione della fatica, beta-alanina per tamponare l'acidosi muscolare, citrullina per il flusso ematico e il pump, eventualmente creatina e tirosina. Diffida delle formule con proprietary blend dove non sono dichiarate le quantità dei singoli ingredienti: spesso sono usate per nascondere dosaggi inadeguati." },
    { h2: "Timing ottimale e dosaggi", p: "Il pre-workout va assunto 20-30 minuti prima dell'allenamento, sciolto in 250-300ml di acqua. La caffeina raggiunge il picco ematico dopo circa 45 minuti, quindi il timing è pensato per farti arrivare al cuore della sessione con la massima carica. Inizia sempre con metà dose per valutare la tua tolleranza individuale, soprattutto se sei sensibile alla caffeina o non sei abituato a beta-alanina (che può causare la classica sensazione di formicolio innocua chiamata parestesia)." },
    { h2: "Quando evitarlo", p: "Non assumere pre-workout nelle 6 ore precedenti il sonno se vuoi evitare disturbi del riposo. Se hai problemi cardiovascolari, ipertensione o ansia, parla con il tuo medico prima di iniziare. Per gli allenamenti di pura tecnica o di bassa intensità, un pre-workout completo è probabilmente eccessivo: in quei casi può bastare un caffè. Per le sedute più dure invece può fare la differenza: dai un'occhiata al nostro Pre-Workout Explosive, formulato con dosaggi clinici di tutti gli ingredienti chiave." },
  ],
  "differenza-whey-isolate-concentrate": [
    { h2: "Whey concentrate: il classico equilibrato", p: "La whey concentrate è la forma più comune di proteine del siero del latte. Contiene tipicamente tra il 70 e l'80% di proteine, con piccole quantità di grassi e carboidrati (incluso il lattosio). È un prodotto eccellente per la maggior parte delle persone, con un ottimo rapporto qualità-prezzo e un sapore generalmente più cremoso e pieno rispetto all'isolato. Per chi non ha intolleranze e cerca semplicemente di aumentare l'apporto proteico giornaliero, la concentrate è quasi sempre la scelta più sensata." },
    { h2: "Whey isolate: purezza massima", p: "L'isolato di siero del latte subisce un processo di filtrazione più spinto che porta il contenuto proteico oltre il 90%, con quantità minime di grassi e zuccheri. Il lattosio è ridotto a livelli trascurabili, rendendola adatta anche a chi ha sensibilità al lattosio. Il prezzo è più alto, e il profilo organolettico tende a essere più leggero e meno cremoso. È la scelta ideale in fase di definizione, quando ogni grammo di carboidrato e grasso conta, oppure per chi cerca la massima purezza proteica per porzione." },
    { h2: "Quale scegliere?", p: "Se sei in mantenimento o in fase di costruzione muscolare e tolleri bene il lattosio, la whey concentrate offre il miglior compromesso tra qualità, sapore e prezzo. Se sei in cut, hai sensibilità al lattosio o vuoi semplicemente il prodotto con il profilo più pulito, scegli l'isolato. Per saperne di più sulla nostra formulazione premium senza zuccheri, dai un'occhiata alla Whey Isolate Zero Zuccheri." },
  ],
  "integratori-vegani-sport": [
    { h2: "Le sfide della nutrizione plant-based per gli sportivi", p: "Una dieta vegana ben strutturata può coprire perfettamente i fabbisogni di chi si allena, ma richiede attenzione in più rispetto a una dieta onnivora. I punti critici tipici sono: profilo aminoacidico (le proteine vegetali singole sono spesso incomplete), vitamina B12 (assente nei vegetali), creatina (presente solo in carne e pesce), omega-3 EPA e DHA, ferro eme, zinco e vitamina D." },
    { h2: "Cosa integrare davvero", p: "Per uno sportivo vegano, gli integratori realmente utili sono pochi ma fondamentali. Una buona proteina vegetale a base di pisello e riso (o un blend multi-fonte) per coprire il fabbisogno proteico con un profilo aminoacidico completo: la nostra Vegan Protein Pisello e Riso è pensata proprio per questo. Vitamina B12 (sublinguale o in capsule), assolutamente necessaria. Vitamina D3 di origine vegetale, soprattutto nei mesi invernali. Omega-3 algali come fonte di EPA e DHA. Creatina monoidrato, particolarmente utile per i vegani perché le riserve muscolari di base sono più basse." },
    { h2: "Cosa invece non serve", p: "Diffida dei kit completissimi pieni di superfood costosi e ingredienti esotici: nella maggior parte dei casi non aggiungono valore reale alla tua nutrizione. Concentrati sui basics fatti bene, in dosaggi seri, e investi il resto del budget in cibo vero di qualità. La nutrizione plant-based per sportivi non è complicata, è solo questione di coprire intelligentemente i pochi punti critici." },
  ],
};

export default function BlogArticolo() {
  const { slug } = useParams();
  const articolo = articoli.find((a) => a.slug === slug);
  useEffect(() => { if (articolo) document.title = articolo.titolo; }, [articolo]);
  if (!articolo) return <div className="max-w-3xl mx-auto px-6 py-20">Articolo non trovato.</div>;
  const corpo = corpoArticoli[slug] || [];
  const prodottoLink = prodotti.find((p) => p.slug === articolo.prodottoCorrelato);
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/blog" className="text-sm text-nf-ink/60 hover:text-nf-green">← Tutti gli articoli</Link>
      <div className="text-xs uppercase tracking-wider text-nf-green mt-8 mb-3">{articolo.categoria} · {articolo.data}</div>
      <h1 className="font-display font-extrabold text-5xl mb-6 leading-tight">{articolo.titolo}</h1>
      <p className="text-xl text-nf-ink/70 mb-8 leading-relaxed">{articolo.intro}</p>
      <img src={`https://picsum.photos/seed/${slug}/1200/600`} className="w-full aspect-[2/1] object-cover mb-10" />

      <div className="space-y-8 text-lg text-nf-ink/80 leading-relaxed">
        <p>Quello che segue è un approfondimento basato sulla letteratura scientifica più recente e sulla nostra esperienza diretta come produttori di integratori sportivi. L'obiettivo è darti informazioni concrete e azionabili, senza sensazionalismi.</p>
        {corpo.map((s, i) => (
          <div key={i}>
            <h2 className="font-display font-bold text-3xl text-nf-ink mb-4 mt-10">{s.h2}</h2>
            <p>{s.p}</p>
          </div>
        ))}
        <p className="border-l-4 border-nf-green pl-6 italic text-nf-ink/70 mt-10">In sintesi: l'approccio basato sui dati funziona meglio del marketing. Studia, sperimenta su te stesso con metodo e ricordati che gli integratori sono solo uno dei tasselli, non la base.</p>
        {prodottoLink && (
          <div className="bg-nf-surface p-8 mt-12 flex items-center gap-6">
            <img src={`https://picsum.photos/seed/${prodottoLink.slug}/200/200`} alt="" className="w-24 h-24 object-cover" />
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-nf-green mb-1">Prodotto correlato</div>
              <div className="font-display font-bold text-xl mb-2">{prodottoLink.nome}</div>
              <Link to={`/prodotto/${prodottoLink.slug}`} className="text-nf-green font-medium hover:underline">Scopri di più →</Link>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
