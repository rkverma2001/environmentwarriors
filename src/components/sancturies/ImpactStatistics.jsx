import {
  FaTree,
  FaUsers,
  FaPaw,
  FaLeaf,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaTree />,
    value: "10M+",
    title: "Trees Protected",
    description: "Across forests and green zones",
  },
  {
    icon: <FaUsers />,
    value: "500K+",
    title: "Volunteers",
    description: "Working for environmental change",
  },
  {
    icon: <FaPaw />,
    value: "250+",
    title: "Species Protected",
    description: "Wildlife species under conservation",
  },
  {
    icon: <FaLeaf />,
    value: "150+",
    title: "Projects Completed",
    description: "Successful conservation initiatives",
  },
];

const ImpactStatistics = () => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ourimpact.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/80 via-[#0F5132]/60 to-[#0F5132]/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
            OUR IMPACT
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Real Results Creating Real Change
          </h2>

          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            Together we are protecting wildlife, restoring forests,
            and creating a sustainable future for generations to come.
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:bg-white/15
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-5 text-white text-2xl">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-white text-4xl font-bold">
                {item.value}
              </h3>

              {/* Title */}
              <h4 className="text-white font-semibold mt-3 text-lg">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ImpactStatistics;