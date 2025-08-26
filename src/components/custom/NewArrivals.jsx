import React from 'react';

/**
 * A React component that displays a list of products using a JSX loop.
 * The component is styled with Tailwind CSS to match the original image.
 */
const NewArrivals = () => {
  // Hardcoded product data extracted from the user-provided image.
  // This array will be used to dynamically generate the product cards.
  const newProducts = [
    {
      product_name: 'Amazfit Bip 5 Smartwatch',
      image_url: '/images/productcategory/camra.png',
      rating: 4.9,
      discount_percentage: 15,
      old_price: '৳ 1399',
      new_price: '৳ 1199',
    },
    {
      product_name: 'Logitech MX Anywhere 3 Mouse',
      image_url: '/images/productcategory/console2.png',
      rating: 4.9,
      discount_percentage: 15,
      old_price: '৳ 1399',
      new_price: '৳ 1199',
    },
    {
      product_name: 'IMILAB C20 Security Camera',
      image_url: '/images/productcategory/chair.png',
      rating: 4.9,
      discount_percentage: 15,
      old_price: '৳ 1399',
      new_price: '৳ 1199',
    },
    {
      product_name: 'Haylou X1 Neo TWS Earbuds',
      image_url: '/images/productcategory/car.png',
      rating: 4.9,
      discount_percentage: 15,
      old_price: '৳ 1399',
      new_price: '৳ 1199',
    },
    {
      product_name: 'Apple AirPods Pro 2',
      image_url: '/images/productcategory/camra.png',
      rating: 4.8,
      discount_percentage: 15,
      old_price: '৳ 2299',
      new_price: '৳ 1999',
    },
    {
      product_name: 'Samsung Galaxy Watch 6',
      image_url: '/images/productcategory/console2.png',
      rating: 4.7,
      discount_percentage: 15,
      old_price: '৳ 1899',
      new_price: '৳ 1599',
    },
  ];
  return (
    <section className="py-15">
      <div className="baseContainer flex flex-col gap-1 md:gap-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold">New Arrivals</h2>
            <p className="font-light text-sm">
              Fresh picks — just landed in our store.
            </p>
          </div>
          {/* Note: The 'Link' component was replaced with a standard 'a' tag for compatibility. */}
          <a href={'#'} className="underline text-blue-500 hover:text-blue-600">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {newProducts.map((product) => (
            <div
              key={product.product_name}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col p-4"
            >
              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                {product.discount_percentage}%
              </div>

              {/* Like button */}
              <div className="absolute top-4 left-4 text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>

              {/* Product Image */}
              <div className="flex-shrink-0 flex items-center justify-center pt-4 pb-8">
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  className="w-full h-28 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {product.product_name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 mr-1">&#9733;</span>
                  <span className="text-sm font-medium text-gray-600">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Price and Cart button */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <div>
                  <p className="text-sm text-gray-500 line-through">
                    {product.old_price}
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    {product.new_price}
                  </p>
                </div>
                <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
