import React from "react";

const FormRow = ({ type, name, labelText, defaultValue, placeholder }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        placeholder={placeholder || "mail@gmail.com"}
        required
      ></input>
    </div>
  );
};

export default FormRow;
