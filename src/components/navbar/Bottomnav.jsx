import { useState } from "react";
import { Link } from "react-router-dom";

import { HiMenu, HiX } from "react-icons/hi";
import { FaHeart, FaChevronDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

import { useT } from "../../i18n/useT";
import { useLanguage } from "../../context/useLanguage";

const Bottomnav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [mobileExploreDropdown, setMobileExploreDropdown] = useState(false);

  const t = useT().nav;
  const { toggleLanguage } = useLanguage();

  return (
    <nav className="bg-white shadow-sm relative z-50">

      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8">

        <div className="h-[72px] md:h-[80px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3"
          >
            <img
              src="/logo.png"
              alt="Environment Warriors"
              className="w-[100px] h-[100px] object-contain mt-7"
            />

            <div>
              <h1 className="text-[#0F5132] font-bold uppercase text-[13px] sm:text-[15px] lg:text-[20px] leading-tight">
                {t.brandName}
              </h1>

              <p className="text-[#2F5233] text-[10px] sm:text-[11px] lg:text-[13px]">
                {t.brandTagline}
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium">

            <Link
              to="/"
              className="hover:text-[#0F5132] transition"
            >
              {t.home}
            </Link>

            {/* Sanctuaries Dropdown */}
            <li className="relative group list-none">

              <div className="flex items-center gap-2 cursor-pointer hover:text-[#0F5132] transition">
                {t.sanctuaries}
                <FaChevronDown className="text-xs" />
              </div>

              <div
                className="
                  absolute
                  left-0
                  top-full
                  mt-4
                  w-72
                  bg-white
                  rounded-xl
                  shadow-xl
                  border
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-300
                  z-50
                "
              >

                <Link
                  to="/sanctuaries/dudhwa"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.sanctuaryNames.dudhwa}
                </Link>

                <Link
                  to="/sanctuaries/kishanpur"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.sanctuaryNames.kishanpur}
                </Link>

                <Link
                  to="/sanctuaries/katarniaghat"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.sanctuaryNames.katarniaghat}
                </Link>

                <Link
                  to="/sanctuaries/pilibhit"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.sanctuaryNames.pilibhit}
                </Link>

              </div>

            </li>

            <Link
              to="/events"
              className="hover:text-[#0F5132] transition"
            >
              {t.newsEvents}
            </Link>

            {/* Explore Dropdown */}
            <li className="relative group list-none">

              <div className="flex items-center gap-2 cursor-pointer hover:text-[#0F5132] transition">
                {t.explore}
                <FaChevronDown className="text-xs" />
              </div>

              <div
                className="
                  absolute
                  left-0
                  top-full
                  mt-4
                  w-56
                  bg-white
                  rounded-xl
                  shadow-xl
                  border
                  opacity-0
                  invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all
                  duration-300
                  z-50
                "
              >

                <Link
                  to="/stories"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.stories}
                </Link>

                <Link
                  to="/quiz"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.quiz}
                </Link>

                <Link
                  to="/games"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.games}
                </Link>

                <Link
                  to="/tracker"
                  className="block px-5 py-3 hover:bg-gray-50"
                >
                  {t.tracker}
                </Link>

              </div>

            </li>

            <Link
              to="/about"
              className="hover:text-[#0F5132] transition"
            >
              {t.aboutUs}
            </Link>

            <Link
              to="/volunteer"
              className="hover:text-[#0F5132] transition"
            >
              {t.volunteer}
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#0F5132] transition"
            >
              {t.contact}
            </Link>

          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            <button
              onClick={toggleLanguage}
              className="
                border
                border-gray-300
                px-3
                py-2
                rounded-md
                text-sm
                flex
                items-center
                gap-2
                hover:border-[#0F5132]
              "
            >
              <IoLanguage className="text-[#0F5132]" />
              {t.language}
            </button>

            <button
              className="
                bg-[#0F5132]
                hover:bg-[#0c4028]
                text-white
                px-4
                py-2.5
                rounded-md
                flex
                items-center
                gap-2
                text-sm
                transition
              "
            >
              <FaHeart size={12} />
              {t.donateNow}
            </button>

          </div>

          {/* Mobile Toggle */}
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

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="font-medium text-[#0F5132]"
            >
              {t.home}
            </Link>

            {/* Mobile Dropdown */}
            <div>

              <button
                onClick={() =>
                  setMobileDropdown(!mobileDropdown)
                }
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  font-medium
                "
              >
                {t.sanctuaries}

                <FaChevronDown
                  className={`transition ${
                    mobileDropdown
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {mobileDropdown && (
                <div className="ml-4 mt-3 flex flex-col gap-3">

                  <Link
                    to="/sanctuaries/dudhwa"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.sanctuaryNames.dudhwa}
                  </Link>

                  <Link
                    to="/sanctuaries/kishanpur"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.sanctuaryNames.kishanpur}
                  </Link>

                  <Link
                    to="/sanctuaries/katarniaghat"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.sanctuaryNames.katarniaghat}
                  </Link>

                  <Link
                    to="/sanctuaries/pilibhit"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.sanctuaryNames.pilibhit}
                  </Link>

                </div>
              )}

            </div>

            <Link
              to="/events"
              onClick={() => setMobileMenu(false)}
            >
              {t.newsEvents}
            </Link>

            {/* Mobile Explore Dropdown */}
            <div>

              <button
                onClick={() =>
                  setMobileExploreDropdown(!mobileExploreDropdown)
                }
                className="
                  flex
                  items-center
                  justify-between
                  w-full
                  font-medium
                "
              >
                {t.explore}

                <FaChevronDown
                  className={`transition ${
                    mobileExploreDropdown
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {mobileExploreDropdown && (
                <div className="ml-4 mt-3 flex flex-col gap-3">

                  <Link
                    to="/stories"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.stories}
                  </Link>

                  <Link
                    to="/quiz"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.quiz}
                  </Link>

                  <Link
                    to="/games"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.games}
                  </Link>

                  <Link
                    to="/tracker"
                    onClick={() =>
                      setMobileMenu(false)
                    }
                  >
                    {t.tracker}
                  </Link>

                </div>
              )}

            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
            >
              {t.aboutUs}
            </Link>

            <Link
              to="/volunteer"
              onClick={() => setMobileMenu(false)}
            >
              {t.volunteer}
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
            >
              {t.contact}
            </Link>

            <div className="border-t pt-4 flex flex-col gap-3">

              <button
                onClick={toggleLanguage}
                className="w-full h-11 border border-gray-300 rounded-md flex items-center justify-center gap-2 text-sm font-medium"
              >
                <IoLanguage className="text-[#0F5132]" />
                {t.language}
              </button>

              <button className="w-full h-11 bg-[#0F5132] text-white rounded-md flex items-center justify-center gap-2 text-sm font-medium">
                <FaHeart />
                {t.donateNow}
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Bottomnav;
