import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
    );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id? 
      { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
    );
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id? 
    { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}

const clearCartItem = (cartItems,cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}


export const CartContext = createContext({
    isOpen: false,
    toggleDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    checkoutTotal: 0
  });

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const  [checkoutTotal, setCheckoutTotal] = useState(0)

    useEffect(()=>{
      const newCartTotal = cartItems.reduce((total, cartItems)=>total + cartItems.quantity, 0)
      setCartTotal(newCartTotal);
    }, [cartItems])

    useEffect(()=>{
      const newCheckoutTotal = cartItems.reduce((total, cartItems)=>total + cartItems.quantity * cartItems.price, 0)
      setCheckoutTotal(newCheckoutTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems,cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems,cartItemToClear));
    }
   

    const value = { 
      isOpen, 
      toggleDropdown, 
      addItemToCart, 
      clearItemFromCart,
      cartItems, 
      cartTotal,
      removeItemFromCart,
      checkoutTotal
    }
  
    return (
      <CartContext.Provider value={value}>
        {children}
      </CartContext.Provider>
    );
  };