import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="relative group">
      <CgShoppingBag className=" text-green duration-500 group-hover:text-darkYellow xl:text-[28px] md:text-[26px] text-[24px]" />

      {cart.length ? (
        <div
          className="absolute -top-1.5 -right-1.5 xl:h-4 xl:w-4 h-3.5 w-3.5
          text-bluishWhite/90 bg-green px-1 py-0 flex duration-500
      items-center justify-center xl:text-xs text-[10px] font-bold font-karla rounded-full "
        >
          {cart.reduce((accumulator, item) => accumulator + item.quantity, 0)}
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
