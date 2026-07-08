const ConservationSection = () => {
  const items = [
    "Rhino Reintroduction",
    "Tiger Monitoring",
    "Swamp Deer Conservation",
    "Anti-Poaching Patrols",
    "Wetland Protection",
    "Forest Restoration",
  ];

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          Conservation Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#0F5132]
                text-white
                rounded-2xl
                p-6
                text-center
              "
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ConservationSection;