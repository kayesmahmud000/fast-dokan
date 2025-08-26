import Link from 'next/link';
import React from 'react';
import EmblaCarousel from '../common/EmblaCarousel';

const ProductCategory = () => {
  const products = [
    {
      name: 'camra.png',
      src: '/images/productcategory/camra',
      items: 8,
    },
    {
      name: 'car.png',
      src: '/images/productcategory/car',
      items: 7,
    },
    {
      name: 'chair.png',
      src: '/images/productcategory/chair',
      items: 3,
    },
    {
      name: 'console.png',
      src: '/images/productcategory/console',
      items: 7,
    },
    {
      name: 'console2.png',
      src: '/images/productcategory/console2',
      items: 9,
    },
    {
      name: 'graphic_card.png',
      src: '/images/productcategory/graphic_card',
      items: 3,
    },
    {
      name: 'keyboard.png',
      src: '/images/productcategory/keyboard',
      items: 4,
    },
    {
      name: 'laptpo.png',
      src: '/images/productcategory/laptpo',
      items: 7,
    },
    {
      name: 'monitor.png',
      src: '/images/productcategory/monitor',
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
