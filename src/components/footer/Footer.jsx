import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { useT } from "../../i18n/useT";

const Footer = () => {
  const t = useT();
  const nav = t.nav;
  const f = t.footer;

  return (
    <footer className="bg-[#0B2E1F] text-white rounded-t-4xl">

      {/* Top Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <img
                src="/logo.png"
                alt="Environment Warriors"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h3 className="font-bold text-xl">
                  {nav.brandName}
                </h3>

                <p className="text-sm text-white/70">
                  {nav.brandTagline}
                </p>
              </div>

            </div>

            <p className="text-white/70 leading-relaxed text-sm">
              {f.brandDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="https://facebook.com/environmentwarriors01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0F5132] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com/environmentwarriors01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0F5132] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/environmen34587"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0F5132] transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0F5132] transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              {f.quickLinks}
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link to="/" className="hover:text-white">{f.home}</Link></li>
              <li><Link to="/about" className="hover:text-white">{f.aboutUs}</Link></li>
              <li><Link to="/activities" className="hover:text-white">{f.events}</Link></li>
              <li><Link to="/contact" className="hover:text-white">{f.contact}</Link></li>

            </ul>

          </div>

          {/* Sanctuaries */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              {f.sanctuaries}
            </h3>

            <ul className="space-y-3 text-white/70">

              <li><Link to="/sanctuaries/dudhwa" className="hover:text-white">{nav.sanctuaryNames.dudhwa}</Link></li>
              <li><Link to="/sanctuaries/kishanpur" className="hover:text-white">{nav.sanctuaryNames.kishanpur}</Link></li>
              <li><Link to="/sanctuaries/katarniaghat" className="hover:text-white">{nav.sanctuaryNames.katarniaghat}</Link></li>
              <li><Link to="/sanctuaries/pilibhit" className="hover:text-white">{nav.sanctuaryNames.pilibhit}</Link></li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              {f.contactUs}
            </h3>

            <div className="space-y-4 text-white/70">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#4CAF50]" />
                <p>
                  {f.address}
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-[#4CAF50]" />
                <a href="tel:+918287078724" className="hover:text-white">+91 82870 78724</a>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#4CAF50]" />
                <a href="mailto:info@environmentwarriors.org" className="hover:text-white">info@environmentwarriors.org</a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>

              <h3 className="text-xl font-semibold">
                {f.newsletterTitle}
              </h3>

              <p className="text-white/70 text-sm mt-1">
                {f.newsletterDesc}
              </p>

            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">

              <input
                type="email"
                placeholder={f.emailPlaceholder}
                className="
                  px-5
                  py-3
                  rounded-xl
                  bg-white/10
                  border
                  border-white/10
                  text-white
                  outline-none
                  w-full
                  sm:w-[300px]
                "
              />

              <button
                className="
                  bg-[#4CAF50]
                  hover:bg-[#3f9d44]
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  transition
                "
              >
                {f.subscribe}
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 ">

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex items-center justify-center">

            <p className="text-white/60 text-sm text-center">
              {f.copyright}
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;