import type { RouteRecord } from "vite-react-ssg";
import { prodotti } from "./data/prodotti";
import { articoli } from "./data/blog";

const wrap = (loader: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    const m = await loader();
    return { Component: m.default };
  };

const categorie = Array.from(new Set(prodotti.map((p) => p.categoria.toLowerCase())));

export const routes: RouteRecord[] = [
  {
    path: "/",
    lazy: wrap(() => import("./AppShell")),
    children: [
      { index: true, lazy: wrap(() => import("./pages/Home")) },
      { path: "catalogo", lazy: wrap(() => import("./pages/Catalogo")) },
      {
        path: "catalogo/:categoria",
        lazy: wrap(() => import("./pages/CatalogoCategoria")),
        getStaticPaths: () => categorie.map((c) => `/catalogo/${c}`),
      },
      {
        path: "prodotto/:slug",
        lazy: wrap(() => import("./pages/Prodotto")),
        getStaticPaths: () => prodotti.map((p) => `/prodotto/${p.slug}`),
      },
      { path: "carrello", lazy: wrap(() => import("./pages/Carrello")) },
      { path: "checkout", lazy: wrap(() => import("./pages/Checkout")) },
      { path: "checkout/conferma", lazy: wrap(() => import("./pages/CheckoutConferma")) },
      { path: "chi-siamo", lazy: wrap(() => import("./pages/ChiSiamo")) },
      { path: "blog", lazy: wrap(() => import("./pages/Blog")) },
      {
        path: "blog/:slug",
        lazy: wrap(() => import("./pages/BlogArticolo")),
        getStaticPaths: () => articoli.map((a) => `/blog/${a.slug}`),
      },
      { path: "contatti", lazy: wrap(() => import("./pages/Contatti")) },
      { path: "privacy-policy", lazy: wrap(() => import("./pages/Privacy")) },
      { path: "cookie-policy", lazy: wrap(() => import("./pages/Cookie")) },
      { path: "termini-condizioni", lazy: wrap(() => import("./pages/Termini")) },
      { path: "*", lazy: wrap(() => import("./pages/NotFound")) },
    ],
  },
];
