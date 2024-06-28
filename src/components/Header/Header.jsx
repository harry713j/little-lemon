import React, { useState } from "react";
import { Cart, LogButton, MainLogo } from "../index";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Menu", slug: "/menu" },
    { name: "Reservations", slug: "/reservation" },
  ];
  return (
    <header className="relative bg-inherit xl:px-[100px] md:px-[44px] px-[24px] my-2">
      <nav className="flex items-center justify-between ">
        <div className=" ">
          <Link to="/">
            <MainLogo className="xl:w-[200px] sm:w-[160px] w-[120px] " />
          </Link>
        </div>
        <div className="md:flex items-center hidden justify-end">
          <ul className="flex items-center xl:gap-11 md:gap-5 md:mr-4 lg:mr-8 lg:gap-8 ">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-green"
                        : "text-green/40 hover:text-yellow"
                    } font-markazi font-normal xl:text-3xl md:text-[22px] text-base `
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center  xl:gap-8 md:gap-4 ">
            <LogButton />
            <Link to="/checkout">
              <Cart />
            </Link>
          </div>
        </div>
        <div
          className={`md:hidden justify-self-end flex items-center ${
            isMenuOpen ? "bg-slate-300" : "bg-transparent"
          } rounded-t py-2.5 px-3`}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[28px] text-green duration-500 transform transition-all"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <nav
          className={`${
            isMenuOpen ? "top-full" : "-top-full"
          } absolute right-0 md:hidden w-full flex flex-col items-center bg-slate-300 
        rounded-md z-50  shadow pb-3 transition-all duration-500 overflow-hidden`}
        >
          <ul className="flex flex-col w-full items-center">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="border-b border-slate-400/70 text-center w-full py-2 group hover:bg-slate-600
                 cursor-pointer"
              >
                <NavLink
                  to={item.slug}
                  className={({ isActive }) => `${
                    isActive
                      ? "text-darkYellow"
                      : "text-green group-hover:text-bluishWhite"
                  }
                  font-markazi font-normal text-xl`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="w-full flex items-center justify-center mt-4 gap-8">
            <LogButton />
            <Link to="/checkout" onClick={() => setIsMenuOpen(false)}>
              <Cart />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
