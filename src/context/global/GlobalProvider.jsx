import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((v) => !v);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        cart,
        setCart,
        showCart,
        setShowCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        showSuccess,
        setShowSuccess,
        showLoginMessage,
        setShowLoginMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}