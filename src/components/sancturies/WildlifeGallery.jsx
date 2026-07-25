import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useT } from "../../i18n/useT";

const images = [
  "/tigers/tiger-paw-touch.jpg",
  "/tigers/tiger-waterhole.jpg",
  "/tigers/tiger-nose-to-nose.jpg",
  "/tigers/tiger-crossing-road.jpg",
  "/wildlife-gallery/tiger-alert-portrait.jpg",
  "/wildlife-gallery/tiger-forest-walk.jpg",
  "/wildlife-gallery/tiger-waterhole-rest.jpg",
  "/wildlife-gallery/tiger-forest-road.jpg",
  "/wildlife-gallery/crested-serpent-eagle.jpg",
  "/wildlife-gallery/sloth-bear.jpg",
  "/wildlife-gallery/peacocks-forest-path.jpg",
];

const WildlifeGallery = () => {
  const t = useT().home.gallery;
  const galleryImages = t.items.map((item, i) => ({ ...item, image: images[i] }));
  const [activeIndex, setActiveIndex] = useState(null);

  const showPrev = () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % galleryImages.length);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-medium">
            {t.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F5132]">
            {t.heading}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {galleryImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="
                relative
                overflow-hidden
                rounded-3xl
                group
                cursor-pointer
                text-left
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[320px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  text-white
                "
              >
                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>
              </div>

            </button>
          ))}

        </div>

      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white text-3xl"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <img
            src={galleryImages[activeIndex].image}
            alt={galleryImages[activeIndex].title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white text-3xl"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-semibold text-center px-4">
            {galleryImages[activeIndex].title}
          </p>
        </div>
      )}
    </section>
  );
};

export default WildlifeGallery;
