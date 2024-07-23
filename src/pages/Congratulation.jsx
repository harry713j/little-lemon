import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

function Congratulation() {
  const navigate = useNavigate();
  const [afterSecond, setAfterSecond] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAfterSecond("translate-x-[64rem]");
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <section className="flex flex-col h-[90%] items-center justify-center">
        <svg
          className="xl:w-20 xl:h-20 sm:w-16 sm:h-16 w-12 h-12 text-lightGreen dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
          />
          <path
            fill="#fff"
            d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
          />
        </svg>
        <h1 className="font-markazi font-medium text-lightGreen underline xl:text-[48px] sm:text-[36px] text-[24px]">
          Congratulations!
        </h1>
        <span className="flex flex-col items-center xl:space-y-3 sm:space-y-2 space-y-1">
          <h2 className="font-karla font-medium text-black/80 xl:text-[18px] sm:text-[17px] text-base">
            Your food is on its way
          </h2>
          <MdDeliveryDining
            className={`absolute inline-block font-karla font-medium text-emerald-600 xl:text-[48px] sm:text-[40px] text-[32px] duration-1000 transition-transform top-1/2 xl:translate-y-12 sm:translate-y-9 translate-y-6 ${afterSecond}`}
          />
        </span>
      </section>
    </main>
  );
}

export default Congratulation;
