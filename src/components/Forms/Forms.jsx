import React, { useState } from 'react';
import FormRadioBtn from './FormRadioBtn';
import FormCheckBox from './FormCheckBox';
import FormSelest from './FormSelest';

import './Form.css';
import FormCheckBoxAccept from './FormCheckBoxAccept';

const Forms = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [proceed, setProceed] = useState(false);

  const handleSubmitCheckBoxAccept = data => {
    setHasAccepted(data);
  };
  const handleSubmitCheckBoxAcceptBtn = () => {
    setProceed(true);
  };

  const [itemSelect, setItemSelect] = useState('cheese');
  const handleSubmitSelect = data => {
    setItemSelect(data);
  };

  const [itemRadio, setItemRadio] = useState('cheese');
  const handleSubmitRadio = data => {
    setItemRadio(data);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = data => {
    const { value, checked } = data;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== value));
    }
  };

  return (
    <div className="formsContainer">
      <div>
        <FormCheckBoxAccept
          hasAccepted={hasAccepted}
          onSubmit={handleSubmitCheckBoxAccept}
          onBtnSubmit={handleSubmitCheckBoxAcceptBtn}
        />
      </div>
      {proceed && (
        <div className="formsWrap">
          <div>
            <p className="formVariant">
              Selected option: <span className="formValue">{itemSelect}</span>
            </p>
            <FormSelest items={itemSelect} onSubmit={handleSubmitSelect} />
          </div>

          <div>
            <p className="formVariant">
              RadioBtn option: <span className="formValue">{itemRadio}</span>
            </p>
            <FormRadioBtn items={itemRadio} onSubmit={handleSubmitRadio} />
          </div>

          <div>
            <p className="formVariant">CheckBox options:</p>

            <FormCheckBox
              selectedItems={selectedItems}
              onSubmit={handleCheckboxChange}
            />

            <div className="checkBoxItems">
              <p>Selected Items:</p>
              <ul className="checkBoxItems">
                {selectedItems.map((item, index) => (
                  <li className="formValue" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forms;
