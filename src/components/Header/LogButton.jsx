import React from "react";

function LogButton() {
  return (
    <button
      //   onClick={}
      className="font-karla uppercase rounded-md font-extrabold md:text-yellow bg-transparent 
      xl:text-[15px] xl:px-4 xl:py-2 md:text-[13px] md:px-2.5 md:py-1.5 text-xs px-2.5 py-1.5
      outline md:outline-[1.5px] outline-1 md:outline-yellow text-darkYellow outline-darkYellow duration-500
       hover:bg-yellow hover:text-bluishWhite hover:outline-yellow
      active:ring-2 active:ring-offset-2 active:ring-yellow "
    >
      Log Out
    </button>
  );
}

export default LogButton;
