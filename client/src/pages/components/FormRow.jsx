// import React from "react";

// const FormRow = ({ type, name, labelText, defaultValue, placeholder }) => {
//   return (
//     <div className="form-row">
//       <label htmlFor={name} className="form-label">
//         {labelText || name}
//       </label>
//       <input
//         type={type}
//         name={name}
//         id={name}
//         className="form-input"
//         defaultValue={defaultValue || ""}
//         placeholder={placeholder || "mail@gmail.com"}
//         required
//       ></input>
//     </div>
//   );
// };

// export default FormRow;
// FormRow.jsx
import React from "react";

const FormRow = ({ type, name, labelText, defaultValue, placeholder }) => {
  return (
    <div className="form-row">
      <label
        htmlFor={name}
        className="form-label text-sm font-medium mb-2 block text-gray-700"
      >
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-all"
        defaultValue={defaultValue || ""}
        placeholder={placeholder || ""}
        required
      />
    </div>
  );
};

export default FormRow;
