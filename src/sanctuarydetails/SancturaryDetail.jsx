import { useParams } from "react-router-dom";

import sanctuariesData from "../data/sanctuariesData";

import SanctuaryHero from "./SanctuaryHero";
import SanctuaryAbout from "./SanctuaryAbout";
import WildlifeSection from "./WildlifeSection";
import GallerySection from "./GallerySection";
import SanctuaryStats from "./SanctuaryStats";
import VisitorInfo from "./VisitorInfo";
import SafariZones from "./SafariZones";
import ConservationSection from "./ConservationSection";
import CTASection from "./CTASection";

const SanctuaryDetail = () => {
  const { slug } = useParams();

  const sanctuary = sanctuariesData[slug];

  if (!sanctuary) {
    return (
      <div className="text-center py-20">
        Sanctuary Not Found
      </div>
    );
  }

  return (
    <>
      <SanctuaryHero data={sanctuary} />

      <SanctuaryAbout data={sanctuary} />
      <SanctuaryStats data={sanctuary} />

      <WildlifeSection wildlife={sanctuary.wildlife} />
  <GallerySection gallery={sanctuary.gallery} />
  <VisitorInfo />
  <SafariZones ranges={sanctuary.ranges} />
  <ConservationSection />
  <CTASection />

    </>
  );
};

export default SanctuaryDetail;