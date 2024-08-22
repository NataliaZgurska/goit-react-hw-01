import React, { useEffect, useState } from 'react';
import './Form.css';

const FormCheckBox = ({ selectedItems, onSubmit }) => {
  const handleSubmit = e => {
    onSubmit(e.target);
  };

  return (
    <div>
      <div className="checkBoxItems">
        <label className="radioBtnLabel">
          Cheese
          <input
            type="checkbox"
            value="cheese"
            checked={selectedItems.includes('cheese')}
            onChange={handleSubmit}
          />
        </label>

        <label className="radioBtnLabel">
          Pepper
          <input
            type="checkbox"
            value="pepper"
            checked={selectedItems.includes('pepper')}
            onChange={handleSubmit}
          />
        </label>

        <label className="radioBtnLabel">
          Onion
          <input
            type="checkbox"
            value="onion"
            checked={selectedItems.includes('onion')}
            onChange={handleSubmit}
          />
        </label>
      </div>
    </div>
  );
};

export default FormCheckBox;
