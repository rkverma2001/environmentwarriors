import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { useT } from "../i18n/useT";

const ConservationSection = ({ data }) => {
  const t = useT().sanctuaryDetail;
  const items = data.conservationHighlights || [];
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          {t.conservationHighlights}
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveItem(item)}
              className="
                bg-[#0F5132]
                text-white
                rounded-2xl
                p-6
                text-center
                hover:bg-[#0c3f28]
                transition
                cursor-pointer
              "
            >
              <p className="font-semibold">{item.title}</p>
              <p className="text-white/60 text-xs mt-2">{t.tapForDetails}</p>
            </button>
          ))}

        </div>

      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-bold text-[#0F5132] pr-6">
              {activeItem.title}
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default ConservationSection;
