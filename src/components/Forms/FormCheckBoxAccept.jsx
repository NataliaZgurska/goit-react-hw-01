import React, { useEffect, useState } from 'react';

const FormCheckBoxAccept = ({ hasAccepted, onSubmit, onBtnSubmit }) => {
  const handleChange = e => {
    onSubmit(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>

      <button type="button" disabled={!hasAccepted} onClick={onBtnSubmit}>
        Proceed
      </button>
    </div>
  );
};

export default FormCheckBoxAccept;
