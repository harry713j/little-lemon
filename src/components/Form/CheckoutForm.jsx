import React, { useEffect, useState } from "react";
import {
  AddressInput,
  Button,
  CheckoutItems,
  RadioButtonGroupPayOption,
} from "../index.js";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeAllItemsFromCart } from "../../store/features/cart/cartSlice.js";
import { useNavigate } from "react-router-dom";

const payOptions = [
  { label: "Pay on Delivery", value: "pay_on_delivery" },
  { label: "Pay online with Card", value: "pay_online_with_card" },
];

function CheckoutForm() {
  //TODO: integrating stripe api for payment
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [netPrice, setNetPrice] = useState(0);
  const deliveryFee = cart.length ? 10 : 0;

  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, element) => {
      return accumulator + element.quantity * element.price;
    }, 0);

    setNetPrice(totalPrice);
  }, [cart.length, cart]);

  const proceedPay = (data) => {
    const orderDetails = {
      items: [...cart],
      ...data,
      totalPrice: netPrice,
    };
    console.log(orderDetails);
    toast.success("Your order has placed!");
    dispatch(removeAllItemsFromCart());
    setTimeout(() => {
      navigate("/congratulation");
    }, 3000);
  };

  const onError = (error) => {
    console.error(error);
  };

  return (
    <section>
      <div
        className="flex lg:flex-row flex-col items-center  lg:items-start lg:justify-between
        lg:space-y-0 sm:space-y-8 space-y-6 "
      >
        <div className="lg:w-[65%] ">
          <CheckoutItems />
        </div>
        <div className="lg:w-[30%] lg:mx-0 sm:w-4/5 w-full mx-auto">
          <form onSubmit={handleSubmit(proceedPay, onError)}>
            <article
              className="bg-white xl:px-4 xl:py-7 xl:rounded-md rounded 
            shadow sm:py-7 sm:px-5 py-5 px-3.5 mb-[10px] "
            >
              <span className="flex items-center justify-between">
                <h1
                  className="font-markazi font-normal text-black capitalize xl:text-[40px] sm:text-[36px]
                text-[28px]"
                >
                  bill details
                </h1>
              </span>

              <div className="xl:mt-7 sm:mt-6 mt-5">
                <span
                  className="flex items-center justify-between font-karla font-normal text-black 
                xl:text-base xl:mb-[8px] sm:text-base sm:mb-2 text-sm mb-1.5 "
                >
                  <p>Items total</p>
                  <p>{`$${netPrice.toFixed(2)}`}</p>
                </span>
                <span
                  className="flex items-center justify-between font-karla font-normal text-black 
                xl:text-base xl:mb-14 sm:text-base sm:mb-12 text-sm mb-10"
                >
                  <p>Delivery fee</p>
                  <p>{`$${deliveryFee.toFixed(2)}`}</p>
                </span>
                <hr className="w-full h-[2px] bg-black xl:mb-2 sm:mb-1.5 mb-[5px]" />
                <span
                  className="flex items-center justify-between font-karla font-medium text-black 
                xl:text-lg sm:text-[17px] text-base"
                >
                  <p>Total</p>
                  <p>{`$${(netPrice + deliveryFee).toFixed(2)}`}</p>
                </span>
              </div>
            </article>
            <article
              className="bg-white w-full xl:px-4 xl:py-4 xl:rounded-md xl:mb-3 shadow rounded 
            sm:py-5 sm:px-5 sm:mb-2.5 px-3.5 py-4 mb-2"
            >
              <AddressInput
                register={register}
                setValue={setValue}
                errors={errors}
              />
            </article>
            <article
              className="bg-white w-full xl:px-4 xl:py-4 xl:rounded-md xl:mb-3 shadow rounded 
            sm:py-5 sm:px-5 sm:mb-2.5 px-3.5 py-4 mb-2"
            >
              <p
                className="font-karla font-medium text-black capitalize xl:text-xl sm:text-base text-sm
              xl:mb-4 sm:mb-3 mb-2.5"
              >
                choose payment option
              </p>
              <RadioButtonGroupPayOption
                options={payOptions}
                {...register("payOption")}
              />
            </article>
            <Button
              type="submit"
              className="bg-yellow w-full hover:bg-darkYellow xl:mt-6 sm:mt-4 mt-3"
            >
              proceed order
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;
