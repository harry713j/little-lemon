import React, { useEffect, useId, useRef, useState } from "react";
import { Button } from "./index.js";
import { BsChevronDown } from "react-icons/bs";

const Select = React.forwardRef(function (
  { options, label, placeholder, ...props },
  ref
) {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const dropdownCloseHandler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", dropdownCloseHandler);

    return () => {
      document.removeEventListener("mousedown", dropdownCloseHandler);
    };
  });

  return (
    <div ref={dropdownRef} className="flex flex-col xl:mb-4 sm:mb-3 relative">
      <Button
        id={id}
        className={`peer bg-inherit xl:w-[400px] xl:h-12 sm:w-[300px] sm:h-10 w-[240px] h-9 xl:rounded-lg rounded-md px-3 py-2 outline-none 
        border border-green/70 xl:px-6 xl:py-3 flex items-center justify-between capitalize duration-500 
        focus:outline-[1.4px] focus:outline-validateGreen focus:outline-offset-0
        focus:border-none `}
        ref={ref}
        onClick={toggleDropdown}
        {...props}
      >
        <span
          className={`font-karla font-medium xl:text-lg sm:text-[17px] text-base text-black/80 `}
        >
          {selectedValue ? selectedValue : ""}
        </span>

        <BsChevronDown
          className={`inline-block text-green xl:text-[22px] text-lg duration-300 transition-all transform 
          ${isOpen ? "rotate-180 " : "rotate-0"} `}
        />
      </Button>
      {label && (
        <label
          className={`absolute italic font-karla font-medium bg-creamWhite xl:px-1 px-[2px] 
         duration-500 text-black/80 peer-focus:text-validateGreen peer-focus:xl:text-[15px] peer-focus:xl:-translate-y-5
          xl:mt-2 xl:ml-4 sm:mt-1 sm:ml-3 peer-focus:sm:text-sm peer-focus:sm:-translate-y-4 ${
            selectedValue
              ? "text-validateGreen xl:text-[15px] xl:-translate-y-5 sm:text-sm sm:-translate-y-4 text-sm -translate-y-4"
              : "xl:text-[22px] sm:text-[20px] text-lg"
          } mt-1 ml-3 peer-focus:text-sm peer-focus:-translate-y-4`}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      {isOpen && (
        <ul
          className={`flex flex-col outline outline-1 outline-green/50 rounded-md xl:w-[400px] xl:h-52 sm:w-[300px] 
        sm:h-40 w-[240px] h-32 overflow-scroll divide-y divide-green/40 absolute top-full xl:mt-[6px] mt-1 shadow-lg
       transition-all duration-500 ease-in-out `}
        >
          {options.map((option) => (
            <li
              key={option}
              className="w-full capitalize bg-white px-3 py-1 outline-none xl:px-6 xl:py-2
              font-karla text-center font-medium xl:text-lg sm:text-[17px] text-base text-black/80 
              cursor-pointer hover:bg-green/95 hover:text-bluishWhite  "
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Select;
