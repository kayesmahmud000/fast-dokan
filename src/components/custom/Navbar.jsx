import Image from 'next/image';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="py-2">
      <div className="baseContainer">
        <div className="flex justify-between items-center ">
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
            <div className="grid text-center place-items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
