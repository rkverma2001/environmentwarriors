import { FaArrowRight } from "react-icons/fa";

import { useT } from "../../i18n/useT";

const images = ["/gallery1.png", "/gallery2.png", "/gallery3.png", "/gallery4.png"];

const WildlifeGallery = () => {
  const t = useT().home.gallery;
  const galleryImages = t.items.map((item, i) => ({ ...item, image: images[i] }));

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block bg-[#0F5132]/10 text-[#0F5132] px-4 py-2 rounded-full text-sm font-medium">
            {t.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F5132]">
            {t.heading}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-3xl
                group
                cursor-pointer
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[320px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  text-white
                "
              >
                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                  "
                >
                  {t.viewGallery}
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

export default WildlifeGallery;