import React from "react";

const RadioButton = React.forwardRef(function (
  { label, value, checked, onChange, ...props },
  ref
) {
  return (
    <label className="flex items-center space-x-2">
      <input
        ref={ref}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
        className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-600"
      />
      <span className="font-karla font-normal text-black/80 xl:text-[17px] sm:text-[15px] text-[13px]">
        {label}
      </span>
    </label>
  );
});

export default RadioButton;
