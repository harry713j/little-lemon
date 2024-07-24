import React, { useState } from "react";
import {
  Input,
  TextArea,
  Select,
  CustomDatePicker,
  CustomTimePicker,
  Button,
} from "../index.js";
import { useForm } from "react-hook-form";
import { occasions, noOfGuests } from "../../utility/optionsData.js";
import reservationService from "../../appwrite/reservationService.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ReservationForm() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    setError(null);
    try {
      const reservation = await reservationService.createReservation(data);
      toast.success(
        `Reservation successful! Confirmation email has been sent.`
      );

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError("Reservation failed");
      toast.error("Reservation failed! Please try again.");
    }
  };

  return (
    <section className="bg-creamWhite p-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(create)}
        className="flex flex-col items-start justify-center xl:space-y-[18px] sm:space-y-[16px] space-y-[14px]"
      >
        <Input
          label="Full Name*"
          labelClassName="bg-creamWhite"
          emptyFieldError={errors.fullName ? errors.fullName.message : null}
          name="fullName"
          control={control}
          rules={{
            required: "Name is required",
          }}
        />
        <Input
          type="tel"
          label="Phone Number*"
          labelClassName="bg-creamWhite"
          emptyFieldError={
            errors.phoneNumber ? errors.phoneNumber.message : null
          }
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
          labelClassName="bg-creamWhite"
          emptyFieldError={errors.email ? errors.email.message : null}
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
          emptyFieldError={errors.date ? errors.date.message : null}
          name="date"
          control={control}
          rules={{ required: "Date is required" }}
        />
        <CustomTimePicker
          emptyFieldError={errors.time ? errors.time.message : null}
          name="time"
          control={control}
          rules={{ required: "Time is required" }}
        />
        <Select
          options={noOfGuests}
          label="Number of People"
          labelClassName="bg-creamWhite"
          emptyFieldError={errors.guests ? errors.guests.message : null}
          name="guests"
          control={control}
          rules={{ required: "Number of People is required" }}
        />
        <Select
          options={occasions}
          label="Occasions"
          labelClassName="bg-creamWhite"
          name="occasions"
          control={control}
        />
        <TextArea
          label="Special Request(Optional)"
          labelClassName="bg-creamWhite"
          name="requests"
          control={control}
        />

        <Button
          type="submit"
          className="bg-yellow w-1/2 hover:bg-darkYellow xl:mt-6 sm:mt-4 mt-3"
        >
          submit
        </Button>
      </form>
      {error && (
        <p className="text-center font-karla font-normal text-red-500 xl:mt-5 sm:mt-4 mt-3">
          {error}
        </p>
      )}
    </section>
  );
}

export default ReservationForm;
