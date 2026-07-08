import {
  FaLeaf,
  FaTree,
  FaUsers,
  FaGlobe,
  FaPaw,
  FaHandsHelping,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const values = [
    {
      icon: <FaPaw />,
      title: "Wildlife Protection",
      desc: "Protecting endangered species and preserving their natural habitats.",
    },
    {
      icon: <FaTree />,
      title: "Forest Conservation",
      desc: "Safeguarding forests and restoring ecosystems for future generations.",
    },
    {
      icon: <FaGlobe />,
      title: "Sustainability",
      desc: "Promoting environmentally responsible lifestyles and practices.",
    },
    {
      icon: <FaUsers />,
      title: "Community Impact",
      desc: "Empowering communities through awareness and participation.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Volunteerism",
      desc: "Encouraging people to become active protectors of nature.",
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Education",
      desc: "Spreading awareness to inspire meaningful action.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[450px] md:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
              About Environment Warriors
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Protecting Wildlife.
              <br />
              Preserving Forests.
              <br />
              Building A Sustainable Future.
            </h1>

            <p className="text-white/90 mt-6 max-w-2xl text-lg">
              Together we are creating awareness, conserving biodiversity,
              protecting forests and inspiring communities to protect nature.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about-story.jpg"
                alt="Our Story"
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
            </div>

            <div>
              <span className="text-[#0F5132] font-semibold uppercase tracking-wider">
                Our Story
              </span>

              <h2 className="text-4xl font-bold text-[#0F5132] mt-4">
                Creating Environment Warriors
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Environment Warriors was founded with a simple mission:
                empowering people to protect nature and secure the future.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Through environmental awareness campaigns, wildlife
                conservation, tree plantation drives and community engagement,
                we work towards creating a greener and healthier world.
              </p>

              <button className="mt-8 bg-[#0F5132] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#0a3d26] transition">
                Learn More
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0F5132]">
                Our Vision
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                A world where humans and nature coexist in harmony,
                ensuring a sustainable future for generations to come.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-[#0F5132]">
                Our Mission
              </h3>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✓ Protect Wildlife</li>
                <li>✓ Preserve Forest Ecosystems</li>
                <li>✓ Promote Environmental Awareness</li>
                <li>✓ Support Sustainable Development</li>
                <li>✓ Empower Communities</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              Our Core Values
            </h2>

            <p className="text-gray-600 mt-4">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#f8faf8] rounded-3xl p-8 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#0F5132] text-white flex items-center justify-center text-xl">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0F5132] mt-5">
                  {value.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {value.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#0F5132] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold">10M+</h3>
              <p className="mt-2 text-white/80">Trees Protected</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">500K+</h3>
              <p className="mt-2 text-white/80">Volunteers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">250+</h3>
              <p className="mt-2 text-white/80">Species Protected</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">150+</h3>
              <p className="mt-2 text-white/80">Projects Completed</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0F5132]/80"></div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Become An Environment Warrior
          </h2>

          <p className="text-white/90 mt-5 max-w-2xl mx-auto">
            Join us in protecting forests, wildlife and future generations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-[#F5C542] text-black px-6 py-3 rounded-xl font-semibold">
              Become Volunteer
            </button>

            <button className="border border-white text-white px-6 py-3 rounded-xl font-semibold">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;