import {
  FaTree,
  FaPaw,
  FaMountain,
} from "react-icons/fa";

import { useT } from "../../i18n/useT";

const SanctuariesOverview = () => {
  const t = useT().sanctuariesPage.overview;

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image Grid */}
          <div className="grid grid-cols-2 gap-3">

            <img
              src="/overview1.png"
              alt=""
              className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl"
            />

            <img
              src="/overview2.png"
              alt=""
              className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl"
            />

            <img
              src="/overview3.png"
              alt=""
              className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl"
            />

            <img
              src="/overview4.png"
              alt=""
              className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl"
            />

          </div>

          {/* Right Content */}
          <div>

            <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-medium">
              {t.eyebrow}
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F5132]">
              {t.heading}
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              {t.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

              <div className="bg-[#f8f9f7] rounded-2xl p-5 text-center border">

                <div className="w-12 h-12 mx-auto rounded-full bg-[#0F5132] flex items-center justify-center">
                  <FaTree className="text-white" />
                </div>

                <h3 className="text-3xl font-bold text-[#0F5132] mt-4">
                  4+
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {t.protectedAreas}
                </p>

              </div>

              <div className="bg-[#f8f9f7] rounded-2xl p-5 text-center border">

                <div className="w-12 h-12 mx-auto rounded-full bg-[#0F5132] flex items-center justify-center">
                  <FaPaw className="text-white" />
                </div>

                <h3 className="text-3xl font-bold text-[#0F5132] mt-4">
                  500+
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {t.wildlifeSpecies}
                </p>

              </div>

              <div className="bg-[#f8f9f7] rounded-2xl p-5 text-center border">

                <div className="w-12 h-12 mx-auto rounded-full bg-[#0F5132] flex items-center justify-center">
                  <FaMountain className="text-white" />
                </div>

                <h3 className="text-3xl font-bold text-[#0F5132] mt-4">
                  2500+
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {t.sqKmProtected}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SanctuariesOverview;