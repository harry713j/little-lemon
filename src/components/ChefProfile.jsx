import React from "react";
import chef_2 from "../assets/chef-2.jpg";

function ChefProfile({ chefImage, name, position }) {
  return (
    <div className="bg-white xl:w-[300px] sm:w-[240px] w-[140px] h-auto rounded shadow">
      <span className="block w-full xl:h-[260px] sm:h-[230px] h-[160px] rounded-t overflow-hidden">
        <img
          src={chef_2}
          alt="chef_2"
          className="w-full h-full rounded-t object-cover"
        />
      </span>
      <span className="flex flex-col items-center p-1.5">
        <span className="capitalize font-markazi font-normal text-black xl:text-3xl sm:text-2xl text-xl">
          jerome bell
        </span>
        <span className="capitalize font-karla font-normal text-black/70 xl:text-base sm:text-sm text-xs">
          sous chef
        </span>
      </span>
    </div>
  );
}

export default ChefProfile;
