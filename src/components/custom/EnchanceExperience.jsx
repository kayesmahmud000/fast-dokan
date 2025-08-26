import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EnchanceExperience = () => {
  return (
    <section className=" px-4 md:px-10">
      <div className="baseContainer grid gap-5 md:grid-cols-2 pt-5 md:pt-0 bg-black">
        <div className="flex flex-col gap-6 justify-center items-start ">
          <p className="tex-xs text-green-400">Categories</p>
          <h4 className="text-white font-semibold text-2xl md:text-4xl">
            Enhance Your <br /> Music Experience
          </h4>
          <div>
            <div className="flex gap-1">
              <span className="flex flex-col size-15 text-center p-3 text-xs rounded-full bg-white text-black">
                <span>23</span> Hours
              </span>
              <span className="flex flex-col size-15 text-center p-3 text-xs rounded-full bg-white text-black">
                <span>05</span> Days
              </span>
              <span className="flex flex-col size-15 text-center p-3 text-xs rounded-full bg-white text-black">
                <span>59</span> Minutes
              </span>
              <span className="flex flex-col size-15 text-center p-3 text-xs rounded-full bg-white text-black">
                <span>35</span> Seconds
              </span>
            </div>
          </div>
          <Link
            href={''}
            className="text-white py-1.5 rounded px-4 bg-green-500 w-fit"
          >
            Buy Now!
          </Link>
        </div>
        <div className="flex items-end justify-center pt-4 pb-8 md:w-4/5">
          <Image
            src={'/images/enchance/box.png'}
            alt={'sound box'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100vw', height: 'auto' }}
            className="w-full h-28 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default EnchanceExperience;
