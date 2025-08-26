'use client';

import { useState } from 'react';
import {
  LayoutGrid,
  ChevronDown,
  Heart,
  ShoppingCart,
  Globe,
  Menu,
  X,
  Search,
  Phone,
  User,
} from 'lucide-react';
import { IoSearch } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('bangla');

  // Close all dropdowns when the mobile menu is opened
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCategoriesOpen(false);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm font-sans relative z-50">
      {/* Main Desktop/Tablet Navigation Bar */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section: Logo and Search (visible on desktop) */}
        <div className="flex justify-between items-center w-full">
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

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Second Row for Desktop (Category and Language Links) */}
      <div className="hidden md:flex items-center justify-between container mx-auto px-4 py-2">
        {/* Left-aligned links */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 focus:outline-none"
            >
              <LayoutGrid className="h-5 w-5 mr-2" />
              All Categories
              <ChevronDown
                className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${
                  isCategoriesOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Electronics
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Apparel
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Home Goods
                  </a>
                </div>
              </div>
            )}
          </div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Campaign
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Outlets
              </a>
            </li>
          </ul>
        </div>

        {/* Right-aligned icons and language dropdown */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
            >
              <Image
                src={`/images/navbar/bangla.png`}
                alt=""
                width={10}
                height={10}
              />
              English
              <ChevronDown
                className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${
                  isLanguageOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Spanish
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    French
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Wishlist */}
          <a
            href="#"
            className="flex relative text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <div>
              <Heart className="h-6 w-6" />
              <span className="absolute -top-3 -right-3 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold">
                0
              </span>
            </div>
            Wishlist
          </a>

          {/* Cart */}
          <a
            href="#"
            className="flex gap-2 relative text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <div>
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-3 -right-3 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs font-bold">
                0
              </span>
            </div>
            Cart
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-blue-600">Menu</h2>
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <X className="h-7 w-7" />
          </button>
        </div>
        <div className="py-4">
          <ul className="flex flex-col space-y-2 px-4">
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-gray-700">0123456789</span>
            </li>
            <li className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              <span className="text-gray-700">Search...</span>
            </li>
            <li className="border-t pt-2 mt-2">
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Campaign
              </a>
            </li>
            <li>
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Outlets
              </a>
            </li>
            <li className="border-t pt-2 mt-2">
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                All Categories
              </a>
            </li>
            <li className="border-t pt-2 mt-2">
              <a
                onClick={handleMobileMenuToggle}
                href="#"
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                English
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMobileMenuToggle}
        ></div>
      )}
    </nav>
  );
}
