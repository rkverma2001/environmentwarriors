import { useParams } from "react-router-dom";

import sanctuariesData from "../data/sanctuariesData";
import { useLanguage } from "../context/useLanguage";
import { useT } from "../i18n/useT";

import SanctuaryHero from "./SanctuaryHero";
import SanctuaryAbout from "./SanctuaryAbout";
import FloraFaunaSection from "./FloraFaunaSection";
import WildlifeSection from "./WildlifeSection";
import GallerySection from "./GallerySection";
import SanctuaryStats from "./SanctuaryStats";
import VisitorInfo from "./VisitorInfo";
import ConservationSection from "./ConservationSection";

const SanctuaryDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = useT().sanctuaryDetail;

  const sanctuary = sanctuariesData[slug];

  if (!sanctuary) {
    return (
      <div className="text-center py-20">
        {t.notFound}
      </div>
    );
  }

  const data = {
    ...sanctuary,
    ...sanctuary[language],
  };

  const wildlife = sanctuary.wildlife.map((w) => ({
    image: w.image,
    name: w.name[language],
  }));

  return (
    <>
      <SanctuaryHero data={data} />

      <SanctuaryAbout data={data} />
      <SanctuaryStats data={data} />
      <FloraFaunaSection data={data} />

      {wildlife.length > 0 && (
        <WildlifeSection wildlife={wildlife} />
      )}
      {sanctuary.gallery.length > 0 && (
        <GallerySection gallery={sanctuary.gallery} />
      )}
  <VisitorInfo data={data} />
  <ConservationSection />

    </>
  );
};

export default SanctuaryDetail;