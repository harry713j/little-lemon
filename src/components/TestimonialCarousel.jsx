import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TestimonialCard } from "./index.js";

function TestimonialCarousel() {
  const carouselRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [direction, setDirection] = useState("forward");

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

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (direction === "forward") {
        if (!isNextDisabled) {
          handleNext();
        } else {
          setDirection("backward");
          handlePrevious();
        }
      } else {
        if (!isPrevDisabled) {
          handlePrevious();
        } else {
          setDirection("forward");
          handleNext();
        }
      }
    }, 2500);

    return () => clearInterval(autoSlide);
  }, [direction, isNextDisabled, isPrevDisabled]);

  return (
    <div
      className="relative mx-auto flex items-center scroll-smooth justify-center xl:w-[840px] p-1 
    sm:w-[556px] w-[384px] "
    >
      <button
        className={`absolute -left-10 z-10 bg-white rounded-full border border-transparent xl:p-4 sm:p-3 p-2 shadow-md 
      hover:bg-white/40 active:border active:border-green/70 disabled:opacity-50 disabled:cursor-not-allowed `}
        onClick={handlePrevious}
        disabled={isPrevDisabled}
      >
        <BsChevronLeft className="text-green xl:text-2xl sm:text-xl text-lg" />
      </button>
      <div
        className="w-full overflow-hidden flex items-center scroll-smooth "
        ref={carouselRef}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <button
        className={`absolute -right-10 z-10 bg-white rounded-full border border-transparent xl:p-4 sm:p-3 p-2 shadow-md 
      hover:bg-white/40 active:border active:border-green/70 disabled:opacity-50 disabled:cursor-not-allowed `}
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        <BsChevronRight className="text-green xl:text-2xl sm:text-xl text-lg" />
      </button>
    </div>
  );
}

export default TestimonialCarousel;
