import {
  FaMapMarkedAlt,
  FaTree,
  FaPaw,
  FaShieldAlt,
} from "react-icons/fa";

const SanctuaryStats = ({ data }) => {
  const stats = [
    {
      icon: FaMapMarkedAlt,
      value: data.area,
      label: "Area",
    },
    {
      icon: FaTree,
      value: "10",
      label: "Forest Ranges",
    },
    {
      icon: FaPaw,
      value: "100+",
      label: "Species",
    },
    {
      icon: FaShieldAlt,
      value: data.established,
      label: "Established",
    },
  ];

  return (
    <section className="py-12 bg-[#f8faf8]">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow"
              >
                <Icon className="mx-auto text-[#0F5132] text-3xl" />

                <h3 className="text-3xl font-bold mt-4">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SanctuaryStats;