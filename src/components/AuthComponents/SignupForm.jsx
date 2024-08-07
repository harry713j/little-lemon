import React, { useState } from "react";
import { Button, Input } from "../index";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/authentication";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = async (data) => {
    setError(null);
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        // dispatch to the store to update the state
        toast.success(`Account created successfully`);
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError("Failed to create account");
      toast.error(`Something went wrong!Failed to create account`);
    }
  };
  return (
    <section
      className="bg-white flex items-center justify-center xl:w-1/2 sm:w-2/3 w-full 
      xl:pt-8 sm:pt-6 pt-5 xl:pb-20 sm:pb-16 pb-14 xl:px-24 sm:px-[72px] px-[52px]
     xl:rounded-lg rounded-md shadow-xl"
    >
      <div className="flex flex-col">
        <h1
          className="text-center font-markazi font-medium text-green/80 capitalize leading-none 
        xl:text-[64px] xl:mb-8 sm:text-[48px] sm:mb-6 text-[36px] mb-5"
        >
          sign up
        </h1>
        <form
          onSubmit={handleSubmit(createUser)}
          className="flex flex-col xl:gap-5 gap-4 xl:mb-[24px] sm:mb-5 mb-4"
        >
          <Input
            label="Full Name*"
            className="bg-white"
            labelClassName="bg-white"
            emptyFieldError={errors.name ? errors.name.message : null}
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
          />
          <Input
            type="email"
            label="Email*"
            className="bg-white"
            labelClassName="bg-white"
            emptyFieldError={errors.email ? errors.email.message : null}
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                message: "Email must be valid",
              },
            }}
          />
          <Input
            type="password"
            label="Password*"
            className="bg-white"
            labelClassName="bg-white"
            emptyFieldError={errors.password ? errors.password.message : null}
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              pattern: {
                value: /^[a-z0-9]{8,}$/,
                message:
                  "Password must be 8+ characters, containing a-z & 0-9.",
              },
            }}
          />
          <Button
            type="submit"
            className="bg-yellow w-full hover:bg-darkYellow xl:mt-6 sm:mt-4 mt-3"
          >
            create account
          </Button>
        </form>

        <span
          className="flex flex-wrap items-center mx-auto font-karla font-normal text-black/80 xl:text-[17px] 
        sm:text-base text-[13px] "
        >
          <p>Already have an account?&nbsp;</p>
          <Link className="text-yellow hover:underline" to="/login">
            Login
          </Link>
          &nbsp;here
        </span>
        {error && (
          <p className="text-center font-karla font-normal text-red-500 xl:mt-5 sm:mt-4 mt-3">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}

export default SignupForm;
