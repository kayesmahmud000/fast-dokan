"use client";
import { useState } from "react";

export default function ProductDetailsContents() {
  const productContent = [
    {
      category: "Specification",
      // title: "Product Specifications",
      // content:
      //   "Detailed technical specifications, including dimensions, weight, materials, and power requirements. This section is crucial for users who need precise information about the product's physical and technical properties.",
    },
    {
      category: "Description",
      // title: "Full Product Description",
      // content:
      //   "A comprehensive overview of the product's features, benefits, and use cases. This helps potential customers understand the value and purpose of the item, highlighting its main selling points.",
    },
    {
      category: "Reviews",
      // title: "Customer Reviews",
      // content:
      //   "A collection of user-submitted reviews and ratings. This feedback is essential for building trust and helping new customers make informed purchasing decisions based on the experiences of others.",
    },
    {
      category: "Questions",
      // title: "Questions & Answers",
      // content:
      //   "A section dedicated to common questions from customers and their corresponding answers. This addresses frequent inquiries, reduces the need for direct support, and clarifies any ambiguities about the product.",
    },
    {
      category: "Video",
      // title: "Product Video",
      // content:
      //   "An embedded video demonstrating the product in action. This can be a tutorial, an unboxing, or a promotional clip that provides a dynamic and engaging view of the product's features.",
    },
  ];

  const [filter, setFilter] = useState(null);

  const handleFilter = (category) => {
    setFilter(filter === category ? null : category);
  };

  const buttonClass = (category) =>
    `px-6 py-1.5 border border-gray-300 rounded-full text-sm font-medium transition-all duration-200 
    ${
      filter === category
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-white text-gray-700 hover:bg-gray-100"
    }`;

  console.log(filter);

  const categories = productContent.map((item) => item.category);

  return (
    <section className="py-10">
      <div className="baseContainer">
        {/* Filter buttons container */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={buttonClass(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-2xl md:text-[2.2rem]">
            Description
          </h1>
          <div className="p-4 border-gray-300 border rounded-2xl flex flex-col gap-3">
            <div className="grid gap-3">
              <h2 className="text-blue-500 text-xl font-semibold md:text-2xl">
                iPhone 16e
              </h2>
              <p className="text-sm pb-1 border-b border-gray-300">
                Introducing Apple's iPhone 16e, the Newest Member of the
                Game-Changer Lineup It is powered by the fast and efficient A18
                chip and also includes Apple&apos;s first C1 modem for efficient
                5G connectivity. The iPhone 16e features sleek black and white
                matte colorways with a staple flat aluminum mid-frame and glass
                back. The Super Retina XDR OLED display size is 6.1 inches, with
                a resolution of 2532x1170 pixels, HDR, and a peak brightness of
                1200 nits.The 48MP Fusion camera features optical image
                stabilization and Hybrid Focus Pixels, as well as a 12MP 2x
                telephoto option, and the 12MP front camera has autofocus and
                automated picture stabilization. The iphone 16e has a battery
                life of up to 26 hours for video and 90 hours for audio, and it
                supports Type-C fast charging and wireless charging. Apple
                Intelligence capabilities include Writing Tools, Notification
                Summary, Image Playground, Genmoji, and Visual Intelligence,
                which includes text summarization, translation, and phone number
                and email address identification. With 5G connectivity, Wi-Fi 6,
                Bluetooth 5.3, and NFC support, the iPhone 16e is an innovative
                yet affordable smartphone update option.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-blue-500 text-xl font-semibold md:text-2xl">
                New Bionic A18 Chip
              </h2>
              <p className="text-sm pb-1 border-b border-gray-300">
                The A18 Bionic chip found in the iPhone 16e is a significant
                advancement in mobile processing technology. Built on a
                cutting-edge 3-nanometer technology, the A18 Bionic chip
                improves performance and power efficiency, making it one of
                Apple's most powerful chips to date. It has a 6-core CPU with
                two high-performance cores and four high-efficiency cores,
                resulting in seamless multitasking and unsurpassed
                responsiveness. The processor also includes a 5-core GPU, which
                ensures amazing graphics and smooth gaming for even the most
                demanding mobile games. The A18 Bionic processor also has a
                next-generation 16-core Neural Engine, which can do up to 15.8
                trillion operations per second, allowing for advanced machine
                learning activities and intelligent features. With increased
                energy efficiency,
              </p>
            </div>
          </div>
        </div>
        {/* {productContent
          .filter((item) => filter === null || item.category === filter)
          .map((item) => (
            <div
              key={item.category}
              className="bg-white p-8 rounded-2xl shadow-xl w-full mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))} */}
      </div>
    </section>
  );
}
