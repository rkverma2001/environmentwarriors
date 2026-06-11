import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import {
  FaTree,
  FaPaw,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
];

const HeroSection = () => {
  return (
    <section className="relative h-[450px] sm:h-[520px] lg:h-[580px] overflow-hidden">

  {/* Background Slider */}
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="absolute inset-0 w-full h-full z-0"
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt={`hero-${index}`}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/25 z-10"></div>

  {/* Green Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#001A12]/90 via-[#001A12]/55 to-transparent z-20"></div>

  {/* Content */}
  <div className="absolute inset-0 z-30 flex items-center">
    <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">

      <div className="max-w-[550px]">

        <h1 className="text-white font-bold leading-[0.95] text-4xl sm:text-5xl lg:text-6xl">
          ENVIRONMENT
          <br />
          WARRIORS
        </h1>

        <h2 className="text-[#F5C542] font-semibold mt-4 text-xl lg:text-2xl">
          The Guardians of the Green 🌿
        </h2>

        <p className="text-white/90 mt-4 text-sm sm:text-base leading-relaxed max-w-[500px]">
          Dedicated to wildlife conservation, forest protection and
          environmental awareness for a greener and sustainable India.
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-4 lg:gap-6 mt-8">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#4CAF50] flex items-center justify-center">
              <FaTree className="text-white text-lg" />
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm lg:text-base">
                Protect Forests
              </h3>
              <p className="text-white/70 text-xs">
                Preserve our green heritage
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#4CAF50] flex items-center justify-center">
              <FaPaw className="text-white text-lg" />
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm lg:text-base">
                Save Wildlife
              </h3>
              <p className="text-white/70 text-xs">
                Every species matters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#4CAF50] flex items-center justify-center">
              <FaUsers className="text-white text-lg" />
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm lg:text-base">
                Spread Awareness
              </h3>
              <p className="text-white/70 text-xs">
                Inspiring the next generation
              </p>
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-8">

          <button className="bg-[#F5C542] hover:bg-[#e4b437] transition-all duration-300 px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2">
            EXPLORE SANCTUARIES
            <FaArrowRight />
          </button>

          <button className="border border-white hover:bg-white hover:text-black transition-all duration-300 text-white px-6 py-3 rounded-md text-sm font-semibold">
            BECOME A VOLUNTEER
          </button>

        </div>

      </div>

    </div>
  </div>

</section>
  );
};

export default HeroSection;