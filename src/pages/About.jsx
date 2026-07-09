import {
  FaLeaf,
  FaTree,
  FaUsers,
  FaGlobe,
  FaPaw,
  FaHandsHelping,
  FaArrowRight,
  FaInfoCircle,
  FaUser,
  FaSchool,
} from "react-icons/fa";

import { useT } from "../i18n/useT";

const valueIcons = [<FaPaw />, <FaTree />, <FaGlobe />, <FaUsers />, <FaHandsHelping />, <FaLeaf />];

const About = () => {
  const t = useT().about;
  const values = t.values.items.map((v, i) => ({ ...v, icon: valueIcons[i] }));

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[450px] md:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
              {t.hero.badge}
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-bold mt-6 leading-tight">
              {t.hero.heading1}
              <br />
              {t.hero.heading2}
              <br />
              {t.hero.heading3}
            </h1>

            <p className="text-white/90 mt-6 max-w-2xl text-lg">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about-story.jpg"
                alt="Our Story"
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <span className="text-[#0F5132] font-semibold uppercase tracking-wider">
                {t.story.eyebrow}
              </span>

              <h2 className="text-4xl font-bold text-[#0F5132] mt-4">
                {t.story.heading}
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {t.story.p1}
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.story.p2}
              </p>

              <div className="mt-6 flex gap-3 bg-[#0F5132]/5 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
                <FaInfoCircle className="text-[#0F5132] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#0F5132]">{t.story.placeholderLabel}</strong>{" "}
                  {t.story.placeholderText}
                </p>
              </div>

              <button className="mt-8 bg-[#0F5132] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#0a3d26] transition">
                {t.story.learnMore}
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0F5132]">
                {t.visionMission.visionTitle}
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {t.visionMission.visionText}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0F5132]">
                {t.visionMission.missionTitle}
              </h3>

              <ul className="mt-5 space-y-3 text-gray-600">
                {t.visionMission.missionItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.values.heading}
            </h2>

            <p className="text-gray-600 mt-4">
              {t.values.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#f8faf8] rounded-3xl p-8 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#0F5132] text-white flex items-center justify-center text-xl">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0F5132] mt-5">
                  {value.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {value.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.team.heading}
            </h2>

            <p className="text-gray-600 mt-4">
              {t.team.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl p-8 text-center shadow-sm border border-dashed border-gray-300"
              >
                <div className="w-24 h-24 rounded-full bg-[#f8faf8] mx-auto flex items-center justify-center text-gray-400">
                  <FaUser className="text-3xl" />
                </div>

                <h4 className="font-bold text-gray-500 mt-5">
                  {t.team.memberPrefix} {n}
                </h4>

                <p className="text-gray-400 text-sm mt-1">
                  {t.team.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adopted Smart School */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F5132]/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-[#0F5132] text-white flex items-center justify-center text-2xl flex-shrink-0">
              <FaSchool />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F5132]">
                {t.school.heading}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {t.school.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#0F5132] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              {t.impact.heading}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {t.impact.stats.map((s) => (
              <div key={s.label}>
                <h3 className="text-5xl font-bold">{s.value}</h3>
                <p className="mt-2 text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0F5132]/80"></div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            {t.cta.heading}
          </h2>

          <p className="text-white/90 mt-5 max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-[#F5C542] text-black px-6 py-3 rounded-xl font-semibold">
              {t.cta.becomeVolunteer}
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold">
              {t.cta.donateNow}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
