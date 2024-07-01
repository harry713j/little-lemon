import React, { useState } from "react";
import RadioButton from "./RadioButton";

const RadioButtonGroupPayOption = React.forwardRef(function (
  { className, options },
  ref
) {
  const [selectedValue, setSelectedValue] = useState("pay_on_delivery");

  return (
    <div
      className={`${className} flex flex-col items-start xl:space-y-2.5 space-y-2`}
    >
      {options.map((option) => (
        <RadioButton
          ref={ref}
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => setSelectedValue(option.value)}
          disabled={option.value === "pay_online_with_card"}
        />
      ))}
    </div>
  );
});

export default RadioButtonGroupPayOption;
