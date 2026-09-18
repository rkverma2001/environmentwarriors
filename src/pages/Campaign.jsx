import { useState } from "react";
import {
  FaVideo,
  FaTrophy,
  FaMedal,
  FaAward,
  FaCheckCircle,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaGavel,
} from "react-icons/fa";

import { useT } from "../i18n/useT";

const Campaign = () => {
  const t = useT().campaign;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    driveLink: "",
    location: "",
    agreeVolunteer: true,
  });

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Best Uncut Videos & Reels of Terai — Contest Entry";
    const body = [
      `Full Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Filmed at: ${form.location}`,
      `Google Drive Link: ${form.driveLink}`,
      `Willing to volunteer: ${form.agreeVolunteer ? "Yes" : "No"}`,
    ].join("\n");

    window.location.href = `mailto:info@environmentwarriors.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const prizeCards = [
    { icon: FaTrophy, ...t.prizes.first, highlight: true },
    { icon: FaMedal, ...t.prizes.second, highlight: false },
    { icon: FaMedal, ...t.prizes.third, highlight: false },
    { icon: FaAward, ...t.prizes.consolation, highlight: false },
  ];

  return (
    <div>

      {/* Hero */}
      <section
        className="relative h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/tigers/tiger-crossing-road.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex flex-col">

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex items-center gap-3">
            <span className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wide">
              {t.collab.label}
            </span>
            <img
              src="/partners/nallas-ark-logo.png"
              alt={t.collab.name}
              className="h-8 w-8 rounded object-cover"
            />
            <span className="text-white font-bold text-sm sm:text-base">
              {t.collab.name}
            </span>
            <span className="text-white/60 text-xs hidden sm:inline">
              — {t.collab.tagline}
            </span>
          </div>

          <div className="flex-1 flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
              {t.hero.badge}
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-bold mt-6">
              {t.hero.heading}
            </h1>

            <p className="text-white/90 mt-5 max-w-2xl text-lg">
              {t.hero.description}
            </p>

            <span className="inline-block bg-[#F5C542] text-[#0F5132] font-semibold px-4 py-2 rounded-full text-sm mt-6">
              {t.hero.deadline}
            </span>

          </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F5132]">
            {t.about.heading}
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed text-lg">
            {t.about.description}
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[900px] mx-auto px-4">

          <h2 className="text-center text-3xl font-bold text-[#0F5132] mb-8">
            {t.categories.heading}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.categories.items.map((cat) => (
              <div
                key={cat}
                className="bg-white border rounded-xl px-4 py-3 text-center font-semibold text-[#0F5132] shadow-sm"
              >
                {cat}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Prizes */}
      <section className="py-16 lg:py-20 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4">

          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F5132] mb-12">
            {t.prizes.heading}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {prizeCards.map((prize, index) => {
              const Icon = prize.icon;

              return (
                <div
                  key={index}
                  className={`rounded-3xl p-8 text-center ${
                    prize.highlight
                      ? "bg-[#0F5132] text-white shadow-xl"
                      : "bg-white border shadow-sm"
                  }`}
                >
                  <Icon
                    className={`text-4xl mx-auto ${
                      prize.highlight ? "text-[#F5C542]" : "text-[#0F5132]"
                    }`}
                  />

                  <h3
                    className={`font-bold mt-5 text-lg ${
                      prize.highlight ? "text-white" : "text-[#0F5132]"
                    }`}
                  >
                    {prize.label}
                  </h3>

                  <p
                    className={`mt-2 text-2xl font-extrabold ${
                      prize.highlight ? "text-[#F5C542]" : "text-gray-800"
                    }`}
                  >
                    {prize.amount}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4">

          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F5132] mb-12">
            {t.rules.heading}
          </h2>

          <div className="space-y-5">

            {t.rules.items.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <FaCheckCircle className="text-[#0F5132] mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 lg:py-20 bg-[#f8faf8]">
        <div className="max-w-[900px] mx-auto px-4">

          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0F5132] mb-12">
            {t.participate.heading}
          </h2>

          <div className="space-y-6">

            {t.participate.steps.map((step, index) => (
              <div key={step} className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-[#0F5132] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed mt-1.5">{step}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Jury */}
      <section className="py-14 bg-[#0B2E1F]">
        <div className="max-w-[700px] mx-auto px-4 text-center">

          <div className="flex items-center justify-center gap-2 text-[#F5C542] font-bold uppercase tracking-wide text-sm">
            <FaGavel />
            {t.jury.heading}
          </div>

          <p className="text-white text-xl md:text-2xl font-bold mt-2">
            {t.jury.names}
          </p>

          <p className="text-white/70 mt-2">
            {t.jury.description}
          </p>

        </div>
      </section>

      {/* Submission Form */}
      <section className="py-20 bg-white">
        <div className="max-w-[700px] mx-auto px-4">

          <div className="bg-[#f8faf8] rounded-3xl shadow-lg p-8 border">

            <h2 className="text-3xl font-bold text-[#0F5132] text-center flex items-center justify-center gap-3">
              <FaVideo />
              {t.form.heading}
            </h2>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

              <input
                type="text"
                required
                placeholder={t.form.fullName}
                value={form.fullName}
                onChange={handleChange("fullName")}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                required
                placeholder={t.form.email}
                value={form.email}
                onChange={handleChange("email")}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                required
                placeholder={t.form.phone}
                value={form.phone}
                onChange={handleChange("phone")}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                required
                placeholder={t.form.location}
                value={form.location}
                onChange={handleChange("location")}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="url"
                required
                placeholder={t.form.driveLink}
                value={form.driveLink}
                onChange={handleChange("driveLink")}
                className="w-full border rounded-xl px-4 py-3"
              />

              <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreeVolunteer}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, agreeVolunteer: e.target.checked }))
                  }
                  className="mt-1 w-4 h-4 accent-[#0F5132] flex-shrink-0"
                />
                {t.form.agreeVolunteer}
              </label>

              <button
                type="submit"
                className="w-full bg-[#0F5132] text-white py-4 rounded-xl font-semibold hover:bg-[#0c4028] transition"
              >
                {t.form.submit}
              </button>

              <p className="text-xs text-gray-500 text-center">
                {t.form.note}
              </p>

            </form>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#0F5132]">
        <div className="max-w-[700px] mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {t.contact.heading}
          </h2>

          <p className="text-white/80 mt-3">
            {t.contact.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">

            <a
              href="mailto:info@environmentwarriors.org"
              className="inline-flex items-center gap-2 bg-white text-[#0F5132] px-5 py-3 rounded-xl font-semibold hover:bg-white/90 transition"
            >
              <FaEnvelope />
              info@environmentwarriors.org
            </a>

            <a
              href="https://wa.me/918287078724"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition"
            >
              <FaWhatsapp />
              {t.contact.whatsapp}
            </a>

            <a
              href="tel:+918287078724"
              className="inline-flex items-center gap-2 border border-white text-white px-5 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              <FaPhoneAlt />
              +91 82870 78724
            </a>

          </div>

          <p className="text-white/60 text-sm mt-8 tracking-wide">
            #TeraiUnfiltered &nbsp; #EnvironmentWarriors &nbsp; #NallasArk
          </p>

        </div>
      </section>

    </div>
  );
};

export default Campaign;
