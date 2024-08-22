import React, { useId } from 'react';

const FormSelest = ({ items, onSubmit }) => {
  const selectId = useId();
  const handleSubmit = e => {
    onSubmit(e.target.value);
  };
  return (
    <div>
      <label htmlFor={selectId}>Select ingredient</label>
      <select id={selectId} value={items} onChange={handleSubmit}>
        <option value="cheese">Cheese</option>
        <option value="pepper">Pepper</option>
        <option value="onion">Onion</option>
      </select>
    </div>
  );
};

export default FormSelest;
