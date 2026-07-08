const CTASection = () => {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundImage: "url('/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0F5132]/80" />

      <div className="relative z-10 text-center">

        <h2 className="text-white text-5xl font-bold">
          Explore The Wilderness
        </h2>

        <p className="text-white/80 mt-4">
          Experience nature like never before.
        </p>

        <button
          className="
          mt-8
          bg-[#F5C542]
          px-8
          py-4
          rounded-xl
          font-semibold
        "
        >
          Plan Your Visit
        </button>

      </div>
    </section>
  );
};

export default CTASection;