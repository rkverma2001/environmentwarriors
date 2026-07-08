const SafariZones = ({ ranges = [] }) => {
  return (
    <section className="py-20 bg-[#f8faf8]">
      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          Safari Zones
        </h2>

        {ranges.length === 0 ? (
          <p className="text-center text-gray-500">
            No safari zones available.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {ranges.map((range, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src={range.image}
                  alt={range.name}
                  className="h-[220px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <h3 className="absolute bottom-4 left-4 text-white font-semibold">
                  {range.name}
                </h3>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default SafariZones;