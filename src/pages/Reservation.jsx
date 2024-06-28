import React from "react";
import reservationImage_1 from "../assets/reservation/reservation-1.jpg";
import reservationImage_2 from "../assets/reservation/reservation-2.jpg";
import reservationImage_3 from "../assets/reservation/reservation-3.jpg";
import { ReservationForm } from "../components/index.js";

function Reservation() {
  return (
    <section className="border border-transparent">
      <article className="absolute w-screen xl:mt-[40px] sm:mt-[28px] mt-[18px] -left-[0px]">
        <div
          className="bg-dinning_table bg-cover bg-center relative block z-10 bg-no-repeat before:content-[''] 
        before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-green before:to-green
        before:opacity-70 before:z-[-7]"
        >
          <div
            className="flex flex-col text-center mx-auto xl:w-1/2 sm:w-3/5 w-2/3 max-[320px]:w-4/5 items-center 
            xl:py-8 sm:py-6 py-4"
          >
            <h1
              className="font-markazi font-medium text-yellow xl:text-[60px] sm:text-[44px] text-[30px]
            max-[320px]:text-[28px]"
            >
              Reservation
            </h1>
            <p className="font-karla font-medium text-bluishWhite xl:text-lg sm:text-base text-sm">
              Welcome to Little Lemon! Reserve your table now to experience our
              delightful blend of flavors and warm hospitality. Whether
              it&apos;s a cozy dinner for two or a celebration with friends and
              family, we ensure an unforgettable dining experience. Please fill
              out the form below to secure your spot. We look forward to serving
              you!
            </p>
          </div>
        </div>
      </article>
      <article
        className="flex items-center justify-center xl:space-x-10 xl:mt-[420px] sm:mt-[362px] mt-[300px] 
        xl:mb-[180px] sm:mb-[140px] mb-[100px] sm:space-x-8 space-y-8
      max-[320px]:mt-[296px]"
      >
        <div className="w-1/2 ">
          <ReservationForm />
        </div>
        <div className="w-1/2 hidden sm:flex flex-col xl:space-y-10 sm:space-y-8">
          <figure className="rounded w-full">
            <img
              src={reservationImage_1}
              alt="img-1"
              className="rounded shadow-sm lg:w-3/5 lg:h-3/5 sm:w-[90%] sm:h-[90%]"
            />
          </figure>
          <figure className="rounded w-full">
            <img
              src={reservationImage_2}
              alt="img-2"
              className="rounded shadow-sm lg:w-3/5 lg:h-3/5 sm:w-[90%] sm:h-[90%] lg"
            />
          </figure>
          <figure className="rounded w-full">
            <img
              src={reservationImage_3}
              alt="img-3"
              className="rounded shadow-sm lg:w-3/5 lg:h-3/5 sm:w-[90%] sm:h-[90%]"
            />
          </figure>
        </div>
      </article>
    </section>
  );
}

export default Reservation;
