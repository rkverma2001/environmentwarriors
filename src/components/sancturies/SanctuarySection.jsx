import { FaArrowRight, FaLeaf } from "react-icons/fa";

const sanctuaries = [
  {
    image: "/dudhwanationalpark.png",
    title: "Dudhwa National Park",
    description:
      "Home to Royal Bengal Tigers, One-horned Rhinoceros and diverse wildlife.",
  },
  {
    image: "/kishanpur.png",
    title: "Kishanpur Wildlife",
    description:
      "A paradise for bird watchers and home to swamp deer and crocodiles.",
  },
  {
    image: "/katarniaghat.png",
    title: "Katarniaghat Wildlife",
    description:
      "Famous for Gharials, Swamp Deer and rich biodiversity.",
  },
  {
    image: "/pilibhit.png",
    title: "Pilibhit Tiger Reserve",
    description:
      "A vital tiger habitat with lush forests and wide grasslands.",
  },
];

const SanctuarySection = () => {
  return (
    <section className="py-12 lg:py-16 ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-10">

          <div className="flex items-center justify-center gap-3 mb-2">
  <div className="w-12 md:w-16 lg:w-20 h-[1.5px] bg-[#0F5132]/20"></div>

  <div className="flex items-center gap-2">
    <h2 className="text-[#0F5132] text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
      Explore Our Sanctuaries
    </h2>

    <FaLeaf className="text-[#4CAF50] text-sm md:text-base" />
  </div>

  <div className="w-12 md:w-16 lg:w-20 h-[1.5px] bg-[#0F5132]/20"></div>
</div>

          <p className="text-gray-500 text-xs md:text-sm text-center">
  Discover the rich biodiversity of Uttar Pradesh
</p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {sanctuaries.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
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

                <button
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-[#0F5132]
                    font-semibold
                    hover:gap-3
                    transition-all
                  "
                >
                  Explore More
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

export default SanctuarySection;