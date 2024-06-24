import React, { useState } from "react";
import RadioButton from "./RadioButton";
import { useController } from "react-hook-form";

function RadioButtonGroupGender({
  className,
  options,
  name,
  control,
  rules,
  defaultValue = null,
}) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <div className={`${className} flex flex-col items-start`}>
      <label className="font-karla font-medium text-black/80 mb-1.5 xl:text-xl sm:text-base text-sm">
        Gender
      </label>
      <div className="flex items-center xl:pl-3 sm:pl-2 pl-1 xl:space-x-6 space-x-4">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            checked={field.value === option.value}
            onChange={field.onChange}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioButtonGroupGender;
