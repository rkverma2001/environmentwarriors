import {
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const VisitorInfo = () => {
  const info = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Lakhimpur Kheri, UP",
    },
    {
      icon: FaCalendarAlt,
      title: "Best Time",
      value: "Nov - Jun",
    },
    {
      icon: FaClock,
      title: "Safari",
      value: "Morning & Evening",
    },
    {
      icon: FaTicketAlt,
      title: "Entry",
      value: "As per Govt Rules",
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          Visitor Information
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