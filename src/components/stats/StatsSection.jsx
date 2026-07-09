import {
  FaRecycle,
  FaTint,
  FaUsers,
  FaTemperatureHigh,
  FaTree,
} from "react-icons/fa";

import { useT } from "../../i18n/useT";

const icons = [FaRecycle, FaTint, FaUsers, FaTemperatureHigh, FaTree];

const StatsSection = () => {
  const stats = useT().home.stats.map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <section className=" py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  p-4
                "
              >
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0F5132] flex items-center justify-center">
                      <Icon className="text-white text-lg" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="text-[#0F5132] font-bold text-2xl leading-none">
                      {item.value}
                    </h3>

                    <p className="text-[#0F5132] font-semibold text-sm mt-1">
                      {item.title}
                    </p>

                    <p className="text-gray-500 text-xs leading-relaxed mt-2">
                      {item.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;