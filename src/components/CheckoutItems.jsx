import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutItemCard } from "./index";
import itemService from "../appwrite/ItemService";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "./../store/features/cart/cartSlice";

function CheckoutItems() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // console.log(cart);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleItemQuantity = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  return (
    <div className="flex flex-col xl:space-y-2 space-y-1 ">
      {cart.map((item) => (
        <CheckoutItemCard
          key={item.$id}
          image={itemService.getImagePreview(item.item_image).href}
          item={item}
          onRemoveItem={handleRemoveItem}
          onQuantityChange={handleItemQuantity}
        />
      ))}
    </div>
  );
}

export default CheckoutItems;
