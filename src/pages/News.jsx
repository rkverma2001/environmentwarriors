import { useState } from "react";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

const NEWS_ITEMS = [
  {
    region: "India",
    tag: "Wildlife",
    title: "Tiger Census Shows Continued Recovery Across Terai Reserves",
    date: "Jun 2026",
    blurb:
      "Forest departments across the Terai Arc report steady tiger numbers, crediting corridor protection between Dudhwa, Pilibhit and Nepal's forests.",
  },
  {
    region: "India",
    tag: "Policy",
    title: "New Wetland Conservation Guidelines Announced for Uttar Pradesh",
    date: "Jun 2026",
    blurb:
      "State forest authorities outline stronger protections for tal wetlands that sustain migratory bird populations through the dry season.",
  },
  {
    region: "India",
    tag: "Community",
    title: "Village Afforestation Drives Cross 1 Lakh Saplings This Monsoon",
    date: "May 2026",
    blurb:
      "Community-led plantation programs across Lakhimpur Kheri district continue to expand green cover bordering protected forests.",
  },
  {
    region: "World",
    tag: "Climate",
    title:
      "Global Reforestation Pledges Under Review Ahead of Next Climate Summit",
    date: "Jun 2026",
    blurb:
      "International monitors assess progress on nation-level pledges to restore degraded forest land by the end of the decade.",
  },
  {
    region: "World",
    tag: "Oceans",
    title: "River Dolphin Populations Get Renewed International Attention",
    date: "May 2026",
    blurb:
      "Conservation groups worldwide highlight freshwater dolphin species, including the Gangetic river dolphin, as indicators of river health.",
  },
  {
    region: "World",
    tag: "Species",
    title: "Global Tiger Range Countries Reaffirm Big Cat Recovery Targets",
    date: "Apr 2026",
    blurb:
      "Range countries across Asia recommit to population-recovery goals first set at the St. Petersburg Tiger Summit.",
  },
];

const FILTERS = ["All", "India", "World"];

const News = () => {
  const [filter, setFilter] = useState("All");

  const items =
    filter === "All"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.region === filter);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[380px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Stay Informed
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            Environmental News — India & World
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            Topical wildlife, forest and climate news from the Terai and
            beyond.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === f
                    ? "bg-[#0F5132] text-white"
                    : "bg-[#f8faf8] text-gray-600 hover:bg-gray-100 border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8faf8] rounded-2xl p-6 border hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 text-xs font-semibold text-[#0F5132]">
                  <span className="flex items-center gap-1 bg-[#0F5132]/10 px-3 py-1 rounded-full">
                    <FaTag className="text-[10px]" />
                    {item.tag}
                  </span>

                  <span className="text-gray-400 font-normal">
                    {item.region}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F5132] mt-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.blurb}
                </p>

                <div className="flex items-center gap-2 text-gray-400 text-xs mt-4">
                  <FaCalendarAlt />
                  {item.date}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default News;
