import React, { useEffect, useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { NumberInput, Button } from "./index.js";

function CheckoutItemCard({ image, item, onRemoveItem, onQuantityChange }) {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    if (quantity !== item.quantity) {
      onQuantityChange(item.$id, quantity);
    }
  }, [quantity, item, onQuantityChange]);

  return (
    <div
      className="flex items-center flex-col sm:flex-row rounded shadow-lg bg-white xl:w-[720px] xl:h-32 xl:px-6 xl:py-4
    sm:w-[560px] sm:h-28 sm:px-5 sm:py-3 w-[300px] py-2 px-3"
    >
      <div
        className="flex sm:w-1/2 w-full items-center justify-between sm:justify-start xl:gap-5 
      sm:gap-[15px] gap-3 "
      >
        <span
          className="inline-block border border-green/70 rounded overflow-hidden xl:w-[108px] xl:h-[90px]
         sm:w-[96px] sm:h-[84px] w-[72px] h-[72px] "
        >
          <img
            src={image}
            alt={item.item_name}
            className="rounded w-full h-full object-cover"
          />
        </span>
        <span className="flex flex-col w-3/5">
          <span
            className="font-karla text-black/90 capitalize font-bold xl:text-lg xl:leading-[20px] 
          sm:leading-[19px] leading-[16px] sm:text-[17px] text-sm"
          >
            {item.item_name}
          </span>
        </span>
      </div>
      <div className="w-full sm:w-1/2 px-2 flex items-center justify-between">
        <span
          className=" font-karla text-coral font-bold xl:text-lg 
        xl:leading-[20px] sm:text-[17px] text-sm"
        >
          ${(quantity * item.price).toFixed(2)}
        </span>
        <span className="">
          <NumberInput value={quantity} onChange={setQuantity} />
        </span>
        <span>
          <Button className="" onClick={() => onRemoveItem(item.$id)}>
            <BiSolidTrashAlt className="font-karla text-green hover:text-red-600 xl:text-2xl sm:text-xl text-lg" />
          </Button>
        </span>
      </div>
    </div>
  );
}

export default CheckoutItemCard;
