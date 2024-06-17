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

function CustomTimePicker({ name, control, rules, defaultValue = null }) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleTimeChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Time"
          value={value}
          onChange={handleTimeChange}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
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
}

export default CustomTimePicker;
