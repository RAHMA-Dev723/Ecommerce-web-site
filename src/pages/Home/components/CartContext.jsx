import { createContext, useState, useEffect } from "react";
export const CartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const AddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  const RemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const updateQty = (id, qty) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        RemoveFromCart,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
