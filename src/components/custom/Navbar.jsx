'use client';

import Image from 'next/image';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isUserClicked, setIsUserClicked] = React.useState(false);

  // const lan

  return (
    <nav className="py-2 shadow-md">
      <div className="max-w-7xl mx-auto w-full p-4">
        {/* desktop */}
        <div className="flex justify-between items-center">
          <div className="flex w-1/2">
            <Image
              src="/images/navbar/logo.png"
              alt="logo"
              width={60}
              height={60}
              className=""
            />
            <form className="relative flex justify-center items-center overflow-hidden w-full">
              <input
                type="text"
                id="search"
                required
                placeholder="Search..."
                className="border border-blue-500 relative w-full rounded p-1 placeholder:text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 bg-blue-500 p-2 text-white font-bold cursor-pointer"
              >
                <IoSearch />
              </button>
            </form>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-lg" />
              <div className="grid">
                <span className="text-[.6rem]">Call Us</span>
                <span className="text-xs font-semibold">0123456789</span>
              </div>
            </div>
            <div className="flex flex-col text-center text-blue-500 relative">
              <div
                className="grid place-items-center select-none cursor-pointer"
                onClick={() => setIsUserClicked((prev) => !prev)}
              >
                <svg
                  stroke="currentColor"
                  fill="var(--primary-color)"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                <span className="text-xs">Login</span>
              </div>
              {isUserClicked && (
                <div
                  id="userDropdown"
                  className={`transition-all absolute top-10 right-0 z-10 bg-white divide-y rounded-lg shadow-sm w-44 overflow-hidden `}
                >
                  <ul
                    className="border border-gray-300 text-sm text-gray-700 "
                    aria-labelledby="avatarButton"
                  >
                    <div className="border-b border-gray-200 hover:bg-gray-200 w-full py-2 px-2">
                      <Link href={'/retailer-register'} className="">
                        Retailer Register
                      </Link>
                    </div>
                    <div className="border-b border-gray-200 hover:bg-gray-200 w-full py-2 px-2">
                      <Link href={'/customer-register'} className="">
                        Customer Register
                      </Link>
                    </div>
                    <div className="border-b border-gray-200 hover:bg-gray-200 w-full py-2 px-2">
                      <Link href={'/login'} className="">
                        Login
                      </Link>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex w-1/2"></div>
        </div>

        {/* mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
