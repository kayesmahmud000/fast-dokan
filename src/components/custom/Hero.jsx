import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="py-5">
      <div className="baseContainer flex flex-col gap-1 md:gap-2">
        <div className="flex gap-1 md:gap-3">
          <div className="relative w-[60%] aspect-video">
            <Image
              src="/images/hero/hero_watch.jpg"
              alt="Hero Watch"
              fill
              style={{ objectFit: 'cover' }}
              className=" rounded-lg"
            />
          </div>
          <div className="relative w-[40%] aspect-video">
            <Image
              src="/images/hero/hero_black_friday.jpg"
              alt="Hero Watch"
              fill
              style={{ objectFit: 'cover' }}
              className=" rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-1 md:gap-3">
          <div className="relative w-[50%] h-[80px] md:h-[200px]">
            <Image
              src="/images/hero/hero_ear_bud.jpg"
              alt="Hero Watch"
              fill
              style={{ objectFit: 'cover' }}
              className=" rounded-lg"
            />
          </div>
          <div className="relative w-[50%] h-[80px] md:h-[200px]">
            <Image
              src="/images/hero/hero_headphone.jpg"
              alt="Hero Watch"
              fill
              style={{ objectFit: 'cover' }}
              className=" rounded-lg "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-2 py-5">
          <div className="bg-blue-100/60 flex justify-center items-center py-5 px-2 gap-2 rounded-lg">
            <div className="p-3 bg-white w-fit rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-blue-500 text-3xl"
                height=".8em"
                width=".8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm font-semibold">Official Warranty</h5>
              <p className="text-xs">1 Year Brand Warranty</p>
            </div>
          </div>

          <div className="bg-green-100/60 flex justify-center items-center py-5 px-2 gap-2 rounded-lg">
            <div className="p-3 bg-white w-fit rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 540 512"
                className="text-green-500 text-3xl"
                height=".7em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm font-semibold">Fast Delivery</h5>
              <p className="text-xs">Get your order in 48 hours</p>
            </div>
          </div>

          <div className="bg-yellow-100/60 flex justify-center items-center py-5 px-2 gap-2 rounded-lg">
            <div className="p-3 bg-white w-fit rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-yellow-500 text-3xl"
                height=".8em"
                width=".8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm font-semibold">Easy Return</h5>
              <p className="text-xs">7 Days Return Policy</p>
            </div>
          </div>

          <div className="bg-purple-100/60 flex justify-center items-center py-5 px-2 gap-2 rounded-lg">
            <div className="p-3 bg-white w-fit rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-purple-500 text-3xl"
                height=".8em"
                width=".8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm font-semibold">Secure Payment</h5>
              <p className="text-xs">SSL Secured Checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
