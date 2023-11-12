import React from "react";

const Button = ({ text, className }) => {
  return (
    <>
      <button className={`py-2.5 px-4 rounded-lg duration-700 ${className}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
