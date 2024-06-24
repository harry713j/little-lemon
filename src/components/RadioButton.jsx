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
      <span className="font-karla font-normal text-black/80 xl:text-[17px] sm:text-[15px] text-[13px]">
        {label}
      </span>
    </label>
  );
}

export default RadioButton;
