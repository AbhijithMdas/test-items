// src/components/ProductModule.js
import React from 'react';

const ProductModule = ({ id, name, category, photo, addToCart }) => (
  <div className="product-box">
    <img src={'../src/images'} alt={name} />
    <h3>{name}</h3>
    <p>{category}</p>
    <button onClick={() => addToCart(id, name)}>Add to Cart</button>
  </div>
);

export default ProductModule;
