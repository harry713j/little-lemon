import React from "react";
import blank_profile from "../assets/blank_profile.jpg";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

function TestimonialCard({ review, profile, name, ratings }) {
  return (
    <div
      className="xl:w-[800px] sm:w-[520px] w-[360px] h-auto 
    shadow-lg flex-shrink-0 flex flex-col items-center xl:mx-4 sm:mx-3 mx-2 "
    >
      <div
        className="w-full h-3/5 bg-apricot/70 xl:rounded-t-lg rounded-t-md  xl:py-10 xl:px-12 
      sm:py-8 sm:px-10 py-6 px-10 "
      >
        <p
          className="font-karla font-medium mb-4 text-black xl:text-xl xl:leading-[24px] 
        sm:text-lg sm:leading-[21.5px] text-base leading-[19.2px] "
        >
          {review}
        </p>
      </div>

      <div
        className="bg-green/70 relative w-full h-2/5 flex flex-col items-center xl:rounded-b-lg rounded-b-md
       xl:pb-3 xl:pt-12 xl:px-12 sm:pb-2.5 sm:pt-10 sm:px-10 pb-2 pt-10 px-10"
      >
        <span
          className="absolute bottom-1/2 xl:w-[88px] xl:h-[88px] sm:w-20 sm:h-20 w-[72px] h-[72px] 
        overflow-hidden rounded-full border-2 border-creamWhite "
        >
          <img
            src={profile ? profile : blank_profile}
            alt="profile"
            className="w-full h-full rounded-full object-cover"
          />
        </span>

        <span className="font-karla font-extrabold mt-2 text-bluishWhite lg:text-xl sm:text-lg text-base">
          {name}
        </span>
        <span className="flex items-center sm:gap-[2px] gap-[1px]">
          {[...Array(5)].map((_, index) =>
            ratings > index ? (
              <HiStar key={index} className="text-orange" />
            ) : (
              <HiOutlineStar key={index} className="text-orange" />
            )
          )}
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;
