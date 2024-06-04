import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const NumberInput = React.forwardRef(function (
  { className = "", value, onChange, ...props },
  ref
) {
  const increment = () => {
    if (value < 100) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div
      className="flex items-center justify-between border border-green/70 bg-white 
        xl:rounded-lg rounded-md xl:w-[120px] xl:h-10 xl:py-2 xl:px-3 sm:w-[100px] sm:h-9 sm:py-1.5 sm:px-2.5
        w-[80px] h-8 py-1 px-2 "
    >
      <button onClick={decrement}>
        <AiOutlineMinus className="xl:text-xl sm:text-[17px] text-base font-karla text-green" />
      </button>
      <span
        type="text"
        ref={ref}
        className={`${className} duration-500 inline-block bg-white h-full xl:mb-1 sm:mb-[3px] mb-[2px]
        font-karla font-medium xl:text-lg sm:text-[17px] text-base text-black/80 `}
        {...props}
      >
        {value}
      </span>
      <button onClick={increment}>
        <AiOutlinePlus className="xl:text-xl sm:text-[17px] text-base font-karla text-green" />
      </button>
    </div>
  );
});

export default NumberInput;
