"use client";
import React, { useState } from "react";

export default function ProductHomePage() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Product Card Container */}
      <div className="relative w-80 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        {/* Discount and Favorite Badges */}
        <div className="absolute top-0 left-0 p-3 z-10 flex w-full justify-between items-center">
          {/* Discount Badge */}
          <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
            10%
          </span>
          {/* Favorite Button (Heart Icon) */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product Image */}
        <img
          src="https://placehold.co/600x400/8080ff/ffffff?text=Product+Image"
          alt="IMILAB C20 Security Camera"
          className="w-full h-auto object-cover rounded-t-3xl"
        />

        {/* Product Details Section */}
        <div className="p-5">
          {/* Product Name */}
          <h2 className="text-xl font-semibold text-gray-800">IMILAB C20</h2>
          <h3 className="text-sm font-medium text-gray-500">Security Camera</h3>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 fill-current mr-1"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-600 font-medium">4.9</span>
          </div>

          {/* Prices and Stock */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">৳ 1,199</span>
              <span className="text-sm text-gray-400 line-through">
                ৳ 1,399
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                Stock-13
              </span>
            </div>

            {/* Add to Cart Button */}
            <button className="p-3 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors duration-200 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
