import React, { useId } from 'react';
import './Form.css';

const FormRadioBtn = ({ items, onSubmit }) => {
  const handleSubmit = e => {
    onSubmit(e.target.value);
  };
  return (
    <div className="radioBtnContainer">
      <label className="radioBtnLabel">
        <span>Cheese</span>
        <input
          type="radio"
          name="items"
          value={'cheese'}
          checked={items === 'cheese'}
          onChange={handleSubmit}
        />
      </label>

      <label className="radioBtnLabel">
        <span>Pepper</span>
        <input
          type="radio"
          name="items"
          value={'pepper'}
          checked={items === 'pepper'}
          onChange={handleSubmit}
        />
      </label>

      <label className="radioBtnLabel">
        <span>Onion</span>
        <input
          type="radio"
          name="items"
          value={'onion'}
          checked={items === 'onion'}
          onChange={handleSubmit}
        />
      </label>
    </div>
  );
};

export default FormRadioBtn;
