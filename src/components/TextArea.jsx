import React, { useId, useState } from "react";

const TextArea = React.forwardRef(function (
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
      <textarea
        id={id}
        type={type}
        ref={ref}
        value={value}
        onChange={handleChange}
        className={` peer resize-none bg-inherit leading-tight inline-block bg-white xl:w-[400px] xl:h-32 sm:w-[300px] sm:h-28 w-[240px] h-24 xl:rounded-lg rounded-md px-3 py-2 outline-none 
        border border-green/70 xl:px-5 xl:py-3 duration-300 font-karla font-medium xl:text-sm text-xs text-black/80 
        focus:outline-[1.4px] focus:outline-validateGreen focus:outline-offset-0
        focus:border-none invalid:outline-invalidatePink invalid:outline-offset-0 invalid:outline-[1.4px] invalid:border-none `}
        {...props}
      ></textarea>
      {label && (
        <label
          className={`absolute italic font-karla font-medium bg-creamWhite xl:px-1 px-[2px] 
         duration-500 text-black/80 peer-focus:text-validateGreen peer-focus:xl:text-[15px] peer-focus:xl:-translate-y-5
          xl:mt-2 xl:ml-4 sm:mt-1 sm:ml-3 peer-focus:sm:text-sm peer-focus:sm:-translate-y-4 ${
            value
              ? "text-validateGreen xl:text-[15px] xl:-translate-y-5 sm:text-sm sm:-translate-y-4 text-sm -translate-y-4"
              : "xl:text-[22px] sm:text-[20px] text-lg"
          } mt-1 ml-3 peer-focus:text-sm peer-focus:-translate-y-4`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
});

export default TextArea;
