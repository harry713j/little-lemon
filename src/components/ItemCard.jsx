import React from "react";
import { Button } from "./index.js";
import pizza from "../assets/pexels-enginakyurt-1435903.jpg";

function ItemCard({ image, title, price, description }) {
  return (
    <div className="xl:w-[316px] sm:w-[280px] w-[240px]  h-auto bg-white xl:rounded-lg rounded-md shadow-lg flex-shrink-0 flex flex-col ">
      <span className=" w-full  xl:h-[190px] sm:h-[160px] xl:rounded-t-lg rounded-t-md overflow-hidden ">
        <img
          src={pizza}
          alt="pizza"
          className="w-full h-full xl:rounded-t-lg rounded-t-md object-cover "
        />
      </span>
      <div
        className="flex flex-col xl:px-[18px] xl:pt-5 xl:pb-3 sm:px-[14px] px-3 sm:pt-[17px] 
      pt-[14px] sm:pb-2.5 pb-2"
      >
        <span className="flex items-center justify-between font-karla font-bold sm:text-lg text-base xl:mb-3 mb-2">
          <span className="text-black">Margherita Pizza</span>
          <span className="text-coral">$9.89</span>
        </span>

        <span className="font-karla font-medium xl:text-base sm:text-sm text-xs xl:mb-5 sm:mb-4 mb-3 text-black/80 text-wrap break-words xl:leading-[19px] sm:leading-[16.5px] leading-[14px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          lacus sem. Donec quis consectetur diam. Pellentesque eget diam lectus.
          Suspendisse scelerisque felis dui, non pulvinar nibh placerat nec.
          Duis id tincidunt lacus. Suspendisse eu aliquam ipsum. Quisque
        </span>
        <span className="">
          <Button className="bg-green duration-500 xl:text-base sm:text-sm text-xs xl:px-5 sm:px-4 px-3.5 xl:py-2 py-1.5 hover:bg-lightGreen focus:ring-lightGreen focus:ring-offset-2 focus:ring-[1.5px]">
            Add to bag
          </Button>
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
