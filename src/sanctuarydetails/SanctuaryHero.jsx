const SanctuaryHero = ({ data }) => {
  return (
    <section
      className="h-[600px] relative"
      style={{
        backgroundImage: `url(${data.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-[1400px] mx-auto px-6">

          <h1 className="text-white text-6xl font-bold">
            {data.name}
          </h1>

          <p className="text-white text-xl mt-4 max-w-2xl">
            {data.uniqueness}
          </p>

        </div>

      </div>
    </section>
  );
};

export default SanctuaryHero;