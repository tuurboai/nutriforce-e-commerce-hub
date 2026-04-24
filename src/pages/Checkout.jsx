import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  useEffect(() => { document.title = "Checkout"; }, []);
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display font-extrabold text-4xl mb-8">Checkout</h1>
      <form onSubmit={(e) => { e.preventDefault(); navigate("/checkout/conferma"); }} className="space-y-4">
        <input type="text" placeholder="Nome" className="w-full border border-nf-line px-4 py-3" />
        <input type="text" placeholder="Cognome" className="w-full border border-nf-line px-4 py-3" />
        <input type="email" placeholder="Email" className="w-full border border-nf-line px-4 py-3" />
        <input type="text" placeholder="Indirizzo" className="w-full border border-nf-line px-4 py-3" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Città" className="w-full border border-nf-line px-4 py-3" />
          <input type="text" placeholder="CAP" className="w-full border border-nf-line px-4 py-3" />
        </div>
        <input type="text" placeholder="Numero carta" className="w-full border border-nf-line px-4 py-3" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="MM/AA" className="w-full border border-nf-line px-4 py-3" />
          <input type="text" placeholder="CVC" className="w-full border border-nf-line px-4 py-3" />
        </div>
        <button type="submit" className="w-full bg-nf-green text-white py-4 font-medium hover:bg-nf-green/90">Completa ordine</button>
      </form>
    </div>
  );
}
