import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { useT } from "../i18n/useT";

const Contact = () => {
  const t = useT().contact;

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[360px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            {t.hero.badge}
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            {t.hero.heading}
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-24 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold text-[#0F5132]">
                {t.info.heading}
              </h2>

              <a
                href={`tel:${t.info.phone.replace(/\s+/g, "")}`}
                className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-[#0F5132]/10 text-[#0F5132] flex items-center justify-center flex-shrink-0 text-lg">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-semibold text-[#0F5132]">{t.info.phoneLabel}</p>
                  <p className="text-gray-600 mt-1">{t.info.phone}</p>
                  <p className="text-gray-400 text-xs mt-1">{t.info.phoneNote}</p>
                </div>
              </a>

              <a
                href={`mailto:${t.info.email}`}
                className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-[#0F5132]/10 text-[#0F5132] flex items-center justify-center flex-shrink-0 text-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-[#0F5132]">{t.info.emailLabel}</p>
                  <p className="text-gray-600 mt-1">{t.info.email}</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#0F5132]">
                  {t.form.heading}
                </h2>

                <form className="mt-6 space-y-5">
                  <input
                    type="text"
                    placeholder={t.form.fullName}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    type="email"
                    placeholder={t.form.email}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder={t.form.subject}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <textarea
                    rows="5"
                    placeholder={t.form.message}
                    className="w-full border rounded-xl px-4 py-3"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#0F5132] text-white py-4 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                  >
                    {t.form.submit}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
