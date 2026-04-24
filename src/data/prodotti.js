import wheyCioccolato from "@/assets/prod-whey-cioccolato.jpg";
import wheyVaniglia from "@/assets/prod-whey-vaniglia.jpg";
import vegan from "@/assets/prod-vegan.jpg";
import preworkout from "@/assets/prod-preworkout.jpg";
import creatina from "@/assets/prod-creatina.jpg";
import bcaa from "@/assets/prod-bcaa.jpg";
import omega3 from "@/assets/prod-omega3.jpg";
import vitamind from "@/assets/prod-vitamind.jpg";
import magnesio from "@/assets/prod-magnesio.jpg";
import bundle from "@/assets/prod-bundle.jpg";

export const prodotti = [
  { slug: "whey-protein-cioccolato", nome: "Whey Protein Cioccolato", categoria: "Proteine", prezzo: "€39,90", prezzoNumerico: 39.9, grammi: "900g", porzioni: 30, descrizioneBreve: "Proteine del siero del latte ad alto assorbimento. 24g di proteine per dose.", badge: "Bestseller", img: wheyCioccolato },
  { slug: "whey-protein-vaniglia", nome: "Whey Protein Vaniglia", categoria: "Proteine", prezzo: "€39,90", prezzoNumerico: 39.9, grammi: "900g", porzioni: 30, descrizioneBreve: "Stessa qualità della versione cioccolato, gusto vaniglia bourbon naturale.", badge: null, img: wheyVaniglia },
  { slug: "proteine-vegane-pisello", nome: "Vegan Protein — Pisello e Riso", categoria: "Proteine", prezzo: "€44,90", prezzoNumerico: 44.9, grammi: "750g", porzioni: 25, descrizioneBreve: "Blend proteico 100% vegetale. Profilo aminoacidico completo senza lattosio.", badge: "Vegan", img: vegan },
  { slug: "whey-isolate-zero-zuccheri", nome: "Whey Isolate — Zero Zuccheri", categoria: "Proteine", prezzo: "€54,90", prezzoNumerico: 54.9, grammi: "900g", porzioni: 30, descrizioneBreve: "Isolato di siero purissimo. Minimo 90% di proteine, zero zuccheri aggiunti.", badge: "Premium", img: wheyVaniglia },
  { slug: "caseina-notte", nome: "Caseina Micellare — Recupero Notturno", categoria: "Proteine", prezzo: "€42,90", prezzoNumerico: 42.9, grammi: "800g", porzioni: 26, descrizioneBreve: "Proteina a rilascio lento. Ideale prima di dormire per il recupero muscolare.", badge: null, img: wheyCioccolato },
  { slug: "pre-workout-explosive", nome: "Pre-Workout Explosive", categoria: "Pre-Workout", prezzo: "€34,90", prezzoNumerico: 34.9, grammi: "300g", porzioni: 30, descrizioneBreve: "Formula avanzata con caffeina, beta-alanina e citrullina. Energia e focus massimi.", badge: "Bestseller", img: preworkout },
  { slug: "caffeina-compresse", nome: "Caffeina 200mg — Compresse", categoria: "Pre-Workout", prezzo: "€12,90", prezzoNumerico: 12.9, grammi: "60 cpr", porzioni: 60, descrizioneBreve: "Caffeina pura in compresse. Boost energetico rapido senza zuccheri.", badge: null, img: vitamind },
  { slug: "beta-alanina", nome: "Beta-Alanina Pura", categoria: "Pre-Workout", prezzo: "€19,90", prezzoNumerico: 19.9, grammi: "250g", porzioni: 50, descrizioneBreve: "Riduce l'affaticamento muscolare e aumenta la resistenza durante l'allenamento.", badge: null, img: preworkout },
  { slug: "bcaa-2-1-1", nome: "BCAA 2:1:1 — Aminoacidi Ramificati", categoria: "Aminoacidi", prezzo: "€24,90", prezzoNumerico: 24.9, grammi: "300g", porzioni: 30, descrizioneBreve: "Rapporto classico 2:1:1 tra leucina, isoleucina e valina. Anti-catabolico.", badge: null, img: bcaa },
  { slug: "glutammina-pura", nome: "L-Glutammina Pura", categoria: "Aminoacidi", prezzo: "€18,90", prezzoNumerico: 18.9, grammi: "300g", porzioni: 60, descrizioneBreve: "Supporta il recupero muscolare e il sistema immunitario dopo l'allenamento.", badge: null, img: bcaa },
  { slug: "creatina-monoidrato", nome: "Creatina Monoidrato", categoria: "Aminoacidi", prezzo: "€16,90", prezzoNumerico: 16.9, grammi: "300g", porzioni: 60, descrizioneBreve: "L'integratore più studiato al mondo. Aumenta forza e performance in modo comprovato.", badge: "Bestseller", img: creatina },
  { slug: "eaa-essential-amino", nome: "EAA — Aminoacidi Essenziali", categoria: "Aminoacidi", prezzo: "€29,90", prezzoNumerico: 29.9, grammi: "350g", porzioni: 35, descrizioneBreve: "Tutti e 9 gli aminoacidi essenziali in un unico prodotto. Gusto anguria.", badge: null, img: bcaa },
  { slug: "vitamina-d3-k2", nome: "Vitamina D3 + K2", categoria: "Vitamine", prezzo: "€14,90", prezzoNumerico: 14.9, grammi: "60 cpr", porzioni: 60, descrizioneBreve: "Combo sinergica per ossa, sistema immunitario e salute cardiovascolare.", badge: null, img: vitamind },
  { slug: "omega-3-fish-oil", nome: "Omega-3 Fish Oil 1000mg", categoria: "Vitamine", prezzo: "€19,90", prezzoNumerico: 19.9, grammi: "90 perle", porzioni: 90, descrizioneBreve: "Olio di pesce ad alta purezza. EPA e DHA per cuore, cervello e articolazioni.", badge: null, img: omega3 },
  { slug: "magnesio-supremo", nome: "Magnesio Bisglicinato", categoria: "Vitamine", prezzo: "€16,90", prezzoNumerico: 16.9, grammi: "120 cpr", porzioni: 60, descrizioneBreve: "Forma altamente biodisponibile. Riduce crampi, stanchezza e migliora il sonno.", badge: null, img: magnesio },
  { slug: "multivitaminico-sport", nome: "Multivitaminico Sport", categoria: "Vitamine", prezzo: "€22,90", prezzoNumerico: 22.9, grammi: "60 cpr", porzioni: 30, descrizioneBreve: "Formula completa con 23 vitamine e minerali. Pensato per chi si allena ogni giorno.", badge: null, img: vitamind },
  { slug: "bundle-starter-pack", nome: "Starter Pack — Inizia ad Allenarti", categoria: "Bundle", prezzo: "€79,90", prezzoNumerico: 79.9, grammi: "Kit", porzioni: null, descrizioneBreve: "Whey Protein + Creatina + Multivitaminico. Tutto il necessario per iniziare.", badge: "Risparmia 20%", img: bundle },
  { slug: "bundle-massa-muscolare", nome: "Mass Gainer Bundle", categoria: "Bundle", prezzo: "€99,90", prezzoNumerico: 99.9, grammi: "Kit", porzioni: null, descrizioneBreve: "Whey Isolate + EAA + Creatina + Pre-Workout. Il kit completo per la massa.", badge: "Risparmia 25%", img: bundle },
  { slug: "bundle-dimagrimento", nome: "Fat Loss Bundle", categoria: "Bundle", prezzo: "€89,90", prezzoNumerico: 89.9, grammi: "Kit", porzioni: null, descrizioneBreve: "Vegan Protein + Caffeina + Omega-3 + Vitamina D3. Supporto completo al dimagrimento.", badge: "Risparmia 22%", img: bundle },
  { slug: "bundle-recupero-totale", nome: "Recovery Bundle", categoria: "Bundle", prezzo: "€74,90", prezzoNumerico: 74.9, grammi: "Kit", porzioni: null, descrizioneBreve: "Caseina + Glutammina + Magnesio. Il trio del recupero notturno perfetto.", badge: null, img: bundle },
];

export const categorie = ["Proteine", "Pre-Workout", "Aminoacidi", "Vitamine", "Bundle"];

export const slugCategoria = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");
