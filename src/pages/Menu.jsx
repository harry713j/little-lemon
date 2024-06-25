import React from "react";
import { AllMenu } from "../components/index.js";

function Menu() {
  return (
    <section className="border border-transparent">
      <article className="absolute w-screen xl:mt-[40px] sm:mt-[28px] mt-[18px] -left-[0px]">
        <div
          className="bg-delicious_meal bg-cover bg-center relative block z-10 bg-no-repeat before:content-[''] 
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
              Welcome to Little Lemon!
            </h1>
            <p className="font-karla font-medium text-bluishWhite xl:text-lg sm:text-base text-sm">
              Little lemon is a charming neighborhood bistro founded by two
              friends Mario and Adrian that serves simple food. The restaurants
              features a locally sourced menu with daily specials.
            </p>
          </div>
        </div>
      </article>
      <article
        className="flex flex-col xl:space-y-14 xl:mt-[420px] xl:mb-[80px] sm:mt-[362px] sm:mb-[60px] mt-[300px] 
        mb-[44px] sm:space-y-12 space-y-8
      max-[320px]:mt-[296px] xl:mb-[180px] sm:mb-[140px] mb-[100px]"
      >
        <AllMenu />
      </article>
    </section>
  );
}

export default Menu;
