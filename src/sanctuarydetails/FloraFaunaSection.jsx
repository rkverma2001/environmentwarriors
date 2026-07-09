import { FaSeedling, FaPaw } from "react-icons/fa";

const FloraFaunaSection = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-[#0F5132] flex items-center gap-3 mb-6">
              <FaSeedling className="text-[#4CAF50]" />
              Flora
            </h2>

            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
              {data.flora.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0F5132] flex items-center gap-3 mb-6">
              <FaPaw className="text-[#4CAF50]" />
              Fauna
            </h2>

            <ul className="space-y-3 text-gray-600 leading-relaxed list-disc list-inside">
              {data.fauna.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FloraFaunaSection;
