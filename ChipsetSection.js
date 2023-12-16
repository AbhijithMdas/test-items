// src/components/ChipsetSection.js
import React, { useState } from 'react';
import { chipsetData } from '../productData';

const ChipsetSection = ({ addToCart }) => {
  const [filters, setFilters] = useState({ region: '', esim: false, formFactor: '' });

  const filteredChipsets = chipsetData.filter(chipset => {
    return (
      (filters.region === '' || chipset.region === filters.region) &&
      (filters.esim === false || chipset.esimCompatible === filters.esim) &&
      (filters.formFactor === '' || chipset.formFactor === filters.formFactor)
    );
  });

  return (
    <div className="chipset-section">
      <h2>Chipset Section</h2>
      <div>
        <label>Region:</label>
        <input type="text" onChange={(e) => setFilters({ ...filters, region: e.target.value })} />
      </div>
      <div>
        <label>eSIM Compatible:</label>
        <input type="checkbox" onChange={(e) => setFilters({ ...filters, esim: e.target.checked })} />
      </div>
      <div>
        <label>Form Factor:</label>
        <input type="text" onChange={(e) => setFilters({ ...filters, formFactor: e.target.value })} />
      </div>
      <div className="chipset-list">
        {filteredChipsets.map(chipset => (
          <div key={chipset.id} className="chipset-item">
            <img src={chipset.photo} alt={chipset.name} />
            <h3>{chipset.name}</h3>
            <p>{chipset.region}, {chipset.formFactor}</p>
            <button onClick={() => addToCart(chipset.id, chipset.name)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsetSection;
