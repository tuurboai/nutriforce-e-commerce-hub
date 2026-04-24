import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import MainLayout from "@/components/MainLayout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import CatalogoCategoria from "./pages/CatalogoCategoria";
import Prodotto from "./pages/Prodotto";
import Carrello from "./pages/Carrello";
import Checkout from "./pages/Checkout";
import CheckoutConferma from "./pages/CheckoutConferma";
import ChiSiamo from "./pages/ChiSiamo";
import Blog from "./pages/Blog";
import BlogArticolo from "./pages/BlogArticolo";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Termini from "./pages/Termini";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:categoria" element={<CatalogoCategoria />} />
              <Route path="/prodotto/:slug" element={<Prodotto />} />
              <Route path="/carrello" element={<Carrello />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticolo />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/cookie-policy" element={<Cookie />} />
              <Route path="/termini-condizioni" element={<Termini />} />
            </Route>
            <Route path="/checkout/conferma" element={<CheckoutConferma />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
