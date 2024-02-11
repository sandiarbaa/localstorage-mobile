import React from "react";

const Button = ({ children, gaya, klik = () => {}, type = "button" }) => {
  return (
    <button
      type={type}
      className={`bg-green-700 text-white ${gaya} rounded-md mt-2 shadow font-bold text-xl `}
      onClick={() => klik()}
    >
      {children}
    </button>
  );
};

export default Button;
