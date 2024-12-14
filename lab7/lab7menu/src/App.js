
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import MenuItemDetails from './components/MenuItemDetails';
import Basket from './components/basket';
import { CartProvider } from './components/CartContext'; 
import Formulaire from './components/Formulaire';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/details/:name" element={<MenuItemDetails />} />
            <Route path="/basket" element={<Basket />} /> 
            <Route path="/formulaire" element={<Formulaire />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
