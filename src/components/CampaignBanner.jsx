import { useState } from "react";
import { Link } from "react-router-dom";
import { FaVideo, FaTimes } from "react-icons/fa";

import { useT } from "../i18n/useT";

const SESSION_KEY = "ew-campaign-banner-dismissed";

const getInitialVisible = () => {
  try {
    return !sessionStorage.getItem(SESSION_KEY);
  } catch {
    return true;
  }
};

const CampaignBanner = () => {
  const t = useT().campaignBanner;
  const [visible, setVisible] = useState(getInitialVisible);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore storage failures (private browsing etc.)
    }
  };

  if (!visible) return null;

  return (
    <div className="bg-[#0F5132] text-white relative z-[60]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-center">

        <FaVideo className="text-[#F5C542] flex-shrink-0 hidden sm:block" />

        <p className="text-xs sm:text-sm font-medium leading-snug">
          {t.text}
        </p>

        <Link
          to="/campaign"
          className="text-[#F5C542] font-semibold underline underline-offset-2 hover:text-white transition text-xs sm:text-sm whitespace-nowrap"
        >
          {t.cta}
        </Link>

        <button
          onClick={dismiss}
          aria-label={t.close}
          className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition"
        >
          <FaTimes size={14} />
        </button>

      </div>
    </div>
  );
};

export default CampaignBanner;
