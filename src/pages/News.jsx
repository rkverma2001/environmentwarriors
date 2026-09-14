import { useState } from "react";
import { FaCalendarAlt, FaTag, FaTimes } from "react-icons/fa";

import { useT } from "../i18n/useT";

const clippingImages = [
  "/news/clippings/toi-bagh-mitras-felicitated.jpg",
  "/news/clippings/ht-insurance-announcement.jpg",
  "/news/clippings/hindi-140-baghmitra-summanit.jpg",
];

const News = () => {
  const t = useT().news;
  const [filter, setFilter] = useState("all");
  const [activeClipping, setActiveClipping] = useState(null);

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

      {/* In The Media */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl md:text-3xl font-bold text-[#0F5132]">
            {t.inMedia.heading}
          </h2>

          <p className="text-gray-600 mt-2">
            {t.inMedia.description}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {t.inMedia.clippings.map((clip, index) => (
              <button
                key={index}
                onClick={() => setActiveClipping({ src: clippingImages[index], alt: clip.headline })}
                className="bg-white rounded-2xl border overflow-hidden text-left hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={clippingImages[index]}
                  alt={clip.headline}
                  className="w-full h-[220px] object-cover object-top"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#0F5132] uppercase tracking-wide">
                    {clip.publication}
                  </p>
                  <p className="text-gray-700 text-sm mt-1 leading-snug">
                    {clip.headline}
                  </p>
                </div>
              </button>
            ))}
          </div>

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

      {/* Clipping Lightbox */}
      {activeClipping && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
          onClick={() => setActiveClipping(null)}
        >
          <button
            onClick={() => setActiveClipping(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <img
            src={activeClipping.src}
            alt={activeClipping.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default News;
