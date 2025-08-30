import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-w-7xl w-full mx-auto px-4 md:px-10 py-8 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-8 lg:space-x-16">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            {/* Using a standard img tag for compatibility */}
            <div className="relative mb-4">
              <img
                src="/logo.png"
                alt="Company Logo"
                width={100}
                height={100}
              />
            </div>
            {/* Using inline SVGs for social media icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition-colors duration-300"
              >
                <FaTwitter className="size-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition-colors duration-300"
              >
                <FaFacebook className="size-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="size-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="size-5" />
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-white text-lg mb-2">Location:</h3>
            <address className="not-italic text-sm text-gray-400">
              10/25 (9th Commercial Floor), Eastern Plaza, <br />
              70 Bir Uttam C.R. Datta Road, <br />
              Hatirpool, Dhaka-1205
            </address>
          </div>

          {/* Contacts */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-white text-lg mb-2">Contacts:</h3>
            <ul className="text-sm text-gray-400">
              <li>Mobile: 01234-567890</li>
              <li>Whatsapp: 01234-567890</li>
              <li>Email: info@email.com</li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center text-sm md:text-base space-x-4 mb-4 md:mb-8">
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Support Center
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Delivery Policy
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Warranty
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Return and Refund Policy
          </Link>
          <Link
            href="#"
            className="hover:text-white transition-colors duration-300 text-gray-400"
          >
            Terms and Conditions
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} website name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
