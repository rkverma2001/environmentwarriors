import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const events = [
  {
    image: "/event1.png",
    title: "Plantation Drive 2026",
    date: "25 May 2026",
    location: "Dudhwa National Park",
  },
  {
    image: "/event2.png",
    title: "Wildlife Awareness Walk",
    date: "15 June 2026",
    location: "Pilibhit Tiger Reserve",
  },
  {
    image: "/event3.png",
    title: "River Cleanup Mission",
    date: "30 June 2026",
    location: "Sharda River Basin",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-medium">
            UPCOMING EVENTS
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F5132]">
            Join Our Conservation Activities
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Participate in our upcoming events and become a part of
            the movement to protect nature and wildlife.
          </p>

        </div>

        {/* Featured Event */}
        <div className="relative overflow-hidden rounded-3xl mb-10">

          <img
            src="/featuredevents.png"
            alt="Plantation Drive"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/90 via-[#0F5132]/60 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[600px] px-8 lg:px-16 text-white">

              <span className="bg-[#F5C542] text-black px-4 py-2 rounded-full text-sm font-semibold">
                FEATURED EVENT
              </span>

              <h3 className="mt-5 text-3xl md:text-5xl font-bold">
                Join Our Plantation Drive
              </h3>

              <div className="flex flex-wrap gap-6 mt-6">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>25 May 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>Dudhwa National Park</span>
                </div>

              </div>

              <p className="mt-5 text-white/90 leading-relaxed">
                Help us plant thousands of trees and contribute
                towards restoring forest ecosystems and combating
                climate change.
              </p>

              <button
                className="
                  mt-6
                  bg-[#F5C542]
                  text-black
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  hover:bg-[#e7b531]
                  transition
                "
              >
                Register Now
                <FaArrowRight />
              </button>

            </div>
          </div>

        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {events.map((event, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
              "
            >

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[240px] object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl text-[#0F5132]">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
                  <FaCalendarAlt />
                  {event.date}
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt />
                  {event.location}
                </div>

                <button
                  className="
                    mt-5
                    text-[#0F5132]
                    font-semibold
                    flex
                    items-center
                    gap-2
                  "
                >
                  View Details
                  <FaArrowRight />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;