import React from "react";

function ChefProfile({ chefImage, name, position }) {
  return (
    <div
      className="bg-white xl:w-[300px] sm:w-[180px] md:w-[200px] lg:w-[220px] w-[140px] max-[320px]:w-[85px]
     h-auto rounded shadow"
    >
      <span className="block w-full xl:h-[260px] sm:h-[230px] h-[160px] max-[320px]:h-[120px] rounded-t overflow-hidden">
        <img
          src={chefImage}
          alt={name}
          className="w-full h-full rounded-t object-cover"
        />
      </span>
      <span className="flex flex-col items-center p-1.5">
        <span
          className="capitalize font-markazi font-normal text-black xl:text-3xl sm:text-2xl text-xl 
        max-[320px]:text-[15px]"
        >
          {name}
        </span>
        <span
          className="capitalize font-karla font-normal text-black/70 xl:text-base sm:text-sm text-xs 
        max-[320px]:text-[11px]"
        >
          {position}
        </span>
      </span>
    </div>
  );
}

export default ChefProfile;
