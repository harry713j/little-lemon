import React, { useEffect, useRef, useState } from "react";
import { ItemCard } from "./index.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import itemService from "../appwrite/ItemService.js";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../store/features/cart/cartSlice.js";
import { toast } from "react-toastify";

function ItemCarousel() {
  const dispatch = useDispatch();

  const [specialItem, setSpecialItem] = useState([]);
  const carouselRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleAddItem = (item) => {
    dispatch(addItemToCart(item));
    toast.success(`🥳 ${item.item_name} added to cart`);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
    toast.warn(`😒 Item removed from cart`);
  };

  const fetchItems = async () => {
    try {
      const items = await itemService.getAllItems();
      const special = items.filter((item) => item.is_special === true);
      setSpecialItem(special);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setIsPrevDisabled(scrollLeft === 0);
    setIsNextDisabled(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const carouselBox = carouselRef.current;

    carouselBox.addEventListener("scroll", handleScroll);

    return () => {
      carouselBox.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrevious = () => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - width;
  };

  const handleNext = () => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + width;
  };

  return (
    <div className="relative flex items-center scroll-smooth justify-center w-full ">
      <button
        className={`absolute -left-6 sm:-left-10 z-10 bg-white rounded-full border border-transparent xl:p-4 sm:p-3 p-2 shadow-md 
      hover:bg-white/40 active:border active:border-green/70 disabled:opacity-50 disabled:cursor-not-allowed `}
        onClick={handlePrevious}
        disabled={isPrevDisabled}
      >
        <BsChevronLeft className="text-green xl:text-2xl sm:text-xl text-lg" />
      </button>
      <div
        ref={carouselRef}
        className="flex py-4 px-3 items-start scroll-smooth overflow-hidden xl:gap-9 xl:w-[1060px] 
        sm:gap-7 sm:w-[840px] gap-6 w-[480px] "
      >
        {specialItem.map((item) => (
          <ItemCard
            key={item.$id}
            image={itemService.getImagePreview(item.item_image).href}
            item={item}
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <button
        className={`absolute -right-6 sm:-right-10 z-10 bg-white rounded-full border border-transparent xl:p-4 sm:p-3 p-2 shadow-md 
      hover:bg-white/40 active:border active:border-green/70 disabled:opacity-50 disabled:cursor-not-allowed`}
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        <BsChevronRight className="text-green xl:text-2xl sm:text-xl text-lg" />
      </button>
    </div>
  );
}

export default ItemCarousel;
