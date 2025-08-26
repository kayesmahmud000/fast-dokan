'use client';

import React, { useState } from 'react';

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
    <div className="relative h-screen bg-gray-100">
      {/* Example content to demonstrate the nav bar's fixed position */}
      <main className="p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4 text-gray-700">
          This is where your page content goes. The navigation bar below is
          fixed to the bottom of the screen.
        </p>
        <div className="h-[1000px]"></div> {/* Spacer to show scrolling */}
      </main>

      {/* The main navigation bar container */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-xl rounded-t-3xl">
        <div className="relative flex items-center justify-around h-20 px-4">
          {/* Home Nav Item */}
          <NavItem
            name="Home"
            icon={
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            }
            isActive={activeLink === 'home'}
            onClick={() => setActiveLink('home')}
          />

          {/* Category Nav Item */}
          <NavItem
            name="Category"
            icon={
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3a1 1 0 01.78.437l3 4a1 1 0 010 1.126l-3 4A1 1 0 0110 13V3zm-2 0v10a1 1 0 01-.78-.437l-3-4a1 1 0 010-1.126l3-4A1 1 0 018 3z" />
              </svg>
            }
            isActive={activeLink === 'category'}
            onClick={() => setActiveLink('category')}
          />

          {/* Floating 'Shop' button */}
          <div className="flex-grow w-20 h-20 -mt-8 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full shadow-2xl cursor-pointer">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3a1 1 0 00-1 1v2H7a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V4a1 1 0 00-1-1zm6 5a1 1 0 00-1-1H5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1V8z" />
              </svg>
            </div>
          </div>

          {/* Cart Nav Item with badge */}
          <div className="relative flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300">
            <NavItem
              name="Cart"
              icon={
                <div className="relative w-full h-full">
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 1a1 1 0 000 2h1a1 1 0 00.938-.667l.799-2.396A1 1 0 017 1h7a1 1 0 01.938.667l.799 2.396A1 1 0 0016 4h1a1 1 0 000-2h-2V1a1 1 0 00-2 0v1H7V1a1 1 0 00-2 0v1H3a1 1 0 000 2h.938a3 3 0 01-.815 1.583L.185 8.167A1 1 0 000 9h2v1h14v-1h2a1 1 0 00-.815-1.833L17.062 4H3zM5 10a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1v-4a1 1 0 00-1-1H5z" />
                    <path
                      fillRule="evenodd"
                      d="M10 14a1 1 0 001-1v-2a1 1 0 10-2 0v2a1 1 0 001 1z"
                      clipRule="evenodd"
                    />
                  </svg>
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
