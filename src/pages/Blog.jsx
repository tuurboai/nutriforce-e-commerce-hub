import { useEffect } from "react";
import { Link } from "react-router-dom";
import { articoli } from "@/data/blog";

export default function Blog() {
  useEffect(() => { document.title = "Blog"; }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <header className="max-w-2xl mb-12">
        <div className="text-xs uppercase tracking-wider text-nf-green mb-3">Magazine</div>
        <h1 className="font-display font-extrabold text-5xl mb-4 leading-tight">Il blog NutriForce</h1>
        <p className="text-lg text-nf-ink/70">Guide pratiche, approfondimenti scientifici e risposte alle domande che riceviamo più spesso su nutrizione sportiva e integrazione.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articoli.map((a) => (
          <Link key={a.slug} to={`/blog/${a.slug}`} className="group block border border-nf-line hover:border-nf-ink transition-colors">
            <img src={`https://picsum.photos/seed/${a.slug}/600/400`} alt="" className="w-full aspect-[3/2] object-cover" />
            <div className="p-6">
              <div className="text-xs uppercase tracking-wider text-nf-green mb-2">{a.categoria} · {a.data}</div>
              <h2 className="font-display font-bold text-xl mb-2 group-hover:text-nf-green transition-colors">{a.titolo}</h2>
              <p className="text-sm text-nf-ink/70">{a.intro}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
