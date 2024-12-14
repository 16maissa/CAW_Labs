import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; 
import '../css/basket.css';

function Basket() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, operation) => {
    updateQuantity(itemId, operation);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleOrderNowClick = () => {
    navigate('/formulaire'); 
  };

  return (
    <div className="basket-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="basket-list">
          {cartItems.map((item) => {
            const price = parseFloat(item.price);
            const totalPrice = price * item.quantity;

            return (
              <li key={item.id} className="basket-item">
                <div className="basket-item-details">
                  <img src={item.image} alt={item.name} className="basket-item-image" />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-price">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="remove-btn-container">
                    <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">🗑️</button>
                  </div>
                </div>
                <div className="quantity-actions">
                  <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      
      <div className="order-now-container">
        <button onClick={handleOrderNowClick} className="btn-order-now">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Basket;
