"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

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
      <div className="baseContainer grid gap-25">
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
              <p className="text-sm md:text-md pb-4 border-b border-gray-300">
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
              <p className="text-sm md:text-md pb-4 border-b border-gray-300">
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

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl md:text-[2.2rem]">Reviews</h1>
            <Link href={""} className="text-gray-500 hover:underline">
              View All
            </Link>
          </div>
          <div className="p-4 border-gray-300 border rounded-2xl flex flex-col gap-3">
            <ReviewCard />
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

const ReviewCard = () => {
  const reviews = [
    {
      id: 1,
      name: "Jenny Wilson",
      title: "Freelance React Developer",
      avatar: "/images/productsdetails/jamal.png",
      rating: 5,
      comment:
        "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    },
    {
      id: 2,
      name: "Jane Cooper",
      title: "Freelance React Developer",
      avatar: "/images/productsdetails/kamal.png",
      rating: 5,
      comment:
        "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    },
    {
      id: 3,
      name: "Darlene Robertson",
      title: "Freelance React Developer",
      avatar: "/images/productsdetails/kuddus.png",
      rating: 5,
      comment:
        "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    },
  ];

  const StarIcon = ({ fill }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.412c1.165.087 1.647 1.54 
      .746 2.373l-4.117 3.52 1.255 5.27c.271 1.136-.964 2.033-1.96 1.425L12 18.336l-4.502 2.722c-.996.608-2.231-.288-1.96-1.425l1.255-5.27-4.117-3.52c-.901-.833-.419-2.285.746-2.373l5.404-.412 2.082-5.007z"
        clipRule="evenodd"
      />
    </svg>
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon key={i} fill={i < rating ? "#F59E0B" : "#D1D5DB"} />
      );
    }
    return stars;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                width="48"
                height="48"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {review.name}
              </h3>
              <p className="text-sm text-gray-700">{review.title}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            {renderStars(review.rating)}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            &ldquo;{review.comment}&rdquo;
          </p>
          <div className="flex items-center text-gray-700 text-sm space-x-4 mt-auto">
            <Link
              href={""}
              className="flex items-center justify-center space-x-1 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <AiOutlineLike className="text-lg" />
              <span>Helpful!</span>
            </Link>
            <Link
              href={""}
              className="flex items-center justify-center space-x-1 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <AiOutlineDislike className="text-lg" />
              <span>Not Helpful!</span>
            </Link>
            <Link
              href={""}
              className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <span>Reply</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
