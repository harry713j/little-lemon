import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="w-screen h-screen">
      <section className="flex h-[80%] flex-col items-center justify-center">
        <h1 className="font-markazi font-medium text-black/90 xl:text-[64px] sm:text-[44px] text-[32px]">
          Oops!
        </h1>
        <h3 className="font-karla font-medium italic text-black xl:text-[28px] sm:text-[22px] text-[18px]">
          404 page not found
        </h3>
        <div className="border border-green rounded-md bg-green text-bluishWhite px-3 py-1.5 font-karla font-semibold xl:mt-5 xl:text-base sm:text-[15px] sm:mt-4 mt-3 text-sm hover:bg-lightGreen cursor-pointer">
          <Link to={"/"}>Go back to Home</Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
