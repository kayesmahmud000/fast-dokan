'use client';

import React, { useState } from 'react';
import { FaGift, FaHome, FaWindows } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

export default function MobileBottomMenu() {
  const [activeLink, setActiveLink] = useState('category');
  const NavItem = ({ name, icon, isActive, onClick }) => (
    <div
      className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 ${
        isActive ? 'text-orange-500' : 'text-gray-500 hover:text-orange-400'
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 mb-1">{icon}</div>
      <span className="text-xs font-semibold select-none">{name}</span>
    </div>
  );

  return (
    <div className="relative h-screen bg-gray-300">
      {/* Example content to demonstrate the nav bar's fixed position */}

      {/* The main navigation bar container */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-orange-50 shadow-xl ">
        <div className="relative flex items-center justify-around h-20 px-4">
          {/* Home Nav Item */}
          <NavItem
            name="Home"
            icon={<FaHome />}
            isActive={activeLink === 'home'}
            onClick={() => setActiveLink('home')}
          />

          {/* Category Nav Item */}
          <NavItem
            name="Category"
            icon={<FaWindows />}
            isActive={activeLink === 'category'}
            onClick={() => setActiveLink('category')}
          />

          {/* Floating 'Shop' button */}
          <div className="flex flex-col justify-center items-center ">
            <div className="flex-grow w-20 h-20 -mt-8 flex items-center justify-center bg-white p-1 rounded-full">
              <div className="relative flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full shadow-2xl cursor-pointer p-4">
                <FaGift className="size-10" />
              </div>
            </div>
            <span className="text-gray-500">shop</span>
          </div>

          {/* Cart Nav Item with badge */}
          <div className="relative flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300">
            <NavItem
              name="Cart"
              icon={
                <div className="relative w-full h-full">
                  <FaCartShopping />
                </div>
              }
              isActive={activeLink === 'cart'}
              onClick={() => setActiveLink('cart')}
            />
            {/* Cart badge with count */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full -mt-2 -mr-2">
              0
            </span>
          </div>

          {/* Profile Nav Item */}
          <NavItem
            name="Profile"
            icon={
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            }
            isActive={activeLink === 'profile'}
            onClick={() => setActiveLink('profile')}
          />
        </div>
      </div>
    </div>
  );
}
