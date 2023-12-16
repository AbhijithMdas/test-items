// src/App.js
import React, { useState } from 'react';
import ProductModule from './components/ProductModule';
import ChipsetSection from './components/ChipsetSection';
import Cart from './components/Cart';
import { moduleData } from './productData';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, name) => {
    const newItem = { id, name };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="app">
      <h1>Product Page</h1>
      <h4>items</h4>
      <div className="product-box-container">
        {moduleData.map((module, index) => (
          <React.Fragment key={module.id}>
            <ProductModule {...module} addToCart={addToCart} /> 
            {/* Add a line break after every second item */}
            {(index + 1) % 3 === 0 && <div className="line-break" key={`br_${index}`} />}
          </React.Fragment>
        ))}
      </div>
      <ChipsetSection addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
