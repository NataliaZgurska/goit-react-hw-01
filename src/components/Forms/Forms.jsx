import React, { useState } from 'react';
import FormRadioBtn from './FormRadioBtn';
import FormCheckBox from './FormCheckBox';
import FormSelest from './FormSelest';

import './Form.css';

const Forms = () => {
  const [itemSelect, setItemSelect] = useState('cheese');
  const handleSubmitSelect = data => {
    setItemSelect(data);
  };

  const [itemRadio, setItemRadio] = useState('cheese');
  const handleSubmitRadio = data => {
    setItemRadio(data);
  };

  const [itemsCheckBox, setItemsCheckBox] = useState();
  const handleSubmitCheckBox = data => {
    setItemsCheckBox(data);
  };

  return (
    <div className="formsContainer">
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
        <FormCheckBox />
      </div>
    </div>
  );
};

export default Forms;
