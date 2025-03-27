import React from "react";
import PropTypes from "prop-types";

const FormRowSelect = ({
  name,
  labelText,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  className = "",
  helpText = "",
}) => {
  return (
    <div className={`form-row ${className}`}>
      <label htmlFor={name} className="form-label">
        {labelText || name}
        {required && <span className="required-indicator">*</span>}
      </label>

      <div className="select-wrapper">
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="form-input"
          required={required}
          disabled={disabled}
          aria-describedby={helpText ? `${name}-help` : undefined}
        >
          {options.map((option) => {
            const optionValue =
              typeof option === "object" ? option.value : option;
            const optionLabel =
              typeof option === "object" ? option.label : option;

            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </select>
      </div>

      {helpText && (
        <p id={`${name}-help`} className="form-help-text">
          {helpText}
        </p>
      )}
    </div>
  );
};

FormRowSelect.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  helpText: PropTypes.string,
};

export default FormRowSelect;
