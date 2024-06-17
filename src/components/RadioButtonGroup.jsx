import React, { useState } from "react";
import RadioButton from "./RadioButton";
import { useController } from "react-hook-form";

function RadioButtonGroup({ name, control, rules, defaultValue = null }) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const options = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  return (
    <div className="flex items-center xl:space-x-6 space-x-4">
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
  );
}

export default RadioButtonGroup;
