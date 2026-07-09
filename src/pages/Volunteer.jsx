import {
  FaLeaf,
  FaUsers,
  FaTree,
  FaPaw,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import { useT } from "../i18n/useT";

const whyIcons = [<FaLeaf className="text-[#0F5132] text-4xl" />, <FaUsers className="text-[#0F5132] text-4xl" />, <FaTree className="text-[#0F5132] text-4xl" />];
const opportunityIcons = [<FaTree />, <FaPaw />, <FaUsers />];

const Volunteer = () => {
  const t = useT().volunteer;

  return (
    <div>

      {/* Hero Section */}
      <section
        className="relative h-[450px] md:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/volunteer-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
              {t.hero.badge}
            </span>

            <h1 className="text-white text-5xl md:text-6xl font-bold mt-6">
              {t.hero.heading}
            </h1>

            <p className="text-white/90 mt-5 max-w-2xl text-lg">
              {t.hero.description}
            </p>

          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.why.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {t.why.items.map((item, index) => (
              <div key={item.title} className="bg-[#f8faf8] p-8 rounded-3xl">
                {whyIcons[index]}

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.opportunities.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {t.opportunities.items.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="text-[#0F5132] text-4xl">
                  {opportunityIcons[index]}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">

          <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
            {t.benefits.heading}
          </h2>

          <div className="space-y-5">

            {t.benefits.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-[#0F5132]" />

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-[800px] mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#0F5132] text-center">
              {t.form.heading}
            </h2>

            <form className="mt-8 space-y-5">

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
                type="tel"
                placeholder={t.form.phone}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder={t.form.aadhar}
                maxLength={12}
                pattern="[0-9]{12}"
                inputMode="numeric"
                title={t.form.aadharTitle}
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                rows="3"
                placeholder={t.form.address}
                className="w-full border rounded-xl px-4 py-3"
              ></textarea>

              <input
                type="text"
                placeholder={t.form.social}
                className="w-full border rounded-xl px-4 py-3"
              />

              <select className="w-full border rounded-xl px-4 py-3">
                <option>{t.form.selectInterest}</option>
                <option>{t.form.interestTree}</option>
                <option>{t.form.interestWildlife}</option>
                <option>{t.form.interestCommunity}</option>
              </select>

              <textarea
                rows="5"
                placeholder={t.form.why}
                className="w-full border rounded-xl px-4 py-3"
              ></textarea>

              <p className="text-xs text-gray-500">
                {t.form.privacyNote}
              </p>

              <button
                type="submit"
                className="
                  w-full
                  bg-[#0F5132]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                {t.form.submit}
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/volunteer-cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0F5132]/80"></div>

        <div className="relative z-10 text-center px-4">

          <h2 className="text-white text-5xl font-bold">
            {t.cta.heading}
          </h2>

          <p className="text-white/90 mt-5">
            {t.cta.description}
          </p>

          <button
            className="
              mt-8
              bg-[#F5C542]
              px-6
              py-3
              rounded-xl
              font-semibold
              inline-flex
              items-center
              gap-2
            "
          >
            {t.cta.becomeVolunteer}
            <FaArrowRight />
          </button>

        </div>
      </section>

    </div>
  );
};

export default Volunteer;
