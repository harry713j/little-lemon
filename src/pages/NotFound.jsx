import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRight } from "react-icons/pi";

function NotFound() {
  return (
    <main className="w-screen h-screen">
      <section className="flex h-[80%] flex-col items-center justify-center">
        <h1 className="font-karla leading-none font-bold text-black/70 xl:text-[64px] sm:text-[44px] text-[32px]">
          404
        </h1>
        <h3 className="font-karla font-medium italic text-black/60 xl:text-[28px] sm:text-[22px] text-[18px]">
          Oops page not found.
        </h3>
        <div
          className="group flex items-center text-green font-karla font-medium xl:mt-5 xl:text-base sm:text-[15px] space-x-1.5
        sm:mt-4 mt-3 text-sm hover:text-lightGreen hover:underline cursor-pointer"
        >
          <Link to={"/"}>Go back to Home</Link>
          <PiArrowRight className="transition-transform duration-700 group-hover:translate-x-4" />
        </div>
      </section>
    </main>
  );
}

export default NotFound;
