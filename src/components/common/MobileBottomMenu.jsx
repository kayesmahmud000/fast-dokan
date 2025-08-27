"use client";

import React, { useState } from "react";
import { FaGift, FaHome, FaWindows } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";

export default function MobileBottomMenu() {
  const [activeLink, setActiveLink] = useState("category");
  const NavItem = ({ name, icon, isActive, onClick }) => (
    <div
      className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 ${
        isActive ? "text-blue-800" : "text-gray-500 hover:text-orange-400"
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 mb-1">{icon}</div>
      <span className="text-xs font-semibold select-none">{name}</span>
    </div>
  );

  return (
    <div className="relative mt-10 pt-10">
      {/* Example content to demonstrate the nav bar's fixed position */}

      {/* The main navigation bar container */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-xl ">
        <div className="relative flex items-center justify-around h-20 px-4">
          {/* Home Nav Item */}
          <NavItem
            name="Home"
            icon={<FaHome className="text-2xl text-blue-500" />}
            isActive={activeLink === "home"}
            onClick={() => setActiveLink("home")}
          />

          {/* Category Nav Item */}
          <NavItem
            name="Category"
            icon={<FaWindows className="text-2xl text-blue-500" />}
            isActive={activeLink === "category"}
            onClick={() => setActiveLink("category")}
          />

          {/* Floating 'Shop' button */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex-grow w-16 h-16 -mt-8 flex items-center justify-center bg-white p-1 rounded-full">
              <div className="relative flex items-center justify-center w-16 h-16  rounded-full shadow-2xl cursor-pointer p-4">
                <FaGift className="size-10 text-blue-500" />
              </div>
            </div>
            <span className="text-blue-800">shop</span>
          </div>

          {/* Cart Nav Item with badge */}
          <div className="relative flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300">
            <NavItem
              name="Cart"
              icon={
                <div className="relative w-full h-full">
                  {/* Cart badge with count */}
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full -mt-2 -mr-2">
                    0
                  </span>
                  <FaCartShopping className="text-blue-500 text-2xl" />
                </div>
              }
              isActive={activeLink === "cart"}
              onClick={() => setActiveLink("cart")}
            />
          </div>

          {/* Profile Nav Item */}
          <NavItem
            name="Profile"
            icon={<SlPeople className="text-2xl text-blue-500" />}
            isActive={activeLink === "profile"}
            onClick={() => setActiveLink("profile")}
          />
        </div>
      </div>
    </div>
  );
}
