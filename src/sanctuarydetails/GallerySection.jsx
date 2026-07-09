import { useT } from "../i18n/useT";

const GallerySection = ({ gallery }) => {
  const t = useT().sanctuaryDetail;

  return (
    <section className="py-20 bg-[#f8faf8]">

      <div className="max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
          {t.sanctuaryGallery}
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="
                w-full
                h-[250px]
                object-cover
                rounded-2xl
              "
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default GallerySection;