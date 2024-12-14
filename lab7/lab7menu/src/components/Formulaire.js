
import React from 'react';
import '../css/formulaire.css';

function Formulaire() {
  return (
    <div className="formulaire-container">
      <h2>Order Form</h2>
      <form className="formulaire-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Enter your phone number" 
          pattern="[0-9]{10}" 
          title="Please enter a valid 10-digit phone number" 
          required 
        />

        <label htmlFor="address">Address</label>
        <textarea id="address" name="address" placeholder="Enter your address" required></textarea>

        <button type="submit" className="formulaire-submit">Submit Order</button>
      </form>
    </div>
  );
}

export default Formulaire;
