import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { BiCurrentLocation } from "react-icons/bi";
import "./styles.css";
import environment_variables from "../../environment_import/environmentVariables";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

const AddressInput = React.forwardRef(function (
  { register, setValue, errors },
  ref
) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: environment_variables.googleMapAPIKey,
    libraries: libraries,
  });

  const [autocomplete, setAutocomplete] = useState(null);
  const placeAutocompleteRef = useRef(null);
  const [selectedPlace, setSelectedPlace] = useState("");

  useEffect(() => {
    if (isLoaded) {
      const regionBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(41.832272, -87.623352),
        new window.google.maps.LatLng(30.499121, -90.91201)
      );

      const autocompletePlaces = new window.google.maps.places.Autocomplete(
        placeAutocompleteRef.current,
        {
          bounds: regionBounds,
          fields: ["formatted_address", "name"],
          componentRestrictions: {
            country: ["us"],
          },
        }
      );

      setAutocomplete(autocompletePlaces);

      autocompletePlaces.addListener("place_changed", () => {
        const place = autocompletePlaces.getPlace();
        // console.log(place);
        setSelectedPlace(place.formatted_address);
        setValue("address", place.formatted_address);
      });
    }
  }, [isLoaded, setValue]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <BiCurrentLocation className="text-green text-xl mt-4 sm:-mr-4 -mr-3.5" />
        <TextField
          ref={ref}
          inputRef={placeAutocompleteRef}
          label="Enter your location"
          variant="standard"
          className="custom-text-field"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root.MuiInputLabel-shrink": {
              color: selectedPlace ? "rgba(71,94,87,0.8)" : "#58B9EF",
            },
          }}
        />
        <input
          type="hidden"
          {...register("address", { required: "Address is required" })}
        />
      </Box>
      {errors.address && (
        <span className="text-red-500">{errors.address.message}</span>
      )}
    </>
  );
});

export default AddressInput;
