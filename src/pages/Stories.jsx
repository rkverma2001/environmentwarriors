import { FaHourglassHalf } from "react-icons/fa";

import { useT } from "../i18n/useT";

const Stories = () => {
  const tt = useT().stories;

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[420px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            {tt.hero.badge}
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            {tt.hero.heading}
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            {tt.hero.description}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <img
            src="/tigers/tiger-nose-to-nose.jpg"
            alt=""
            className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
          />

          <div className="w-14 h-14 rounded-full bg-[#0F5132]/10 text-[#0F5132] flex items-center justify-center mx-auto mt-6 text-xl">
            <FaHourglassHalf />
          </div>

          <h2 className="text-3xl font-bold text-[#0F5132] mt-4">
            {tt.comingSoon.heading}
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {tt.comingSoon.message}
          </p>

        </div>
      </section>
    </div>
  );
};

export default Stories;
