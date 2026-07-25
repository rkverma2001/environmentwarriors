import { useState } from "react";
import { FaBolt, FaCertificate, FaGlobe, FaIndustry, FaTimes, FaArrowRight, FaFilePdf } from "react-icons/fa";

import { useT } from "../../i18n/useT";

const icons = [<FaBolt />, <FaCertificate />, <FaGlobe />, <FaIndustry />];

const galleryPhotos = ["/net-zero/sarojini-nagar-rally-1.jpg", "/net-zero/sarojini-nagar-rally-2.jpg"];

const NetZeroInitiative = () => {
  const t = useT().home.netZero;
  const stats = t.stats.map((s, i) => ({ ...s, icon: icons[i] }));
  const [modalOpen, setModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-[#f8faf8]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-semibold">
              {t.eyebrow}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F5132] mt-4">
              {t.heading}
            </h2>

            <p className="text-gray-500 font-medium mt-2">
              {t.subtitle}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {t.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {galleryPhotos.map((photo) => (
                <button
                  key={photo}
                  onClick={() => setActivePhoto(photo)}
                  className="cursor-pointer"
                >
                  <img
                    src={photo}
                    alt={t.galleryCaption}
                    className="w-full h-[140px] sm:h-[180px] object-cover rounded-2xl shadow-md hover:opacity-90 transition"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
              >
                {t.learnMore}
                <FaArrowRight />
              </button>

              <a
                href="/net-zero/net-zero-industry-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#0F5132] text-[#0F5132] px-6 py-3 rounded-xl font-semibold hover:bg-[#0F5132]/5 transition"
              >
                <FaFilePdf />
                {t.viewBrochure}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#0F5132]/10 text-[#0F5132] flex items-center justify-center mx-auto text-xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0F5132] mt-4">
                  {item.value}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Learn More Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-[600px] w-full max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label={t.modalClose}
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-[#0F5132]">
              {t.modalTitle}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {t.modalIntro}
            </p>

            <h4 className="text-lg font-bold text-[#0F5132] mt-6">
              {t.pathwayHeading}
            </h4>

            <div className="mt-4 space-y-4">
              {t.pathway.map((p, i) => (
                <div key={p.step} className="flex gap-4">
                  <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#0F5132] text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F5132]">{p.step}</p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#0F5132]/5 rounded-xl p-4">
              <p className="font-semibold text-[#0F5132]">{t.officeHeading}</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">{t.officeText}</p>
            </div>

            <p className="text-center text-sm font-semibold text-[#0F5132] mt-6">
              {t.tagline}
            </p>

            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 w-full bg-[#0F5132] text-white py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
            >
              {t.modalClose}
            </button>
          </div>
        </div>
      )}

      {/* Photo Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
            aria-label={t.modalClose}
          >
            <FaTimes />
          </button>

          <img
            src={activePhoto}
            alt={t.galleryCaption}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export default NetZeroInitiative;
