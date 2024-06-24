import React, { useState } from "react";
import RadioButton from "./RadioButton";
import { useController } from "react-hook-form";

function RadioButtonGroupPayOption({ className, options }) {
  //   const { field, fieldState } = useController({
  //     name,
  //     control,
  //     rules,
  //     defaultValue,
  //   });

  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div
      className={`${className} flex flex-col items-start xl:space-y-2.5 space-y-2`}
    >
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => setSelectedValue(option.value)}
        />
      ))}
    </div>
  );
}

export default RadioButtonGroupPayOption;
