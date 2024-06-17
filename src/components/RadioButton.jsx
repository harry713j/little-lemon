import React from "react";

function RadioButton({ label, value, checked, onChange }) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-600"
      />
      <span className="font-karla font-medium text-black/80 xl:text-[20px] sm:text-[18px] text-base">
        {label}
      </span>
    </label>
  );
}

export default RadioButton;
