import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaTree,
  FaUsers,
  FaGlobe,
  FaPaw,
  FaHandsHelping,
  FaUser,
  FaSchool,
  FaTimes,
  FaHourglassHalf,
} from "react-icons/fa";

import { useT } from "../i18n/useT";

const valueIcons = [<FaPaw />, <FaTree />, <FaGlobe />, <FaUsers />, <FaHandsHelping />, <FaLeaf />];

const About = () => {
  const t = useT().about;
  const donateModal = useT().nav.donateModal;
  const values = t.values.items.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:min-h-[550px]">

            <div className="flex-1 lg:py-16">
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

            <div className="flex-shrink-0 text-center">
              <img
                src="/rajeshwar-singh-portrait.jpg"
                alt="Dr. Rajeshwar Singh"
                className="w-56 sm:w-72 lg:w-[340px] h-auto object-contain drop-shadow-2xl"
              />

              <p className="text-red-500 font-extrabold text-xl uppercase tracking-wide mt-3">
                {t.hero.photoName}
              </p>

              <p className="text-white/90 font-medium mt-1">
                {t.hero.photoTitle}
              </p>
            </div>

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
                {t.story.p2Before}
                <strong className="bg-[#F5C542]/40 text-[#0F5132] font-semibold px-1 rounded">{t.story.p2Highlight}</strong>
                {t.story.p2After}
              </p>
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
            {t.team.members.map((name) => (
              <div
                key={name}
                className="bg-[#f8faf8] rounded-3xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-sm mx-auto flex items-center justify-center text-[#0F5132]">
                  <FaUser className="text-3xl" />
                </div>

                <h4 className="font-bold text-[#0F5132] mt-5">
                  {name}
                </h4>
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
          backgroundImage: "url('/tigers/tiger-leaping.jpg')",
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
            <Link
              to="/volunteer"
              className="bg-[#F5C542] text-black px-6 py-3 rounded-xl font-semibold"
            >
              {t.cta.becomeVolunteer}
            </Link>

            <button
              onClick={() => setDonateModalOpen(true)}
              className="border border-white text-white px-6 py-3 rounded-xl font-semibold"
            >
              {t.cta.donateNow}
            </button>
          </div>
        </div>
      </section>

      {/* Donate Coming Soon Modal */}
      {donateModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setDonateModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-[420px] w-full text-center relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDonateModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label={donateModal.close}
            >
              <FaTimes />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#0F5132]/10 text-[#0F5132] flex items-center justify-center mx-auto text-xl">
              <FaHourglassHalf />
            </div>

            <h3 className="text-2xl font-bold text-[#0F5132] mt-5">
              {donateModal.title}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {donateModal.message}
            </p>

            <button
              onClick={() => setDonateModalOpen(false)}
              className="mt-6 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
            >
              {donateModal.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
