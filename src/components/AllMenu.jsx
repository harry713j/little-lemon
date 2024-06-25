import React, { useEffect, useState } from "react";
import itemService from "../appwrite/ItemService";
import { ItemCard } from "./index";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../store/features/cart/cartSlice.js";

function AllMenu() {
  const foodCategory = [
    "starters",
    "salads",
    "main",
    "pasta",
    "pizza",
    "desserts",
    "beverages",
    "special",
  ];
  const dispatch = useDispatch();
  const [allItems, setAllItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState(foodCategory[0]);

  const handleAddItem = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const fetchItems = async () => {
    try {
      const items = await itemService.getAllItems();
      setAllItems(items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className=" xl:mb-[200px] sm:mb-[160px] mb-[100px] ">
      {allItems.length > 0 ? (
        <div className="">
          <h1 className="font-markazi font-medium text-black capitalize xl:text-[40px] sm:text-[34px] text-[28px]">
            All menu item
          </h1>
          <section className="xl:mb-8 sm:mb-6 mb-5">
            <div className="flex items-center overflow-x-auto whitespace-nowrap ">
              {foodCategory.map((category, index) => (
                <span
                  key={category}
                  onClick={() => setFilterCategory(foodCategory[index])}
                  className={`font-karla font-medium  ${
                    category === filterCategory
                      ? "text-green border-green"
                      : "text-black/50"
                  } capitalize  xl:p-4 sm:3 p-2 xl:text-xl
                  border-b-2 border-black/15 cursor-pointer`}
                >
                  {category}
                </span>
              ))}
            </div>
          </section>
          <section className=" xl:px-[32px] xl:py-[20px] sm:px-[24px] sm:py-[16px] px-[12px] py-[8px]">
            <div className="flex items-start flex-wrap xl:gap-8 sm:gap-5 gap-4">
              {allItems
                .filter(
                  (filter_item) => filter_item.category === filterCategory
                )
                .map((item) => (
                  <ItemCard
                    key={item.$id}
                    image={itemService.getImagePreview(item.item_image).href}
                    item={item}
                    onAddItem={handleAddItem}
                    onRemoveItem={handleRemoveItem}
                  />
                ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[80vh] w-screen">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-100 animate-spin fill-green"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllMenu;
