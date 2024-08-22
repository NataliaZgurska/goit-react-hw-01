import React, { useState } from 'react';

const FormCheckBox = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = event => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== value));
    }
    console.log(event.target, event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value="Option 1"
          checked={selectedItems.includes('Option 1')}
          onChange={handleCheckboxChange}
        />
        First
      </label>

      <label>
        <input
          type="checkbox"
          value="Option 2"
          checked={selectedItems.includes('Option 2')}
          onChange={handleCheckboxChange}
        />
        Second
      </label>
    </div>
  );
};

export default FormCheckBox;
