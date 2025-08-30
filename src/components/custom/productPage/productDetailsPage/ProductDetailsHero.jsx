"use client";

import Link from "next/link";
import { useState } from "react";

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

export default function ProductDetailsHero() {
  const [quantity, setQuantity] = useState(2);
  const [selectedColor, setSelectedColor] = useState("White");

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <>
      <div className="font-sans min-h-screen bg-white text-gray-800 p-8 md:p-16">
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

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
          {/* Image and product info */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="https://placehold.co/400x400/808080/fff?text=iPhone+16e"
              alt="iPhone 16e"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Product details and quantity */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                iPhone 16e
              </h1>
              <p className="text-gray-500 mb-4">
                Fresh picks — just landed in our store.
              </p>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Color:</span>
                <button
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === "White"
                      ? "border-blue-500 bg-blue-50 text-blue-800"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                  onClick={() => setSelectedColor("White")}
                >
                  White
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-8 md:mt-0">
              <span className="text-3xl font-bold">৳ 1,199</span>
              <div className="flex items-center space-x-2 border border-gray-300 rounded-full overflow-hidden">
                <button
                  onClick={handleDecrease}
                  className="p-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  <MinusIcon />
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="p-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
