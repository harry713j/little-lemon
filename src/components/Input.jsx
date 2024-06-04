import React, { useId, useState } from "react";

const Input = React.forwardRef(function (
  { type = "text", label, ...props },
  ref
) {
  const id = useId();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="relative flex flex-col xl:mb-4 sm:mb-3 ">
      <input
        id={id}
        type={type}
        ref={ref}
        value={value}
        onChange={handleChange}
        className={` peer inline-block bg-inherit focus:bg-inherit xl:w-[400px] xl:h-12 sm:w-[300px] sm:h-10 w-[240px]
         h-9 xl:rounded-lg rounded-md px-3 py-2 outline-none border border-green/70 xl:px-4 xl:py-2 duration-300
        font-karla font-medium xl:text-lg sm:text-[17px] text-base text-black/80 focus:outline-[1.4px] focus:outline-validateGreen focus:outline-offset-0
        focus:border-none invalid:outline-invalidatePink invalid:outline-offset-0 invalid:outline-[1.4px] invalid:border-none `}
        {...props}
      />
      {label && (
        <label
          className={`absolute italic font-karla font-medium bg-creamWhite xl:px-1 px-[2px] 
         duration-500 text-black/80 
          xl:mt-2 xl:ml-4 sm:mt-1 sm:ml-3 mt-1 ml-3 ${
            value
              ? "text-validateGreen xl:text-[15px] xl:-translate-y-5 sm:text-sm sm:-translate-y-4 text-sm -translate-y-4"
              : "xl:text-[22px] sm:text-[20px] text-lg"
          } peer-focus:text-validateGreen peer-focus:xl:text-[15px] peer-focus:xl:-translate-y-5
          peer-focus:sm:text-sm peer-focus:sm:-translate-y-4 peer-focus:text-sm peer-focus:-translate-y-4`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
});

export default Input;
