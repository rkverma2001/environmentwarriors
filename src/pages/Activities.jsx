import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaImages } from "react-icons/fa";

import eventsData from "../data/eventsData";
import { useT } from "../i18n/useT";
import { useLanguage } from "../context/useLanguage";

const dateFormatters = {
  en: (iso) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
  hi: (iso) => new Date(iso).toLocaleDateString("hi-IN", { day: "numeric", month: "long", year: "numeric" }),
};

const Activities = () => {
  const t = useT().activities;
  const { language } = useLanguage();
  const [openGallery, setOpenGallery] = useState(null);

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

      {/* Events */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {eventsData.map((event) => {
            const copy = t.events[event.id];
            const isOpen = openGallery === event.id;

            return (
              <div
                key={event.id}
                className="bg-[#f8faf8] rounded-3xl border overflow-hidden"
              >
                <img
                  src={event.images[0]}
                  alt={copy.title}
                  className="w-full h-[320px] object-cover"
                />

                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-[#0F5132] font-semibold">
                    <FaCalendarAlt />
                    {dateFormatters[language](event.date)}
                  </div>

                  <h2 className="text-2xl font-bold text-[#0F5132] mt-3">
                    {copy.title}
                  </h2>

                  <p className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    <FaMapMarkerAlt />
                    {copy.location}
                  </p>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {copy.description}
                  </p>

                  <div className="mt-4 flex gap-2 bg-[#0F5132]/5 rounded-xl p-3 text-xs text-gray-500 leading-relaxed">
                    <FaInfoCircle className="text-[#0F5132] flex-shrink-0 mt-0.5" />
                    <p>{t.inferredNote}</p>
                  </div>

                  <button
                    onClick={() => setOpenGallery(isOpen ? null : event.id)}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0F5132] hover:underline"
                  >
                    <FaImages />
                    {isOpen ? t.hidePhotos : t.viewPhotos} ({event.images.length})
                  </button>

                  {isOpen && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
                      {event.images.map((img, index) => (
                        <img
                          key={img}
                          src={img}
                          alt={`${copy.title} ${index + 1}`}
                          className="w-full h-[160px] object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Activities;
