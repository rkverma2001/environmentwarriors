import { useT } from "../i18n/useT";

const WildlifeSection = ({ wildlife }) => {
  const t = useT().sanctuaryDetail;

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          {t.wildlifeSpecies}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {wildlife.map((animal, index) => (
            <div
              key={index}
              className="text-center"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="
                  w-32
                  h-32
                  mx-auto
                  rounded-full
                  object-cover
                "
              />

              <h4 className="font-semibold mt-4">
                {animal.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WildlifeSection;