export default function Contatti() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-xs uppercase tracking-wider text-nf-green mb-3">Parliamone</div>
      <h1 className="font-display font-extrabold text-5xl mb-6 leading-tight">Contattaci</h1>
      <p className="text-lg text-nf-ink/70 max-w-2xl mb-12 leading-relaxed">
        Hai bisogno di consigli su quale prodotto scegliere, una domanda sul tuo ordine o vuoi proporci una collaborazione? Scrivici: rispondiamo a tutte le mail entro 24 ore lavorative. Per richieste urgenti puoi chiamarci dal lunedì al venerdì, dalle 9 alle 18.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display font-bold text-2xl mb-4">Dove siamo</h2>
          <address className="not-italic text-nf-ink/80 leading-relaxed mb-6">
            NutriForce S.r.l.<br/>
            Via Nizza 230<br/>
            10126 Torino, Italia<br/>
            P.IVA IT09384720117
          </address>
          <div className="space-y-2 text-nf-ink/80">
            <div><strong>Email:</strong> info@nutriforce.it</div>
            <div><strong>Telefono:</strong> +39 011 1234567</div>
            <div><strong>Orari:</strong> Lun-Ven 9:00 - 18:00</div>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <input type="text" placeholder="Nome" className="w-full border border-nf-line px-4 py-3" />
          <input type="email" placeholder="Email" className="w-full border border-nf-line px-4 py-3" />
          <input type="text" placeholder="Oggetto" className="w-full border border-nf-line px-4 py-3" />
          <textarea placeholder="Messaggio" rows={6} className="w-full border border-nf-line px-4 py-3" />
          <button className="w-full bg-nf-green text-white py-3 font-medium">Invia messaggio</button>
        </form>
      </div>
    </div>
  );
}
