import React from "react";

const InputForm = ({ text, type, name }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={type}
        className="block text-lg font-semibold text-green-700 mb-1 "
      >
        {text}
      </label>
      <input
        type={type}
        className="border shadow w-full rounded-md px-4 py-2 border-green-700"
        name={name}
        id={type}
      />
    </div>
  );
};

export default InputForm;
