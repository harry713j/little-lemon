import React from "react";
import { Button } from "./index.js";
import { useSelector } from "react-redux";

function ItemCard({ image, item, onAddItem, onRemoveItem }) {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="xl:w-[316px] sm:w-[280px] w-[240px]  h-auto bg-white xl:rounded-lg rounded-md shadow-lg flex-shrink-0 flex flex-col ">
      <span className=" w-full  xl:h-[190px] sm:h-[160px] h-[140px] xl:rounded-t-lg rounded-t-md overflow-hidden ">
        <img
          src={image}
          alt={item.item_name}
          className="w-full h-full xl:rounded-t-lg rounded-t-md object-cover "
        />
      </span>
      <div
        className="flex flex-col xl:px-[18px] xl:pt-5 xl:pb-3 sm:px-[14px] px-3 sm:pt-[17px] 
      pt-[14px] sm:pb-2.5 pb-2"
      >
        <span className="flex items-center justify-between font-karla font-bold sm:text-lg sm:leading-[21px] text-base leading-[18px] xl:mb-3 mb-2">
          <span className="text-black capitalize ">{item.item_name}</span>
          <span className="text-coral w-1/5 text-end ">${(item.price).toFixed(2)}</span>
        </span>

        <span className="font-karla font-medium xl:text-base sm:text-sm text-xs xl:mb-5 sm:mb-4 mb-3 text-black/80 text-wrap break-words xl:leading-[19px] sm:leading-[16.5px] leading-[14px] ">
          {item.description}
        </span>
        <span className="">
          {cart.some((cart_item) => cart_item.$id === item.$id) ? (
            <Button
              className="bg-red-500 duration-500 xl:text-base sm:text-sm 
          text-xs xl:px-5 sm:px-4 px-3.5 xl:py-2 py-1.5 hover:bg-red-700 focus:ring-red-700
           focus:ring-offset-2 focus:ring-[1.5px]"
              onClick={() => onRemoveItem(item.$id)}
            >
              Remove from bag
            </Button>
          ) : (
            <Button
              className="bg-green duration-500 xl:text-base sm:text-sm 
          text-xs xl:px-5 sm:px-4 px-3.5 xl:py-2 py-1.5 hover:bg-lightGreen focus:ring-lightGreen
           focus:ring-offset-2 focus:ring-[1.5px]"
              onClick={() => onAddItem(item)}
            >
              Add to bag
            </Button>
          )}
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
