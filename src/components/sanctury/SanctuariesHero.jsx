import { Link } from "react-router-dom";

const SanctuariesHero = () => {
  return (
    <section
      className="relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden"
      style={{
        backgroundImage: "url('/sanctuaryhero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/80 via-[#0F5132]/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">

          <div className="max-w-[650px]">

            {/* Badge */}
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5">
              🌿 Wildlife Conservation
            </span>

            {/* Heading */}
            <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Explore Our
              <br />
              Sanctuaries
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 mt-5 text-base sm:text-lg max-w-[550px] leading-relaxed">
              Discover India's rich wildlife heritage and explore
              protected forests, rare species, and breathtaking ecosystems.
            </p>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-6 text-sm text-white/80">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#F5C542]">
                Sanctuaries
              </span>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-[#F5C542] hover:bg-[#e3b83d] text-black px-6 py-3 rounded-xl font-semibold transition-all">
                Explore Sanctuaries
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition-all">
                Learn More
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SanctuariesHero;