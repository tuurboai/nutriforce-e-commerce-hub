export default function LegalPage({ titolo, sezioni }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display font-extrabold text-5xl mb-4 leading-tight">{titolo}</h1>
      <p className="text-sm text-nf-ink/60 mb-10">Ultimo aggiornamento: 1 marzo 2025</p>
      <div className="space-y-8 text-nf-ink/80 leading-relaxed">
        {sezioni.map((s, i) => (
          <section key={i}>
            <h2 className="font-display font-bold text-2xl text-nf-ink mb-3">{s.h}</h2>
            {Array.isArray(s.p) ? s.p.map((para, j) => <p key={j} className="mb-3">{para}</p>) : <p>{s.p}</p>}
            {s.sub && (
              <div className="mt-4 space-y-4">
                {s.sub.map((su, j) => (
                  <div key={j}>
                    <h3 className="font-display font-bold text-lg text-nf-ink mb-2">{su.h}</h3>
                    <p>{su.p}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
