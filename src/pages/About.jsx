import React from "react";
import ownerImage_1 from "../assets/owner-1.jpg";
import ownerImage_2 from "../assets/owner-2.jpg";
import ownerImage_3 from "../assets/owner-3.jpg";
import chef_1 from "../assets/chef-1.jpg";
import chef_2 from "../assets/chef-2.jpg";
import chef_3 from "../assets/chef-3.jpg";
import { ChefProfile, RestaurantDetails } from "../components/index.js";

const chefDetails = [
  { name: "Devon Lane", image: chef_1, position: "head chef" },
  { name: "Jerome Bell", image: chef_2, position: "sous chef" },
  {
    name: "Annette Black",
    image: chef_3,
    position: "sous chef",
  },
];

function About() {
  return (
    <section className="border border-transparent">
      <article className="absolute w-screen xl:mt-[40px] sm:mt-[28px] mt-[18px] -left-[0px]">
        <div
          className="bg-restaurant_interior bg-cover bg-center relative block z-10 bg-no-repeat before:content-[''] 
        before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-green before:to-green
        before:opacity-70 before:z-[-7]"
        >
          <div
            className="flex flex-col text-center mx-auto xl:w-1/2 sm:w-3/5 w-2/3 max-[320px]:w-4/5 items-center 
            xl:py-8 sm:py-6 py-4"
          >
            <h1
              className="font-markazi font-medium text-yellow xl:text-[60px] sm:text-[44px] text-[30px]
            max-[320px]:text-[28px]"
            >
              Welcome to Little Lemon!
            </h1>
            <p className="font-karla font-medium text-bluishWhite xl:text-lg sm:text-base text-sm">
              Little lemon is a charming neighborhood bistro founded by two
              friends Mario and Adrian that serves simple food. The restaurants
              features a locally sourced menu with daily specials.
            </p>
          </div>
        </div>
      </article>
      <article
        className="flex flex-col xl:space-y-14 xl:mt-[420px] xl:mb-[80px] sm:mt-[362px] sm:mb-[60px] mt-[300px] 
        mb-[44px] sm:space-y-12 space-y-8
      max-[320px]:mt-[296px]"
      >
        <div className="w-full flex flex-col-reverse gap-4 sm:gap-0 sm:justify-between sm:flex-row ">
          <span className="sm:w-2/5">
            <h2
              className="font-markazi font-medium text-coral capitalize xl:text-[40px] sm:text-[32px] 
            text-[24px] "
            >
              Our Story
            </h2>
            <p
              className="font-karla font-normal text-black xl:text-lg xl:leading-[23px] 
              sm:text-base sm:leading-[21px] text-sm leading-[19px] mt-2 sm:mt-0"
            >
              Mario and Adrian’s friendship began in culinary school, where they
              bonded over their love for simple, delicious meals made from
              fresh, local ingredients. After years of dreaming and planning,
              they decided to bring their vision to life in the heart of our
              community. With a shared passion for good food and great company,
              they opened Little Lemon to create a warm and welcoming space for
              everyone to enjoy.
            </p>
          </span>
          <figure className="sm:w-2/5 rounded shadow">
            <img
              src={ownerImage_1}
              className="w-full h-full xl:h-auto object-cover rounded"
              alt="owner-1"
            />
          </figure>
        </div>
        <div className="w-full flex flex-col gap-4 sm:gap-0 sm:justify-between sm:flex-row">
          <figure className="sm:w-2/5 rounded shadow">
            <img
              src={ownerImage_2}
              className="w-full h-full xl:h-auto object-cover rounded"
              alt="owner-2"
            />
          </figure>
          <span className="sm:w-2/5">
            <h2
              className="font-markazi font-medium text-coral capitalize xl:text-[40px] sm:text-[32px] 
            text-[24px] "
            >
              Our Mission
            </h2>
            <p
              className="font-karla font-normal text-black xl:text-lg xl:leading-[23px] 
              sm:text-base sm:leading-[21px] text-sm leading-[19px] mt-2 sm:mt-0"
            >
              At Little Lemon, we believe in the beauty of simplicity. Our
              mission is to offer high-quality, locally sourced food that brings
              people together. We take pride in our daily specials, which
              showcase the best seasonal produce and flavors.
            </p>
          </span>
        </div>
        <div className="w-full flex flex-col-reverse gap-4 sm:gap-0 sm:justify-between sm:flex-row">
          <span className="sm:w-2/5">
            <h2
              className="font-markazi font-medium text-coral capitalize xl:text-[40px] sm:text-[32px] 
            text-[24px] "
            >
              Our Menu
            </h2>
            <p
              className="font-karla font-normal text-black xl:text-lg xl:leading-[23px] 
              sm:text-base sm:leading-[21px] text-sm leading-[19px] mt-2 sm:mt-0"
            >
              Step into Little Lemon and feel at home in our cozy bistro.
              Whether you’re here for a casual lunch, a family dinner, or a
              special celebration, our friendly staff and inviting atmosphere
              make every meal memorable. Our menu features a variety of simple,
              flavorful dishes made with ingredients sourced from local farms
              and producers. From our signature salads to our hearty mains, each
              dish is crafted with care and passion.
            </p>
          </span>
          <figure className="sm:w-2/5 rounded shadow">
            <img
              src={ownerImage_3}
              className="w-full h-full xl:h-auto object-cover rounded"
              alt="owner-3"
            />
          </figure>
        </div>
      </article>
      <article className="xl:mb-[100px] sm:mb-[80px] mb-[60px]">
        <h2
          className="font-markazi font-medium text-black capitalize xl:text-[40px] sm:text-[32px] 
            text-[24px] xl:mb-[44px] sm:mb-[36px] mb-[28px] "
        >
          our excellent chefs
        </h2>
        <span className="flex items-center justify-between">
          {chefDetails.map((chef) => (
            <ChefProfile
              key={chef.name}
              name={chef.name}
              chefImage={chef.image}
              position={chef.position}
            />
          ))}
        </span>
      </article>
      <article className="xl:mb-[180px] sm:mb-[140px] mb-[100px]">
        <div>
          <h2
            className="font-markazi font-medium text-black capitalize xl:text-[40px] sm:text-[32px] 
            text-[24px]"
          >
            visit us
          </h2>
          <span>
            <RestaurantDetails />
          </span>
        </div>
      </article>
    </section>
  );
}

export default About;
