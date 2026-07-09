import { Link } from "react-router-dom";
import { FaArrowRight, FaLeaf } from "react-icons/fa";

import { useT } from "../../i18n/useT";

const SLUGS = ["dudhwa", "kishanpur", "katarniaghat", "pilibhit"];
const IMAGES = {
  dudhwa: "/dudhwanationalpark.png",
  kishanpur: "/kishanpur.png",
  katarniaghat: "/katarniaghat.png",
  pilibhit: "/pilibhit.png",
};

const SanctuarySection = () => {
  const t = useT().home.sanctuarySection;
  const sanctuaries = SLUGS.map((slug) => ({
    slug,
    image: IMAGES[slug],
    ...t.cards[slug],
  }));

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">

          <div className="flex items-center justify-center gap-3 mb-2">

            <div className="w-12 md:w-16 lg:w-20 h-[1.5px] bg-[#0F5132]/20"></div>

            <div className="flex items-center gap-2">

              <h2 className="text-[#0F5132] text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
                {t.heading}
              </h2>

              <FaLeaf className="text-[#4CAF50] text-sm md:text-base" />

            </div>

            <div className="w-12 md:w-16 lg:w-20 h-[1.5px] bg-[#0F5132]/20"></div>

          </div>

          <p className="text-gray-500 text-xs md:text-sm text-center">
            {t.subheading}
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {sanctuaries.map((item, index) => (
            <Link
              key={index}
              to={`/sanctuaries/${item.slug}`}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                block
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-[#0F5132] font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-[#0F5132]
                    font-semibold
                    hover:gap-3
                    transition-all
                  "
                >
                  {t.exploreMore}
                  <FaArrowRight />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SanctuarySection;