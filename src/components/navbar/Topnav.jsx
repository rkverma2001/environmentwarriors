import { useState } from "react";

import { FaInstagram, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

import { useT } from "../../i18n/useT";

const Topnav = () => {
  const t = useT().topnav;
  const h = t.helpline;
  const [helplineOpen, setHelplineOpen] = useState(false);

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

            {/* Helpline Button */}
            <button
              onClick={() => setHelplineOpen(true)}
              className="
                relative
                flex
                items-center
                gap-1.5
                bg-red-600
                hover:bg-red-700
                text-white
                text-[11px]
                sm:text-xs
                font-bold
                uppercase
                tracking-wide
                px-2.5
                py-1
                rounded-full
                transition
                animate-pulse
              "
            >
              <FaPhoneAlt className="w-3 h-3" />
              {h.badge}
            </button>

            {/* Divider */}
            <div className="hidden md:block h-4 w-px bg-white/30"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/environmentwarriors01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00d26a] transition duration-300"
              >
                <FaInstagram className="text-sm md:text-base" />
              </a>

              <a
                href="https://x.com/environmen34587"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00d26a] transition duration-300"
              >
                <FaXTwitter className="text-sm md:text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Helpline Modal */}
      {helplineOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setHelplineOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-[440px] w-full text-center relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setHelplineOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label={h.close}
            >
              <FaTimes />
            </button>

            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-2xl animate-pulse">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-bold text-[#0F5132] mt-5">
              {h.modalTitle}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed text-sm">
              {h.modalDescription}
            </p>

            <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mt-6">
              {h.numberLabel}
            </p>

            <p className="text-4xl font-extrabold text-red-600 mt-1 animate-pulse">
              {h.number}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              {h.note}
            </p>

            <a
              href={`tel:${h.number.replace(/\s+/g, "")}`}
              className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
            >
              <FaPhoneAlt /> {h.callNow}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topnav;
