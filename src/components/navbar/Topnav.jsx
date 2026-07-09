import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

import { useT } from "../../i18n/useT";

const Topnav = () => {
  const t = useT().topnav;

  return (
    <div className="bg-[#004d2a] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-2
          py-2
          sm:py-0
          sm:h-10
        "
        >
          {/* Left Content */}
          <div
            className="
            text-[11px]
            sm:text-xs
            md:text-sm
            font-medium
            text-center
            sm:text-left
          "
          >
            {t.tagline}
          </div>

          {/* Right Content */}
          <div
            className="
            flex
            items-center
            gap-3
            sm:gap-4
            md:gap-6
            flex-wrap
            justify-center
          "
          >
            {/* Email */}
            <div className="flex items-center gap-2">
  <HiOutlineMail className="text-[#00d26a] w-4 h-4 flex-shrink-0" />

  <span
    className="
      text-[11px]
      sm:text-xs
      md:text-sm
      leading-none
      flex items-center
    "
  >
    info@environmentwarriors.org
  </span>
</div>

            {/* Divider */}
            <div className="hidden md:block h-4 w-px bg-white/30"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-[#00d26a] transition duration-300"
              >
                <FaInstagram className="text-sm md:text-base" />
              </a>

              <a
                href="#"
                className="hover:text-[#00d26a] transition duration-300"
              >
                <FaXTwitter className="text-sm md:text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
