import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const campaigns = [
  {
    image: "/campaign1.png",
    title: "Plantation Drive 2026",
    date: "25 May 2026",
    location: "Dudhwa National Park",
    description:
      "Join us in planting thousands of trees and restoring green cover.",
  },
  {
    image: "/campaign2.png",
    title: "Save Wildlife Initiative",
    date: "15 June 2026",
    location: "Kishanpur Sanctuary",
    description:
      "Help protect endangered wildlife species and their habitats.",
  },
  {
    image: "/campaign3.png",
    title: "Clean River Mission",
    date: "30 June 2026",
    location: "Sharda River Basin",
    description:
      "Participate in cleaning and preserving river ecosystems.",
  },
];

const CampaignsSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-medium">
            CURRENT CAMPAIGNS
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F5132]">
            Join Us in Protecting Nature
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Be a part of our ongoing environmental initiatives and
            make a lasting impact on nature and wildlife.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {campaigns.map((campaign, index) => (
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
                  src={campaign.image}
                  alt={campaign.title}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-[#0F5132]">
                  {campaign.title}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
                  <FaCalendarAlt />
                  <span>{campaign.date}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt />
                  <span>{campaign.location}</span>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {campaign.description}
                </p>

                <button
                  className="
                    mt-6
                    bg-[#0F5132]
                    hover:bg-[#0a3d26]
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    flex
                    items-center
                    gap-2
                    transition-all
                  "
                >
                  Join Campaign
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

export default CampaignsSection;