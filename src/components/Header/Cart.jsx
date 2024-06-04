import React from "react";
import { CgShoppingBag } from "react-icons/cg";

function Cart() {
  const itemCount = 3;
  return (
    <div className="relative group">
      <CgShoppingBag className=" text-green duration-500 group-hover:text-amber-400/75 xl:text-4xl md:text-[32px] text-[28px]" />
      <div
        className="absolute -top-2 -right-2
          text-bluishWhite/90 bg-green px-1.5 py-0.5 flex group-hover:bg-amber-400/75 duration-500
      items-center justify-center xl:text-xs text-[10px] font-bold font-karla rounded-full "
      >
        {itemCount}
      </div>
    </div>
  );
}

export default Cart;
