
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import '../css/menu.css';

import image1 from '../assets/Algerian Chtitha.jpg';
import image2 from '../assets/Paella .jpg';
import image3 from '../assets/Garlic Butter Shrimp.jpg';
import image4 from '../assets/backed fish.jpg';
import image5 from '../assets/Algerian reshta.jpg';
import image6 from '../assets/Algerian Chakhchoukha .jpg';
import image7 from '../assets/Steak with fries.jpg';
import image8 from '../assets/Grilled Vegetables.jpg';
import image9 from '../assets/Grilled Chicken Tenders.jpg';
import image10 from '../assets/pasta salad.jpg';
import image11 from '../assets/cesar salad.jpg';
import image12 from '../assets/Tuna Salad.jpg';
import image13 from '../assets/Oreo Milkshake .jpg';
import image14 from '../assets/Strawberry Tiramisu .jpg';
import image15 from '../assets/Pistachio.jpg';

export const menuData = [
    { 
      name: 'Algerian Chtitha', 
      price: '1200 DA', 
      image: image1, 
      category: 'Traditional Food', 
      description: 'A flavorful Algerian dish made with tender chicken cooked in a rich, spicy tomato sauce, infused with traditional North African spices.'
    },
    { 
      name: 'Paella', 
      price: '2500 DA', 
      image: image2, 
      category: 'Seafood', 
      description: 'A classic Spanish dish with saffron-infused rice, loaded with shrimp, mussels, calamari, and a medley of fresh vegetables.'
    },
    { 
      name: 'Garlic Butter Shrimp', 
      price: '1800 DA', 
      image: image3, 
      category: 'Seafood', 
      description: 'Juicy shrimp sautéed in a rich garlic butter sauce, served with a side of freshly baked bread for dipping.'
    },
    { 
      name: 'Baked Fish', 
      price: '1600 DA', 
      image: image4, 
      category: 'Seafood', 
      description: 'Delicate fish fillets baked to perfection with a lemon herb crust, served with a side of steamed vegetables.'
    },
    { 
      name: 'Algerian Reshta', 
      price: '1100 DA', 
      image: image5, 
      category: 'Traditional Food', 
      description: 'Homemade noodles served with a flavorful chicken and chickpea sauce, a hallmark of Algerian cuisine.'
    },
    { 
      name: 'Algerian Chakhchoukha', 
      price: '1400 DA', 
      image: image6, 
      category: 'Traditional Food', 
      description: 'A hearty dish of shredded flatbread mixed with a rich lamb stew, spiced with cumin and coriander.'
    },
    { 
      name: 'Steak with Fries', 
      price: '2000 DA', 
      image: image7, 
      category: 'Grills', 
      description: 'Tender grilled steak cooked to your liking, served with crispy golden fries and a side of pepper sauce.'
    },
    { 
      name: 'Grilled Vegetables', 
      price: '1000 DA', 
      image: image8, 
      category: 'Grills', 
      description: 'A medley of fresh seasonal vegetables, lightly seasoned and grilled to bring out their natural sweetness.'
    },
    { 
      name: 'Grilled Chicken Tenders', 
      price: '1300 DA', 
      image: image9, 
      category: 'Grills', 
      description: 'Juicy chicken tenders marinated in a blend of spices and grilled to perfection, served with a tangy dipping sauce.'
    },
    { 
      name: 'Pasta Salad', 
      price: '900 DA', 
      image: image10, 
      category: 'Entrees', 
      description: 'A refreshing mix of al dente pasta, fresh vegetables, and a zesty Italian dressing, perfect for a light meal.'
    },
    { 
      name: 'Cesar Salad', 
      price: '850 DA', 
      image: image11, 
      category: 'Entrees', 
      description: 'Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and shaved Parmesan cheese.'
    },
    { 
      name: 'Tuna Salad', 
      price: '1000 DA', 
      image: image12, 
      category: 'Entrees', 
      description: 'A classic salad with flaky tuna, crisp greens, boiled eggs, and a tangy vinaigrette dressing.'
    },
    { 
      name: 'Oreo Milkshake', 
      price: '700 DA', 
      image: image13, 
      category: 'Dessert', 
      description: 'A creamy milkshake blended with crushed Oreos, topped with whipped cream and a drizzle of chocolate syrup.'
    },
    { 
      name: 'Strawberry Tiramisu', 
      price: '750 DA', 
      image: image14, 
      category: 'Dessert', 
      description: 'A delightful twist on the classic Italian dessert, layered with fresh strawberries, mascarpone, and ladyfingers.'
    },
    { 
      name: 'Pistachio', 
      price: '600 DA', 
      image: image15, 
      category: 'Dessert', 
      description: 'A creamy pistachio dessert that’s both nutty and sweet, topped with crushed pistachios for extra crunch.'
    },
  ];
  

const categories = ['All', 'Entrees','Traditional Food', 'Seafood', 'Grills', 'Dessert'];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtrage des items  de mon menu
  const filteredMenu = selectedCategory === 'All'
    ? menuData
    : menuData.filter((item) => item.category === selectedCategory);

  return (
    <section className="menu">
      <h2 className="menu-title">Our Menu</h2>
     
      <div className="menu-categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="menu-grid">
        {filteredMenu.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;







