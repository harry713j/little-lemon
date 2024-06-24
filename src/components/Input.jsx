import React, { useId, useState } from "react";
import { useController } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

const Input = React.forwardRef(function (
  {
    type = "text",
    label,
    className,
    labelClassName,
    name,
    control,
    rules,
    defaultValue = "",
    ...props
  },
  ref
) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col ">
      <input
        id={id}
        type={showPassword ? "text" : type}
        ref={ref}
        value={field.value}
        onChange={field.onChange}
        className={`${className} peer inline-block bg-inherit focus:bg-inherit xl:w-[400px] xl:h-12 sm:w-[300px] sm:h-10 w-[240px] max-[320px]:w-[220px]
         h-9 xl:rounded-lg rounded-md px-3 py-2 outline-none border border-green/70 xl:px-4 xl:py-2 duration-300
        font-karla font-medium xl:text-lg sm:text-[17px] text-base text-black/80 focus:outline-[1.4px] focus:outline-validateGreen focus:outline-offset-0
        focus:border-none invalid:outline-invalidatePink invalid:outline-offset-0 invalid:outline-[1.4px] invalid:border-none `}
        {...props}
      />
      {type === "password" && (
        <div
          className="absolute top-1/2 sm:-translate-x-4 transform
           -translate-y-1/2 xl:-translate-x-5 right-0 -translate-x-3
            cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <FaRegEyeSlash className="text-green sm:text-xl text-lg" />
          ) : (
            <FaRegEye className="text-green sm:text-xl text-lg" />
          )}
        </div>
      )}
      {type === "file" && (
        <>
          <div
            data-tooltip-target="tooltip-light"
            data-tooltip-style="light"
            className="absolute top-1/2 sm:-translate-x-4 transform
           -translate-y-1/2 xl:-translate-x-5 right-0 -translate-x-3
            cursor-pointer "
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <IoInformationCircleOutline className="text-green sm:text-xl text-lg hover:bg-green/40 rounded-full" />
          </div>
          {showTooltip && (
            <div
              id="tooltip-light"
              role="tooltip"
              className="absolute border text-center border-yellow/60 z-10 inline-block font-karla 
              capitalize p-1 sm:px-1.5 sm:py-2 text-xs font-medium
             text-black/70 transition-opacity duration-300 bg-white rounded-md shadow-sm 
              tooltip xl:-top-10 xl:right-0 xl:w-28 xl:translate-x-[21px] sm:w-24 sm:-top-10 sm:right-0 
              sm:translate-x-[21px] -top-[34px] right-0 w-[90px] translate-x-[24px] "
            >
              upload profile picture
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          )}
        </>
      )}
      {label && (
        <label
          className={`${labelClassName} absolute italic font-karla font-medium xl:px-1 px-[2px] 
         duration-500 text-black/80 
          xl:mt-2 xl:ml-4 sm:mt-1 sm:ml-3 mt-1 ml-3 ${
            field.value
              ? "text-green/80 xl:text-[15px] xl:-translate-y-5 sm:text-sm sm:-translate-y-4 text-sm -translate-y-4"
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
