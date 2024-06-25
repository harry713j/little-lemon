import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ItemCarousel, TestimonialCarousel } from "../components";
import pizza from "../assets/pizza.png";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="border border-transparent">
      <article className="absolute w-screen xl:mt-[40px] sm:mt-[28px] mt-[18px] -left-[0px]">
        <div
          className="bg-food bg-cover bg-center relative block z-10 bg-no-repeat before:content-[''] 
        before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-green before:to-green
        before:opacity-70 before:z-[-7]"
        >
          <div className="flex flex-col text-center mx-auto sm:w-1/2 w-2/3 max-[320px]:w-4/5 items-center xl:py-8 sm:py-6 py-4">
            <h1 className="font-markazi font-medium text-yellow xl:text-[60px] sm:text-[44px] text-[30px]">
              Little Lemon
            </h1>
            <p className="font-karla font-medium text-bluishWhite xl:text-lg sm:text-base text-sm">
              We are a family owned Mediterranean restaurant, Little Lemon.
              Focused on traditional recipes served with a modern twist, our
              dishes are bursting with sunshine flavors, just like grandma used
              to make with a playful touch! Come savor the taste of the
              Mediterranean with us.
            </p>
          </div>
        </div>
      </article>
      <article
        className="xl:mt-[380px] xl:mb-[80px] sm:mt-[332px] sm:mb-[60px] mt-[274px] mb-[44px] 
      max-[320px]:mt-[296px]"
      >
        <div className="flex items-center justify-between xl:mb-[40px] sm:mb-[32px] mb-[20px]">
          <h2
            className="font-markazi font-medium text-black capitalize xl:text-[40px] sm:text-[32px] 
          text-[24px]"
          >
            our special items
          </h2>
          <Button
            className="bg-yellow hover:bg-darkYellow max-[320px]:text-sm"
            onClick={() => navigate("/menu")}
          >
            our menu
          </Button>
        </div>
        <span>
          <ItemCarousel />
        </span>
      </article>
      <article className="absolute w-screen -left-[0px]">
        <div className="bg-green/50 flex justify-center xl:py-10 sm:py-8 py-6 ">
          <div className="xl:w-[980px] sm:w-[820px] w-[540px] justify-center flex items-center">
            <figure className="xl:w-1/3 xl:mr-7 sm:w-1/3 w-1/3 sm:mr-4 mr-2.5 max-[320px]:hidden ">
              <img src={pizza} alt="pizza" className="w-full" />
            </figure>
            <div
              className="xl:w-[45%] xl:ml-7 sm:w-[47%] sm:ml-4 w-[46%] ml-2.5 max-[320px]:w-4/5 
            max-[320px]:ml-0 "
            >
              <h2
                className="font-markazi font-medium text-yellow xl:text-[48px] sm:text-[34px] text-[26px]
              "
              >
                Welcome to Little Lemon
              </h2>
              <p
                className="font-karla font-medium text-bluishWhite xl:text-lg xl:leading-[23px] 
              sm:text-base sm:leading-[21px] text-sm leading-[19px] mt-2 sm:mt-0"
              >
                Come and experience the warm ambiance, delicious flavors, and
                unparalleled service at Little Lemon. We look forward to
                welcoming you and making your dining experience unforgettable.
              </p>
              <span className="flex sm:items-center xl:mt-10 sm:mt-8 mt-5 flex-col sm:flex-row gap-2.5 sm:gap-0">
                <Button
                  className="bg-yellow hover:bg-darkYellow xl:mr-5 sm:mr-3.5 "
                  onClick={() => navigate("/menu")}
                >
                  menu
                </Button>
                <Button
                  className="bg-transparent duration-1000 border border-yellow text-yellow hover:bg-yellow
                 hover:text-bluishWhite xl:ml-5 sm:ml-3.5
                "
                  onClick={() => navigate("/reservation")}
                >
                  reserve table
                </Button>
              </span>
            </div>
          </div>
        </div>
      </article>
      <article className="xl:mt-[540px] xl:mb-[180px] sm:mt-[460px] sm:mb-[140px] mt-[380px] mb-[100px]">
        <h2
          className="font-markazi font-medium text-black capitalize text-center xl:text-[40px] 
        sm:text-[32px] text-[24px]"
        >
          What Customers Say About Us
        </h2>
        <div className="xl:mt-[40px] sm:mt-[32px] mt-5">
          <TestimonialCarousel />
        </div>
      </article>
    </section>
  );
}

export default Home;
