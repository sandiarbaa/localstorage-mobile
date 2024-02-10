import React from "react";

const Button = ({ children, style, klik }) => {
  return (
    <button
      type="submit"
      className={`bg-green-700 text-white ${style} rounded-md mt-2 shadow font-bold text-xl `}
      onClick={() => klik()}
    >
      {children}
    </button>
  );
};

export default Button;
