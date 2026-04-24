import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const add = (p) => setItems((prev) => [...prev, p]);
  const count = items.length;
  return (
    <CartContext.Provider value={{ items, add, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
