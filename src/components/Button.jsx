import React from "react";

const Button = React.forwardRef(function (
  { children, type = "button", className = "", ...props },
  ref
) {
  return (
    <button
      type={type}
      className={`${className} font-karla font-extrabold uppercase rounded-lg xl:text-lg xl:py-[6px] xl:px-6
      text-bluishWhite py-1 px-4 sm:px-5 sm:text-[17px] text-base shadow-sm `}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
