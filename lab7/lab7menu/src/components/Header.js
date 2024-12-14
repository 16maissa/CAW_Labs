import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/menu.css';

function Header() {
  const location = useLocation(); 

  return (
    <header className="header">
      <h1 className="header-title">Grilluxe</h1>
      <nav className="header-nav">
        <Link 
          to="/" 
          className={`nav-btn ${location.pathname === '/' ? 'disabled' : ''}`}
        >
          Menu
        </Link>
        <Link 
          to="/basket" 
          className={`nav-btn ${location.pathname === '/basket' ? 'disabled' : ''}`}
        >
          Basket
        </Link>
      </nav>
    </header>
  );
}

export default Header;
