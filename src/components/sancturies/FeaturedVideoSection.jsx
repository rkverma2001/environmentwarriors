import { FaPlay } from "react-icons/fa";

import { useT } from "../../i18n/useT";

const FeaturedVideoSection = () => {
  const t = useT().home.featuredVideo;

  return (
    <section className="py-16 lg:py-20 bg-[#0B2E1F]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <span className="inline-block bg-white/10 text-[#F5C542] px-4 py-2 rounded-full text-sm font-semibold">
            {t.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.heading}
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <video
            controls
            preload="none"
            poster="/events/sep-2026-pilibhit-bagh-mitra/event-banner.jpg"
            className="w-full aspect-video bg-black"
          >
            <source src="/videos/pilibhit-tiger-reserve.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="text-center text-white/60 text-sm mt-5 flex items-center justify-center gap-2">
          <FaPlay className="text-xs" />
          {t.caption}
        </p>

      </div>
    </section>
  );
};

export default FeaturedVideoSection;
