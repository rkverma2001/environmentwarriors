import {
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { useT } from "../../i18n/useT";

const SLUGS = ["dudhwa", "kishanpur", "katarniaghat", "pilibhit"];
const IMAGES = {
  dudhwa: "/dudhwanationalpark.png",
  kishanpur: "/kishanpur.png",
  katarniaghat: "/katarniaghat.png",
  pilibhit: "/pilibhit.png",
};

const SanctuariesGrid = () => {
  const t = useT().sanctuariesPage.grid;
  const sanctuaries = SLUGS.map((slug) => ({
    image: IMAGES[slug],
    ...t.cards[slug],
  }));

  return (
    <section className="py-14 lg:py-20 bg-[#f8faf8]">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-medium">
            {t.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0F5132]">
            {t.heading}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {sanctuaries.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[240px]
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-bold text-[#0F5132]">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-[#0F5132] text-sm">
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                </div>

                <div className="mt-4 space-y-2 text-sm">

                  <p>
                    <span className="font-semibold">
                      {t.areaLabel}
                    </span>{" "}
                    {item.area}
                  </p>

                  <p>
                    <span className="font-semibold">
                      {t.speciesLabel}
                    </span>{" "}
                    {item.species}
                  </p>

                </div>

                <button
                  className="
                    mt-5
                    bg-[#0F5132]
                    hover:bg-[#0a3d26]
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    flex
                    items-center
                    gap-2
                    text-sm
                    transition-all
                  "
                >
                  {t.exploreMore}
                  <FaArrowRight />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SanctuariesGrid;