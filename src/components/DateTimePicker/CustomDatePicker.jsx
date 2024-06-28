import React, { useState } from "react";
import "./styles.css";
import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useController } from "react-hook-form";

function CustomDatePicker({ name, control, rules, defaultValue = null }) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  // console.log(selectedDate);

  const handleDateChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date*"
          value={value}
          onChange={handleDateChange}
          format="LL"
          minDate={dayjs()}
          className="custom-date-picker"
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

export default CustomDatePicker;
