import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import '../css/menu.css';
import { menuData } from './Menu';
import { CartContext } from './CartContext';

function MenuItemDetails() {
  const { name } = useParams();
  const navigate = useNavigate(); 
  const selectedItem = menuData.find((item) => item.name === decodeURIComponent(name));

  const { cartItems, addToCart } = useContext(CartContext);

  
  if (!selectedItem) {
    return <h2>Item not found</h2>;
  }

  
  const itemId = selectedItem.name.toLowerCase().replace(/\s+/g, '-'); 

  const handleAddToCart = () => {
    const isAlreadyInCart = cartItems.some((item) => item.id === itemId);
    if (isAlreadyInCart) {
      alert(`${selectedItem.name} is already in the cart!`);
    } else {
      addToCart({ ...selectedItem, id: itemId });
      alert(`${selectedItem.name} has been added to the cart!`);
    }
  };

  const handleOrderNow = () => {
    
    navigate('/formulaire', { state: { item: selectedItem } }); // Passe l'élément sélectionné à la page du formulaire
  };

  return (
    <section className="menu-item-details">
      <div className="details-container">
        <div className="details-image">
          <img src={selectedItem.image} alt={selectedItem.name} />
        </div>
        <div className="details-info">
          <h2>{selectedItem.name}</h2>
          <p className="details-price">{selectedItem.price}</p>
          <p className="details-description">
            {selectedItem.description || "A delicious dish, freshly prepared for you."}
          </p>
          <div className="details-buttons">
            <button className="btn btn-order" onClick={handleOrderNow}>Order Now</button>
            <button className="btn btn-add" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuItemDetails;
