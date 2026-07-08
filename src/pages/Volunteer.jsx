import {
  FaLeaf,
  FaUsers,
  FaTree,
  FaPaw,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const opportunities = [
  {
    icon: <FaTree />,
    title: "Tree Plantation",
    description:
      "Participate in afforestation and habitat restoration programs.",
  },
  {
    icon: <FaPaw />,
    title: "Wildlife Conservation",
    description:
      "Support wildlife monitoring and conservation awareness campaigns.",
  },
  {
    icon: <FaUsers />,
    title: "Community Awareness",
    description:
      "Educate communities and schools about environmental protection.",
  },
];

const Volunteer = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="relative h-[450px] md:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/volunteer-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
              Join Our Mission
            </span>

            <h1 className="text-white text-5xl md:text-6xl font-bold mt-6">
              Become A Volunteer
            </h1>

            <p className="text-white/90 mt-5 max-w-2xl text-lg">
              Join Environment Warriors and help protect wildlife,
              restore forests and build a sustainable future.
            </p>

          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              Why Volunteer With Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f8faf8] p-8 rounded-3xl">
              <FaLeaf className="text-[#0F5132] text-4xl" />

              <h3 className="mt-5 text-xl font-bold">
                Protect Nature
              </h3>

              <p className="mt-3 text-gray-600">
                Contribute directly to wildlife and forest conservation.
              </p>
            </div>

            <div className="bg-[#f8faf8] p-8 rounded-3xl">
              <FaUsers className="text-[#0F5132] text-4xl" />

              <h3 className="mt-5 text-xl font-bold">
                Make Impact
              </h3>

              <p className="mt-3 text-gray-600">
                Create positive environmental change in communities.
              </p>
            </div>

            <div className="bg-[#f8faf8] p-8 rounded-3xl">
              <FaTree className="text-[#0F5132] text-4xl" />

              <h3 className="mt-5 text-xl font-bold">
                Gain Experience
              </h3>

              <p className="mt-3 text-gray-600">
                Learn leadership, teamwork and conservation skills.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              Volunteer Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {opportunities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="text-[#0F5132] text-4xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">

          <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
            Benefits of Volunteering
          </h2>

          <div className="space-y-5">

            {[
              "Certificate of Participation",
              "Networking Opportunities",
              "Hands-on Environmental Experience",
              "Leadership Development",
              "Community Recognition",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-[#0F5132]" />

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-[800px] mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#0F5132] text-center">
              Volunteer Registration
            </h2>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <select className="w-full border rounded-xl px-4 py-3">
                <option>Select Interest</option>
                <option>Tree Plantation</option>
                <option>Wildlife Conservation</option>
                <option>Community Awareness</option>
              </select>

              <textarea
                rows="5"
                placeholder="Why do you want to volunteer?"
                className="w-full border rounded-xl px-4 py-3"
              ></textarea>

              <button
                type="submit"
                className="
                  w-full
                  bg-[#0F5132]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/volunteer-cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0F5132]/80"></div>

        <div className="relative z-10 text-center px-4">

          <h2 className="text-white text-5xl font-bold">
            Together We Can Make A Difference
          </h2>

          <p className="text-white/90 mt-5">
            Join thousands of volunteers working for nature.
          </p>

          <button
            className="
              mt-8
              bg-[#F5C542]
              px-6
              py-3
              rounded-xl
              font-semibold
              inline-flex
              items-center
              gap-2
            "
          >
            Become A Volunteer
            <FaArrowRight />
          </button>

        </div>
      </section>

    </div>
  );
};

export default Volunteer;