import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaVideo, FaArrowRight } from "react-icons/fa";

import { useT } from "../i18n/useT";

const SESSION_KEY = "ew-campaign-alert-seen";

const getInitialOpen = () => {
  try {
    return !sessionStorage.getItem(SESSION_KEY);
  } catch {
    return true;
  }
};

const CampaignAlertPopup = () => {
  const t = useT().campaignAlert;
  const [open, setOpen] = useState(getInitialOpen);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore storage failures (private browsing etc.)
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[210] flex items-center justify-center bg-black/70 px-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-[560px] w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          aria-label={t.close}
        >
          <FaTimes size={20} />
        </button>

        <div className="bg-[#0F5132] rounded-t-3xl px-6 py-4 flex items-center gap-2">
          <FaVideo className="text-[#F5C542]" />
          <span className="text-[#F5C542] font-bold uppercase tracking-wide text-sm">
            {t.badge}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F5132] leading-snug">
            {t.headline}
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
            {t.summary}
          </p>

          <Link
            to="/campaign"
            onClick={close}
            className="mt-6 inline-flex items-center gap-2 bg-[#0F5132] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
          >
            {t.cta}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignAlertPopup;
