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
import { FaApple, FaAndroid } from 'react-icons/fa'; // Example icons
import Link from 'next/link';

export default function Navbar() {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('bangla');

  const [click, setClick] = useState(false);
  // Close all dropdowns when the mobile menu is opened
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCategoriesOpen(false);
    setIsLanguageOpen(false);
  };

  const handelclick = () => {
    setClick((prev) => !prev);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const [language, setLanguage] = useState('en');

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    setShowDropdown(false); // Close dropdown after selection
  };

  const selectedLanguage = {
    label: language === 'en' ? 'English' : 'বাংলা',
    imgSrc:
      language === 'en'
        ? '/images/navbar/english.png'
        : '/images/navbar/bangla.jpg',
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top Navigation */}
        <nav className="w-full shadow bg-white px-3 sm:px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center gap-4 flex-1">
              {/* logo for mobile and desktop  */}
              <Link href="/" data-discover="true">
                <Image
                  src="/images/navbar/logo.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className=""
                ></Image>
              </Link>

              {/* Search Bar - Desktop */}
              <div className="hidden sm:flex flex-1 max-w-full sm:max-w-xl relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-blue-500 pl-2 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded text-black"
                />
                <button className="absolute right-0 top-0 h-full px-3 bg-blue-500 rounded-r flex items-center justify-center">
                  <svg
                    className="text-white text-lg"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3">
              {/* Call Us  desktop*/}
              <div className="hidden sm:flex items-center gap-1 text-gray-700">
                <svg
                  className="text-lg"
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <div>
                  <p className="text-[10px] text-gray-500">Call Us</p>
                  <p className="text-xs font-semibold">0123456789</p>
                </div>
              </div>

              {/* Wishlist Icon - Mobile */}
              <div className="sm:hidden ">
                <Link
                  className="flex flex-col items-center gap-0.5 px-2 py-1 text-blue-500 rounded hover:text-blue-600 relative"
                  href="/wishlist"
                  data-discover="true"
                >
                  <div className="relative">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      0
                    </span>
                  </div>
                  <span className="text-xs">Wishlist</span>
                </Link>
              </div>

              {/* Login Icon */}
              <div className="relative">
                <button className="flex flex-col items-center px-2 py-1 text-blue-500">
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
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Secondary Navigation */}
        <div className="w-full shadow-md bg-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 -mt-2">
            {/* Left: Categories and Links */}
            <div className="flex items-center gap-6">
              {/* All Categories */}
              <div className="relative hidden md:block">
                <button
                  onClick={handelclick}
                  className="flex items-center gap-2 font-medium text-blue-500 hover:text-blue-600"
                >
                  <svg
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    fill="currentColor"
                  >
                    <path d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path>
                  </svg>
                  <span>All Categories</span>
                  {click ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      className="transition-transform rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      className="transition-transform "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                  )}
                </button>
                <div
                  className={`${
                    click ? 'flex' : 'hidden'
                  } absolute bg-white shadow-md rounded-md mt-2 w-64 z-50 max-h-80 overflow-y-auto`}
                >
                  <ul className="flex flex-col text-sm text-blue-500">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Rod
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Cement
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Tin Sheet
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Stone &amp; Sand
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Hardware
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Grocery
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Cosmetics
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Mobile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Electric
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Electronics
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Furniture
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Motorcycle
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Garments
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Fish Feed
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Poultry Feed
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Cattle Feed
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Ceramic
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Tiles
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Tire
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Lubricant
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Bicycle
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Glass
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Housing
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Land Development
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Expatriate Network
                    </li>
                  </ul>
                </div>
              </div>

              {/* Menu Links */}
              <div className="hidden md:flex items-center gap-6 ml-8">
                <Link
                  href="/"
                  className="text-blue-500 font-semibold"
                  data-discover="true"
                >
                  Home
                </Link>
                <Link
                  href="/campaign"
                  className="text-blue-500 hover:text-blue-600"
                  data-discover="true"
                >
                  Campaign
                </Link>
                <Link
                  href="/trending"
                  className="text-blue-500 hover:text-blue-600"
                  data-discover="true"
                >
                  Trending
                </Link>
                <Link
                  href="/brands"
                  className="text-blue-500 hover:text-blue-600"
                  data-discover="true"
                >
                  Brands
                </Link>
                <Link
                  href="/outlets"
                  className="text-blue-500 hover:text-blue-600"
                  data-discover="true"
                >
                  Outlets
                </Link>
              </div>
            </div>

            {/* Right: Language, Wishlist, Cart */}
            <div className="hidden md:flex items-center gap-6 relative">
              {/* Language */}
              <div className="relative inline-block text-left">
                {/* Selected Language Button */}
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="flex items-center gap-2 px-2 py-1 text-blue-500 hover:text-blue-600"
                >
                  <Image
                    src={selectedLanguage.imgSrc}
                    width={100}
                    height={10}
                    alt="flag"
                    className="w-5 h-5 rounded-full"
                  />
                  <span>{selectedLanguage.label}</span>

                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="transition-transform"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                  </svg>
                </button>

                {/* Dropdown Options */}
                {showDropdown && (
                  <div className="absolute z-10 mt-2 w-40 bg-white text-black shadow-md rounded-md">
                    {language !== 'en' && (
                      <button
                        onClick={() => handleSelectLanguage('en')}
                        className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        <Image
                          src="/images/navbar/english.png"
                          width={100}
                          height={10}
                          alt="flag"
                          className="w-5 h-5 rounded-full"
                        />
                        <span>English</span>
                      </button>
                    )}
                    {language !== 'bn' && (
                      <button
                        onClick={() => handleSelectLanguage('bn')}
                        className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        <Image
                          src="/images/navbar/bangla.jpg"
                          width={100}
                          height={10}
                          alt="flag"
                          className="w-5 h-5 rounded-full"
                        />
                        <span>বাংলা</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative flex items-center gap-2 text-blue-500 hover:text-blue-600"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-xl relative"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                </svg>
                <span className="relative">
                  Wishlist
                  <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    0
                  </span>
                </span>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative flex items-center gap-2 text-blue-500 hover:text-blue-600"
                data-discover="true"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-xl relative"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                </svg>
                <span className="relative">
                  Cart
                  <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    0
                  </span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Icon & Search */}
            <div className="md:hidden flex items-center gap-2 w-full">
              <button className="text-2xl text-blue-500 hover:text-blue-600">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </button>
              <div className="flex-1">
                <form>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-1 rounded text-black border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Mobile */}
        <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 -translate-x-full">
          {/* Sidebar Header */}
          {/* <div className="flex items-center justify-between px-4 py-3 border-b">
            <Link
              href="/"
              className="flex-1 flex items-center justify-center"
              data-discover="true"
            >
              <Image
                width={100}
                height={390}
                alt="Logo"
                className="h-10 w-auto object-contain"
                src="/images/navbar/logo.png"
              ></Image>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
