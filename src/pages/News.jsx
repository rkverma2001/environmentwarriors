import { useState } from "react";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

import { useT } from "../i18n/useT";

const News = () => {
  const t = useT().news;
  const [filter, setFilter] = useState("all");

  const items =
    filter === "all"
      ? t.items
      : t.items.filter((item) => item.regionKey === filter);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[380px] flex items-center"
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

      {/* Filters + Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-10">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === key
                    ? "bg-[#0F5132] text-white"
                    : "bg-[#f8faf8] text-gray-600 hover:bg-gray-100 border"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8faf8] rounded-2xl p-6 border hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 text-xs font-semibold text-[#0F5132]">
                  <span className="flex items-center gap-1 bg-[#0F5132]/10 px-3 py-1 rounded-full">
                    <FaTag className="text-[10px]" />
                    {item.tag}
                  </span>

                  <span className="text-gray-400 font-normal">
                    {t.filters[item.regionKey]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F5132] mt-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.blurb}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-xs mt-4">
                  <FaCalendarAlt />
                  {item.date}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default News;
