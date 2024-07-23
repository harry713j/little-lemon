import React, { useState } from "react";
import "./styles.css";
import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useController } from "react-hook-form";

const CustomDatePicker = React.forwardRef(function (
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

  const handleDateChange = (newValue) => {
    if (newValue) {
      // Convert Dayjs object to ISO string or JavaScript Date
      const formattedDate = newValue.toISOString(); // ISO string
      onChange(formattedDate);
    } else {
      onChange(null);
    }
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          ref={ref}
          label="Date*"
          value={value ? dayjs(value) : null}
          onChange={handleDateChange}
          format="LL"
          minDate={dayjs()}
          slotProps={{
            textField: {
              helperText: emptyFieldError,
            },
          }}
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
});

export default CustomDatePicker;
