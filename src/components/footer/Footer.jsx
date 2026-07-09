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
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0F5132] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0F5132] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
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

              <li><a href="#" className="hover:text-white">{f.home}</a></li>
              <li><a href="#" className="hover:text-white">{f.aboutUs}</a></li>
              <li><a href="#" className="hover:text-white">{f.campaigns}</a></li>
              <li><a href="#" className="hover:text-white">{f.events}</a></li>
              <li><a href="#" className="hover:text-white">{f.contact}</a></li>

            </ul>

          </div>

          {/* Sanctuaries */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              {f.sanctuaries}
            </h3>

            <ul className="space-y-3 text-white/70">

              <li>{nav.sanctuaryNames.dudhwa}</li>
              <li>{nav.sanctuaryNames.kishanpur}</li>
              <li>{nav.sanctuaryNames.katarniaghat}</li>
              <li>{nav.sanctuaryNames.pilibhit}</li>

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
                <p>+91 12345 67890</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#4CAF50]" />
                <p>info@environmentwarriors.org</p>
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-white/60 text-sm text-center md:text-left">
              {f.copyright}
            </p>

            <div className="flex gap-6 text-sm text-white/60">

              <a href="#" className="hover:text-white">
                {f.privacyPolicy}
              </a>

              <a href="#" className="hover:text-white">
                {f.terms}
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;