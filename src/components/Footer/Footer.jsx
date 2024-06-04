import React from "react";
import { FooterLogo } from "../index.js";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Menu", slug: "/menu" },
    { name: "Reservations", slug: "/reservation" },
  ];
  return (
    <footer className="bg-green/70">
      <div
        className="xl:px-[100px] sm:px-[44px] px-[24px] xl:pt-[60px] xl:pb-5 sm:pt-[40px] sm:pb-4
      pt-[20px] pb-3 flex flex-col justify-center "
      >
        <div className="flex flex-wrap items-start xl:mb-10 sm:mb-7 mb-5 xl:gap-1.5 sm:gap-8 gap-5">
          <div className="xl:w-[140px] sm:w-[120px] w-24">
            <FooterLogo className="w-full" />
          </div>
          <div className="w-1/6"></div>
          <ul className="xl:w-1/6 flex flex-col items-start xl:gap-1 gap-[2px] mb-3 sm:mb-0">
            <h3 className="font-markazi capitalize font-semibold text-bluishWhite/90 xl:text-[21px] text-xl tracking-wide mb-1">
              Navigation
            </h3>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-bluishWhite/50"
                    : "text-bluishWhite/80 hover:text-yellow hover:underline"
                } font-karla font-medium xl:text-base sm:text-[15px] text-sm duration-300`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="xl:w-1/6 flex flex-col item-start xl:gap-1 gap-1 mb-3 sm:mb-0">
            <h3 className="font-markazi capitalize font-semibold text-bluishWhite/90 xl:text-[21px] text-xl tracking-wide mb-1">
              Opening Hours
            </h3>
            <p className="font-karla font-medium text-bluishWhite/80 xl:text-base sm:text-[15px] text-sm">
              Monday to Saturday
            </p>
            <p className="font-karla font-medium text-bluishWhite/80 xl:text-base sm:text-[15px] text-sm">
              9.00 AM - 10.00 PM
            </p>
            <p className="font-karla font-medium text-bluishWhite/80 xl:text-base sm:text-[15px] text-sm">
              Sunday - Closed
            </p>
          </div>
          <div className=" xl:w-1/6 flex flex-col item-start xl:gap-1 gap-1 mb-3 sm:mb-0">
            <h3 className="font-markazi capitalize font-semibold text-bluishWhite/90 xl:text-[21px] text-xl tracking-wide mb-1">
              contact us
            </h3>
            <p
              className="font-karla font-medium text-bluishWhite/80 hover:text-yellow hover:underline
             xl:text-base sm:text-[15px] text-sm"
            >
              <a className="inline-block" href="mailTo:littlelemon@email.com">
                littlelemon@email.com
              </a>
            </p>
            <p
              className="font-karla font-medium hover:text-yellow hover:underline text-bluishWhite/80
             xl:text-base sm:text-[15px] text-sm"
            >
              <a className="inline-block" href="tel:+1 (312) 555-1234">
                +1 (312) 555-1234
              </a>
            </p>
          </div>
          <div className="xl:w-1/6 flex flex-col item-start xl:gap-1 gap-1 mb-3 sm:mb-0">
            <h3 className="font-markazi capitalize font-semibold text-bluishWhite/90 xl:text-[21px] text-xl tracking-wide mb-1">
              address
            </h3>
            <p className="font-karla font-medium text-bluishWhite/80 xl:text-base sm:text-[15px] text-sm">
              439 N Wells St.Chicago, IL 60654
            </p>
          </div>
        </div>
        <div className="flex items-center mx-auto gap-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-bluishWhite hover:text-yellow xl:text-xl sm:text-lg text-base" />
          </a>
          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-bluishWhite hover:text-yellow xl:text-xl sm:text-lg text-base" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-bluishWhite hover:text-yellow xl:text-xl sm:text-lg text-base" />
          </a>
        </div>
        <div className="xl:mt-16 sm:mt-12 mt-8">
          <p className="font-karla font-medium text-bluishWhite/40 xl:text-lg sm:text-[17px] text-base">
            © 2017 Restaurants. All Right Reserved For Little Lemon &{" "}
            <a
              href="https://github.com/harry713j"
              target="_blank"
              rel="noopener noreferrer"
              className="underline italic text-orange"
            >
              Harry
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
