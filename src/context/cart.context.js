import { createContext, useState } from "react";

export const CartContext = createContext({
    isOpen: false,
    toggleDropdown: () => {},
  });

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <CartContext.Provider value={{ isOpen, toggleDropdown }}>
        {children}
      </CartContext.Provider>
    );
  };