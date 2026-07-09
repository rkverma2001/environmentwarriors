import { useT } from "../i18n/useT";

const CTASection = ({ data }) => {
  const t = useT().sanctuaryDetail;

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
          {t.ctaTitle}
        </h2>

        <p className="text-white/80 mt-4">
          {t.ctaSubtitlePrefix} {data?.name} {t.ctaSubtitleSuffix}
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
          {t.planVisit}
        </button>

      </div>
    </section>
  );
};

export default CTASection;