import { useState } from "react";
import { FaPaw, FaTimes } from "react-icons/fa";

import { useT } from "../i18n/useT";

const WildlifeSection = ({ wildlife }) => {
  const t = useT().sanctuaryDetail;
  const [activeAnimal, setActiveAnimal] = useState(null);

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          {t.wildlifeSpecies}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {wildlife.map((animal, index) => (
            <button
              key={index}
              onClick={() => setActiveAnimal(animal)}
              className="text-center cursor-pointer group"
            >
              {animal.image ? (
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="
                    w-32
                    h-32
                    mx-auto
                    rounded-full
                    object-cover
                    group-hover:opacity-80
                    transition
                  "
                />
              ) : (
                <div
                  className="
                    w-32
                    h-32
                    mx-auto
                    rounded-full
                    bg-[#0F5132]/10
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#0F5132]/20
                    transition
                  "
                >
                  <FaPaw className="text-[#0F5132] text-3xl" />
                </div>
              )}

              <h4 className="font-semibold mt-4">
                {animal.name}
              </h4>

              <p className="text-gray-400 text-xs mt-1">{t.tapForDetails}</p>
            </button>
          ))}

        </div>

      </div>

      {activeAnimal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveAnimal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative"
          >
            <button
              onClick={() => setActiveAnimal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {activeAnimal.image ? (
              <img
                src={activeAnimal.image}
                alt={activeAnimal.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#0F5132]/10 flex items-center justify-center mb-4">
                <FaPaw className="text-[#0F5132] text-2xl" />
              </div>
            )}

            <h3 className="text-xl font-bold text-[#0F5132] pr-6">
              {activeAnimal.name}
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {activeAnimal.description}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default WildlifeSection;
