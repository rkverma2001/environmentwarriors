import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaImages, FaCamera, FaTimes } from "react-icons/fa";

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
  const [activePhoto, setActivePhoto] = useState(null);

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
            const hasPhotos = event.images.length > 0;

            return (
              <div
                key={event.id}
                className="bg-[#f8faf8] rounded-3xl border overflow-hidden"
              >
                {hasPhotos ? (
                  <button
                    onClick={() => setActivePhoto({ src: event.images[0], alt: copy.title })}
                    className="block w-full cursor-pointer"
                  >
                    <img
                      src={event.images[0]}
                      alt={copy.title}
                      className="w-full h-[320px] object-cover hover:opacity-90 transition"
                    />
                  </button>
                ) : (
                  <div className="w-full h-[160px] flex flex-col items-center justify-center gap-2 bg-[#0F5132]/5 text-[#0F5132]/50">
                    <FaCamera className="text-3xl" />
                    <span className="text-sm font-medium">{t.photosComingSoon}</span>
                  </div>
                )}

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

                  {hasPhotos && (
                    <button
                      onClick={() => setOpenGallery(isOpen ? null : event.id)}
                      className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0F5132] hover:underline"
                    >
                      <FaImages />
                      {isOpen ? t.hidePhotos : t.viewPhotos} ({event.images.length})
                    </button>
                  )}

                  {isOpen && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
                      {event.images.map((img, index) => (
                        <button
                          key={img}
                          onClick={() => setActivePhoto({ src: img, alt: `${copy.title} ${index + 1}` })}
                          className="cursor-pointer"
                        >
                          <img
                            src={img}
                            alt={`${copy.title} ${index + 1}`}
                            className="w-full h-[160px] object-cover rounded-xl hover:opacity-90 transition"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Photo Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Activities;
