import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push({ ...action.payload, quantity: 1 });
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.$id !== action.payload.id;
      });
      console.log(state.cart);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity > 1 || quantity === 0) {
        const itemIndex = state.cart.findIndex((item) => item.$id === id);

        if (itemIndex !== -1) {
          state.cart[itemIndex] = {
            ...state.cart[itemIndex],
            quantity: quantity,
          };
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
