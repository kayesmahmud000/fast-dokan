"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const product = {
  name: "iPhone 16e",
  rating: 4.9,
  tagline: "Fresh picks — just landed in our store.",
  features: [
    { label: "Model", value: "iPhone 16e" },
    { label: "Display", value: '6.1" Super Retina XDR OLED Display' },
    {
      label: "Processor",
      value: "A18 Bionic Chip (3nm), Storage: 128GB, 256GB",
    },
    {
      label: "Camera",
      value: "48MP Fusion: 26 mm, ƒ/1.6 aperture, 12MP ƒ/1.9 aperture Selfie",
    },
    {
      label: "Features",
      value: "Type-C, (up to 480Mb/s), Face ID, Dual ambient light sensors",
    },
  ],
  colors: [
    {
      name: "Pink",
      hex: "#FFC0CB",
      mainImage: "/images/productsdetails/iphone_blue.png",
    },
    {
      name: "Black",
      hex: "#202020",
      mainImage: "/images/productsdetails/iphone_black.png",
    },

    {
      name: "White",
      hex: "#EAEAEA",
      mainImage: "/images/productsdetails/iphone_pink.png",
    },
    {
      name: "Blue",
      hex: "#B297E5",
      mainImage: "/images/productsdetails/iphone_white.png",
    },
  ],
  originalPrice: "1,399",
  discount: "10%",
  currentPrice: "1,199",
  stock: 13,
};

export default function ProductDetailsHero() {
  const [selectedColor, setSelectedColor] = useState(product.colors[3]);

  return (
    <div className="py-10">
      <div className="baseContainer">
        <nav className="text-gray-500 text-sm mb-8 md:mb-16">
          <ul className="flex space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/products" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="#" className="hover:underline">
                iPhone
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col md:flex-row md:items-start md:space-x-2">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-4/5 aspect-[1] rounded-3xl overflow-hidden bg-white">
              <Image
                src={selectedColor.mainImage}
                alt={`${product.name} in ${selectedColor.name}`}
                fill
                className="w-full h-full object-cover transition-opacity rounded-3xl duration-300 ease-in-out p-4 border border-gray-200"
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-3 mt-6 w-full md:ml-25">
              {product.colors
                .filter((e) => e.name != selectedColor.name)
                .map((color) => (
                  <div
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`
                    w-16 h-16 sm:w-20 sm:h-20
                    overflow-hidden
                    cursor-pointer rounded-xl
                    ring-2 ring-offset-2 transition-all duration-200 ease-in-out relative
                    ${
                      selectedColor.name === color.name
                        ? "ring-blue-600 shadow-lg"
                        : "ring-transparent opacity-80 hover:ring-neutral-300"
                    }
                  `}
                  >
                    <Image
                      src={color.mainImage}
                      alt={`${product.name} in ${color.name}`}
                      fill
                      className="w-full h-full object-cover p-1 rounded-xl border border-gray-200"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 text-neutral-500">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={`star${i}`} className="fill-amber-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
              </div>
            </div>

            <p className="mt-2 text-md">{product.tagline}</p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <div className="text-neutral-600">
                {product.features.map((feature, index) => (
                  <li
                    key={`productFeatures${index}`}
                    className="text-xl list-disc"
                  >
                    <span className="font-semibold w-24">{feature.label}:</span>
                    <span className="ml-2">{feature.value}</span>
                  </li>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-base font-semibold">Color:</p>
              <div className="flex space-x-2 mt-3">
                {product.colors
                  .filter((e) => e.name != selectedColor.name)
                  .map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`
                      w-fit border-gray-200 h-10 rounded-2xl px-2 py-.5 transition-all duration-200
                      ${
                        selectedColor.name === color.name
                          ? "border-neutral-900 ring-neutral-900 ring-offset-2 border-2"
                          : "border-bordergray-100 border"
                      }
                    `}
                      aria-label={`Select ${color.name} color`}
                    >
                      {color.name}
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <span className="text-base font-semibold text-[#28BA3E] bg-[rgba(40,186,62,0.1)] px-4 py-1.5 rounded-full">
                Stock-{product.stock}
              </span>
              <button className="flex items-center space-x-2 text-neutral-500 hover:text-red-500 transition-colors px-4 py-2 border border-gray-200 rounded-full">
                <span className="text-sm font-medium">Favorite</span>
                <div>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 017.5 3c2.45 0 4.24 1.56 5.5 3.39C13.26 4.56 15.05 3 17.5 3a5.5 5.5 0 015.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <span className="text-2xl text-neutral-400 line-through">
                  ৳{product.originalPrice}
                </span>
                <span className="ml-2 text-sm text-blue-500 bg-blue-50 p-1 font-semibold">
                  -{product.discount}
                </span>
                <p className="text-4xl font-extrabold text-neutral-900 mt-2">
                  ৳{product.currentPrice}
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="flex justify-center items-center gap-2 cursor-pointer px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Add To Cart
                  <GiShoppingCart className="text-xl" />
                </button>
                <button className="flex justify-center items-center gap-2 cursor-pointer px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200">
                  Buy Now
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
