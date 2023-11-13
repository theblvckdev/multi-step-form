import React from "react";

const FormControl = ({ type, id, label, placeholder, value, onchange }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-primary-marineBlue font-medium" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className="w-full p-2 rounded-lg text-lg text-primary-marineBlue outline-none focus:border-primary-purplishBlue duration-700 border border-secondary-lightGray"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
        />
      </div>
    </>
  );
};

export default FormControl;
