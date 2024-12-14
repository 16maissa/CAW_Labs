import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      
      const existingItem = prevItems.find((i) => i.id === item.id);
      
      
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      
      
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  
  const updateQuantity = (itemId, operation) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: operation === 'increase'
                ? item.quantity + 1  
                : item.quantity > 1 
                  ? item.quantity - 1  
                  : item.quantity,  
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
