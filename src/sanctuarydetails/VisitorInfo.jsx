import {
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { useT } from "../i18n/useT";

const VisitorInfo = ({ data }) => {
  const t = useT().sanctuaryDetail;

  const info = [
    {
      icon: FaMapMarkerAlt,
      title: t.locationLabel,
      value: data.location.split(",")[0],
    },
    {
      icon: FaCalendarAlt,
      title: t.bestTimeLabel,
      value: data.bestTime,
    },
    {
      icon: FaClock,
      title: t.safariLabel,
      value: t.morningEvening,
    },
    {
      icon: FaTicketAlt,
      title: t.entryLabel,
      value: t.govtRules,
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          {t.visitorInformation}
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {info.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6"
              >
                <Icon className="text-[#0F5132] text-2xl" />

                <h3 className="font-semibold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.value}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default VisitorInfo;