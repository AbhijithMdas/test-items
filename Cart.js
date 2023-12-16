// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

export default Cart;
