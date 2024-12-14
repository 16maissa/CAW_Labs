import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { CartContext } from '../components/CartContext';
import '../css/menu.css';

function MenuItem({ name, price, image }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); 


  const itemId = name.toLowerCase().replace(/\s+/g, '-');  

  const handleAddToCart = () => {
    const item = { id: itemId, name, price, image };  
    addToCart(item);  
    navigate('/basket');  
  };

  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-price">{price}</p>
      <div className="menu-item-buttons">
        <button className="btn btn-order" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <Link to={`/details/${encodeURIComponent(name)}`} className="btn btn-info">
          More Info
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
