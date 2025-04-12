import React from 'react';
import './signup.css';

const Getinput = ({ label, name, required = false, type = 'text', value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        name={name}
        required={required}
      />
    </div>
  );
};

export default Getinput;
