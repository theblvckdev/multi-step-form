import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`py-3 px-5 rounded-lg duration-700 ${className}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
