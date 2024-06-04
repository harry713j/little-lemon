import React, { useEffect, useRef, useState } from "react";
import { ItemCard } from "./index.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ItemCarousel({ specialItems }) {
  const carouselRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

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
        className={`absolute -left-10 z-10 bg-white rounded-full border border-transparent xl:p-4 sm:p-3 p-2 shadow-md 
      hover:bg-white/40 active:border active:border-green/70 disabled:opacity-50 disabled:cursor-not-allowed `}
        onClick={handlePrevious}
        disabled={isPrevDisabled}
      >
        <BsChevronLeft className="text-green xl:text-2xl sm:text-xl text-lg" />
      </button>
      <div
        ref={carouselRef}
        className="flex py-4 px-3 items-center scroll-smooth overflow-hidden xl:gap-9 xl:w-[1060px] 
        sm:gap-7 sm:w-[840px] gap-6 w-[480px] "
      >
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <button
        className={`absolute -right-10 z-10 bg-white rounded-full border border-transparent xl:p-4 sm:p-3 p-2 shadow-md 
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
