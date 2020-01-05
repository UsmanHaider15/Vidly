import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type="text"
        className="form-control"
        placeholder={label}
      />
    </div>
  );
};

export default Input;
