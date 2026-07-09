import { useT } from "../i18n/useT";

const SanctuaryAbout = ({ data }) => {
  const t = useT().sanctuaryDetail;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <img
            src={data.aboutImage}
            alt={data.name}
            className="w-full h-[500px] object-cover rounded-3xl"
          />

          <div>
            <span className="text-[#0F5132] font-semibold">
              {t.about}
            </span>

            <h2 className="text-4xl font-bold text-[#0F5132] mt-4">
              {t.aboutPrefix} {data.name}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {data.description}
            </p>

            <div className="mt-6 space-y-3 text-gray-600 leading-relaxed">
              <p><strong className="text-[#0F5132]">{t.location}</strong> {data.location}</p>
              <p><strong className="text-[#0F5132]">{t.established}</strong> {data.established}</p>
              <p><strong className="text-[#0F5132]">{t.area}</strong> {data.area}</p>
              <p><strong className="text-[#0F5132]">{t.ecosystem}</strong> {data.ecosystem}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SanctuaryAbout;