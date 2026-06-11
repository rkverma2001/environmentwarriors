import {
  FaTree,
  FaPaw,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const MissionSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left Image */}
          <div className="relative h-full">

            <img
              src="/ourmission.png"
              alt="Environment Warriors Mission"
              className="
                w-full
                h-[320px]
                sm:h-[400px]
                md:h-[500px]
                lg:h-full
                min-h-[550px]
                object-cover
                rounded-3xl
                shadow-lg
              "
            />

            {/* Floating Card */}
            <div
              className="
                absolute
                bottom-6
                left-6
                bg-white
                rounded-2xl
                shadow-xl
                px-5
                py-4
                border
                border-gray-100
              "
            >
              <h4 className="text-[#0F5132] font-bold text-2xl">
                10M+
              </h4>

              <p className="text-sm text-gray-600">
                Trees Protected
              </p>
            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center h-full">

            {/* Badge */}
            <span
              className="
                inline-block
                w-fit
                bg-[#0F5132]/10
                text-[#0F5132]
                font-semibold
                px-4
                py-2
                rounded-full
                text-sm
              "
            >
              OUR MISSION
            </span>

            {/* Heading */}
            <h2
              className="
                mt-5
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                text-[#0F5132]
                leading-tight
              "
            >
              Protecting Nature for Future Generations
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                text-gray-600
                leading-relaxed
                text-base
                lg:text-lg
              "
            >
              Environment Warriors is dedicated to preserving forests,
              protecting wildlife, restoring ecosystems, and inspiring
              communities to build a greener, healthier, and more
              sustainable future.
            </p>

            {/* Mission Points */}
            <div className="mt-8 space-y-6">

              {/* Item 1 */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#0F5132] flex items-center justify-center">
                  <FaTree className="text-white text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F5132] text-lg">
                    Forest Conservation
                  </h4>

                  <p className="text-gray-600 text-sm mt-1">
                    Preserving forests and biodiversity for future generations.
                  </p>
                </div>

              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#0F5132] flex items-center justify-center">
                  <FaPaw className="text-white text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F5132] text-lg">
                    Wildlife Protection
                  </h4>

                  <p className="text-gray-600 text-sm mt-1">
                    Protecting endangered species and preserving natural habitats.
                  </p>
                </div>

              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#0F5132] flex items-center justify-center">
                  <FaUsers className="text-white text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F5132] text-lg">
                    Community Awareness
                  </h4>

                  <p className="text-gray-600 text-sm mt-1">
                    Inspiring communities to actively participate in environmental protection.
                  </p>
                </div>

              </div>

            </div>

            {/* Button */}
            <button
              className="
                mt-10
                w-fit
                bg-[#0F5132]
                hover:bg-[#0a3d26]
                text-white
                px-7
                py-3
                rounded-xl
                font-medium
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:gap-3
              "
            >
              Learn More
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionSection;