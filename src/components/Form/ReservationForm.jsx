import React, { useState } from "react";
import {
  Input,
  TextArea,
  Select,
  CustomDatePicker,
  CustomTimePicker,
} from "../index.js";
import { useForm } from "react-hook-form";
import { occasions, noOfGuests } from "../../utility/optionsData.js";
import reservationService from "../../appwrite/reservationService.js";

function ReservationForm() {
  //TODO: setting up the mail service i.e. when user submit the reservation form they will get a confirmation
  // email
  const [error, setError] = useState(null);
  const { control, handleSubmit } = useForm();

  const create = async (data) => {
    setError(null);
    try {
      console.log(data);
      const reservation = await reservationService.createReservation(data);
      // do other things after reservation
    } catch (error) {
      setError("Failed to reservation ");
    }
  };

  return (
    <section className="bg-white p-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(create)}
        className="flex flex-col items-center justify-center xl:space-y-[18px] sm:space-y-[16px] space-y-[14px]"
      >
        <Input
          label="Full Name*"
          className="bg-white"
          labelClassName="bg-white"
          name="fullName"
          control={control}
          rules={{
            required: "Name is required",
          }}
        />
        <Input
          type="tel"
          label="Phone Number*"
          className="bg-white"
          labelClassName="bg-white"
          name="phoneNumber"
          control={control}
          rules={{
            required: "Phone number is required",
            pattern: { value: /^\d{10}$/, message: "Phone number is Invalid" },
          }}
        />
        <Input
          type="email"
          label="Email*"
          className="bg-white"
          labelClassName="bg-white"
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Email is Invalid",
            },
          }}
        />
        <CustomDatePicker
          name="date"
          control={control}
          rules={{ required: "Date is required" }}
        />
        <CustomTimePicker
          name="time"
          control={control}
          rules={{ required: "Time is required" }}
        />
        <Select
          options={noOfGuests}
          label="Number of People"
          labelClassName="bg-white"
          name="guests"
          control={control}
          rules={{ required: "Number of People is required" }}
        />
        <Select
          options={occasions}
          label="Occasions"
          labelClassName="bg-white"
          name="occasions"
          control={control}
        />
        <TextArea
          label="Special Request(Optional)"
          labelClassName="bg-white"
          name="requests"
          control={control}
        />
      </form>
    </section>
  );
}

export default ReservationForm;
