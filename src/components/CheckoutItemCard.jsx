import React, { useState } from "react";
import pizza from "../assets/pexels-enginakyurt-1435903.jpg";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { BiSolidTrashAlt } from "react-icons/bi";
import { NumberInput, Button } from "./index.js";

function CheckoutItemCard({ image, title, ratings, price }) {
  const [quantity, setQuantity] = useState(1);
  const star = 5;
  const p = 9.8;

  return (
    <div
      className="flex items-center rounded shadow-lg bg-white xl:w-[720px] xl:h-32 xl:px-6 xl:py-4
    sm:w-[600px] sm:h-28 sm:px-5 sm:py-3 w-[460px] h-[100px] py-2 px-3  "
    >
      <div className="flex w-1/2 items-center xl:gap-5 sm:gap-[15px] gap-3 ">
        <span
          className="inline-block border border-green/70 rounded overflow-hidden xl:w-[108px] xl:h-[90px]
         sm:w-[96px] sm:h-[84px] w-[80px] h-[76px] "
        >
          <img
            src={pizza}
            alt="pizza"
            className="rounded w-full h-full object-cover"
          />
        </span>
        <span className="flex flex-col w-3/5">
          <span className="font-karla text-black/90 font-bold xl:text-lg xl:leading-[20px] sm:leading-[19px] leading-[16px] sm:text-[17px] text-sm">
            Pizza Margherita Pizza Margherita
          </span>
          <span className="flex items-center sm:gap-[2px] gap-[1px]">
            {[...Array(star)].map((_, index) => (
              <HiStar key={index} className="text-orange" />
            ))}
          </span>
        </span>
      </div>
      <div className="w-1/2 px-2 flex items-center justify-between ">
        <span
          className=" font-karla text-coral font-bold xl:text-lg 
        xl:leading-[20px] sm:text-[17px] text-sm"
        >
          ${(quantity * p).toFixed(2)}
        </span>
        <span className="">
          <NumberInput value={quantity} onChange={setQuantity} />
        </span>
        <span>
          <Button className="">
            <BiSolidTrashAlt className="font-karla text-green hover:text-red-600 xl:text-2xl sm:text-xl text-lg" />
          </Button>
        </span>
      </div>
    </div>
  );
}

export default CheckoutItemCard;
