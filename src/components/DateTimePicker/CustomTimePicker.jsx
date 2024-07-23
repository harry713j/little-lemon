import { Box } from "@mui/material";
import {
  LocalizationProvider,
  TimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import "./styles.css";
import dayjs from "dayjs";
import { useController } from "react-hook-form";

const CustomTimePicker = React.forwardRef(function (
  { emptyFieldError, name, control, rules, defaultValue = null },
  ref
) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleTimeChange = (newValue) => {
    if (newValue) {
      const formattedTime = newValue.format("HH:mm:ss"); // Format as needed
      onChange(formattedTime);
    } else {
      onChange(null);
    }
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          ref={ref}
          label="Time*"
          value={value ? dayjs(value) : null}
          onChange={handleTimeChange}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          slotProps={{
            textField: {
              helperText: emptyFieldError,
            },
          }}
          className="custom-time-picker"
          sx={{
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              color: value ? "rgba(71,94,87,0.8)" : "#58B9EF",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
});

export default CustomTimePicker;
