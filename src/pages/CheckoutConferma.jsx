import { Link } from "react-router-dom";

export default function CheckoutConferma() {
  return (
    <div className="min-h-screen bg-nf-bg flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-nf-green/10 text-nf-green flex items-center justify-center text-3xl mb-6">✓</div>
      <h1 className="font-display font-extrabold text-4xl mb-4">Ordine confermato</h1>
      <p className="text-nf-ink/70 mb-8 max-w-md">Grazie per il tuo acquisto. Riceverai una mail di conferma con tutti i dettagli e il numero di tracking della spedizione.</p>
      <Link to="/" className="bg-nf-ink text-white px-6 py-3 font-medium">Torna alla home</Link>
    </div>
  );
}
