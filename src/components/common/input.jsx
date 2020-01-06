import React from "react";

const Input = ({ name, label, type, value, error, onChange }) => {
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
        placeholder={label}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
