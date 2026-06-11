import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const Bottomnav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8">
        <div className="h-[72px] md:h-[80px] flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3">

            <img
              src="/logo.png"
              alt="Environment Warriors"
              className="w-[100px] h-[100px] object-contain mt-7"
            />

            <div>
              <h1 className="text-[#0F5132] font-bold uppercase text-[13px] sm:text-[15px] lg:text-[20px] leading-tight">
                Environment Warriors
              </h1>

              <p className="text-[#2F5233] text-[10px] sm:text-[11px] lg:text-[13px]">
                The Guardians of the Green
              </p>
            </div>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium">

            <li className="hover:text-[#0F5132] transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#0F5132] transition cursor-pointer">
              Sanctuaries
            </li>

            <li className="hover:text-[#0F5132] transition cursor-pointer">
              News & Events
            </li>

            <li className="hover:text-[#0F5132] transition cursor-pointer">
              About Us
            </li>

            <li className="hover:text-[#0F5132] transition cursor-pointer">
              Volunteer
            </li>

            <li className="hover:text-[#0F5132] transition cursor-pointer">
              Contact
            </li>

          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Language Button */}
            <button className="border border-gray-300 px-3 py-2 rounded-md text-sm hover:border-[#0F5132] transition flex items-center gap-2">
              <IoLanguage className="w-4 h-4 text-[#0F5132]" />
              हिन्दी
            </button>

            {/* Donate Button */}
            <button className="bg-[#0F5132] hover:bg-[#0c4028] text-white px-4 py-2.5 rounded-md flex items-center gap-2 text-sm transition">
              <FaHeart size={12} />
              <span>Donate Now</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0F5132]"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <HiX size={28} />
            ) : (
              <HiMenu size={28} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t shadow-lg">

          <div className="px-5 py-5 flex flex-col gap-4">

            <a href="#" className="font-medium text-[#0F5132]">
              Home
            </a>

            <a href="#">Sanctuaries</a>

            <a href="#">News & Events</a>

            <a href="#">About Us</a>

            <a href="#">Volunteer</a>

            <a href="#">Contact</a>

            <div className="border-t pt-4 flex flex-col gap-3">

              {/* Language Button */}
              <button className="w-full h-11 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-sm font-medium cursor-pointer">
                <IoLanguage className="w-4 h-4 text-[#0F5132]" />
                <span>हिन्दी</span>
              </button>

              {/* Donate Button */}
              <button className="w-full h-11 bg-[#0F5132] text-white rounded-md flex items-center justify-center gap-2 text-sm font-medium cursor-pointer">
                <FaHeart className="w-4 h-4" />
                <span>Donate Now</span>
              </button>

            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Bottomnav;