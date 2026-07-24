import { useState } from "react";
import {
  FaTree,
  FaUsers,
  FaSchool,
  FaLeaf,
  FaTimes,
} from "react-icons/fa";

import { useT } from "../../i18n/useT";

const icons = [<FaTree />, <FaUsers />, <FaSchool />, <FaLeaf />];

const schoolPhotos = [
  "/schools/chokhwapuri-school-exterior.jpg",
  "/schools/chokhwapuri-classroom.jpg",
];

const ImpactStatistics = () => {
  const t = useT().home.impact;
  const stats = t.stats.map((s, i) => ({ ...s, icon: icons[i] }));
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/tigers/tiger-waterhole.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/80 via-[#0F5132]/60 to-[#0F5132]/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
            {t.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.heading}
          </h2>

          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            {t.description}
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item, index) => {
            const CardTag = item.clickable ? "button" : "div";

            return (
              <CardTag
                key={index}
                onClick={item.clickable ? () => setGalleryOpen(true) : undefined}
                className={`
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  text-center
                  hover:bg-white/15
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  w-full
                  ${item.clickable ? "cursor-pointer" : ""}
                `}
              >

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5 text-white text-2xl">
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-white text-4xl font-bold">
                  {item.value}
                </h3>

                {/* Title */}
                <h4 className="text-white font-semibold mt-3 text-lg">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>

              </CardTag>
            );
          })}

        </div>

      </div>

      {/* Schools Adopted Gallery Modal */}
      {galleryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setGalleryOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-[700px] w-full max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-[#0F5132]">
              {t.schoolModal.title}
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed">
              {t.schoolModal.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {schoolPhotos.map((photo) => (
                <img
                  key={photo}
                  src={photo}
                  alt=""
                  className="w-full h-[240px] object-cover rounded-2xl"
                />
              ))}
            </div>

            <button
              onClick={() => setGalleryOpen(false)}
              className="mt-6 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
            >
              {t.schoolModal.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImpactStatistics;
