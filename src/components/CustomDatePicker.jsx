import * as React from "react";
import { useId, useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { Input } from "./index"; // Assuming your Input component is in the same directory

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "inherit",
    width: "240px",
    height: "36px",
    borderRadius: "0.375rem",
    padding: "8px 12px",
    outline: "none",
    border: "1px solid #4CAF50", // Example green color
    fontFamily: "Karla, sans-serif",
    fontWeight: "500",
    fontSize: "1rem",
    color: "#000000cc", // 80% black
    "&:focus": {
      outline: "1.4px solid #66BB6A", // validateGreen
      border: "none",
    },
    "&:invalid": {
      outline: "1.4px solid #FF6F61", // invalidatePink
      border: "none",
    },
  },
  "& .MuiInputLabel-root": {
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: "Karla, sans-serif",
    backgroundColor: "#f5f5f5", // creamWhite
    padding: "0 2px",
    transition: "all 0.5s",
    color: "#000000cc", // 80% black
    marginTop: "4px",
    marginLeft: "12px",
    "&.Mui-focused": {
      color: "#66BB6A", // validateGreen
      fontSize: "0.9375rem", // 15px
      transform: "translateY(-1.25rem)", // -20px
    },
    "&.MuiFormLabel-filled": {
      color: "#66BB6A", // validateGreen
      fontSize: "0.9375rem", // 15px
      transform: "translateY(-1.25rem)", // -20px
    },
  },
}));

function CustomDatePicker() {
  const [value, setValue] = useState(null);
  const id = useId();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select date"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            id={id}
            label="Select date"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
