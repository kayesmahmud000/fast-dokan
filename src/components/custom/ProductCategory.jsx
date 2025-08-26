import Link from 'next/link';
import React from 'react';
import EmblaCarousel from '../common/EmblaCarousel';

const ProductCategory = () => {
  const products = [
    {
      name: 'camra',
      src: '/images/productcategory/camra.png',
      items: 8,
    },
    {
      name: 'car',
      src: '/images/productcategory/car.png',
      items: 7,
    },
    {
      name: 'chair',
      src: '/images/productcategory/chair.png',
      items: 3,
    },
    {
      name: 'console',
      src: '/images/productcategory/console.png',
      items: 7,
    },
    {
      name: 'console2',
      src: '/images/productcategory/console2.png',
      items: 9,
    },
    {
      name: 'graphic_card',
      src: '/images/productcategory/graphic_card.png',
      items: 3,
    },
    {
      name: 'keyboard',
      src: '/images/productcategory/keyboard.png',
      items: 4,
    },
    {
      name: 'laptop',
      src: '/images/productcategory/laptpo.png',
      items: 7,
    },
    {
      name: 'monitor',
      src: '/images/productcategory/monitor.png',
      items: 10,
    },
  ];

  return (
    <section className="py-5">
      <div className="baseContainer flex flex-col gap-1 md:gap-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold">
              Popular Categories
            </h2>
            <p className="font-light text-sm">
              Find your perfect product in just one click.
            </p>
          </div>
          <Link
            href={'#'}
            className="underline text-blue-500 hover:text-blue-600"
          >
            View All
          </Link>
        </div>
        <div>
          <EmblaCarousel slides={products} />
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
