import {
  FaLeaf,
  FaUsers,
  FaTree,
  FaPaw,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import { useT } from "../i18n/useT";
import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const whyIcons = [
  <FaLeaf className="text-[#0F5132] text-4xl" />,
  <FaUsers className="text-[#0F5132] text-4xl" />,
  <FaTree className="text-[#0F5132] text-4xl" />,
];
const opportunityIcons = [<FaTree />, <FaPaw />, <FaUsers />];

const Volunteer = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhar: "",
    address: "",
    socialMedia: "",
    interest: "",
    whyVolunteer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/volunteer/register", formData);

      toast.success(data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        aadhar: "",
        address: "",
        socialMedia: "",
        interest: "",
        whyVolunteer: "",
      });
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const t = useT().volunteer;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[450px] md:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/events/dec-2025/DSC04844.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
              {t.hero.badge}
            </span>

            <h1 className="text-white text-5xl md:text-6xl font-bold mt-6">
              {t.hero.heading}
            </h1>

            <p className="text-white/90 mt-5 max-w-2xl text-lg">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.why.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.why.items.map((item, index) => (
              <div key={item.title} className="bg-[#f8faf8] p-8 rounded-3xl">
                {whyIcons[index]}

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 bg-[#f8faf8]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.opportunities.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.opportunities.items.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="text-[#0F5132] text-4xl">
                  {opportunityIcons[index]}
                </div>

                <h3 className="text-xl font-bold mt-5">{item.title}</h3>

                <p className="text-gray-600 mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F5132]">
              {t.gallery.heading}
            </h2>

            <p className="text-gray-600 mt-4">{t.gallery.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/events/dec-2025/DSC04668.JPG",
              "/events/dec-2025/DSC04707.JPG",
              "/events/dec-2025/DSC04908.JPG",
              "/events/dec-2025/DSC04876.JPG",
            ].map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                className="w-full h-[220px] object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-[#0F5132] mb-12">
            {t.benefits.heading}
          </h2>

          <div className="space-y-5">
            {t.benefits.items.map((item) => (
              <div key={item} className="flex items-center gap-4">
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
              {t.form.heading}
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.form.fullName}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.form.email}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                  setFormData((prev) => ({
                    ...prev,
                    phone: value,
                  }));
                }}
                placeholder={t.form.phone}
                maxLength={10}
                pattern="[6-9][0-9]{9}"
                inputMode="numeric"
                required
                title="Please enter a valid 10-digit mobile number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                maxLength={12}
                pattern="[0-9]{12}"
                inputMode="numeric"
                placeholder={t.form.aadhar}
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t.form.address}
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="text"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder={t.form.social}
                className="w-full border rounded-xl px-4 py-3"
              />

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="">{t.form.selectInterest}</option>

                <option value="Tree Plantation">{t.form.interestTree}</option>

                <option value="Wildlife Conservation">
                  {t.form.interestWildlife}
                </option>

                <option value="Community Service">
                  {t.form.interestCommunity}
                </option>
              </select>

              <textarea
                rows="5"
                name="whyVolunteer"
                value={formData.whyVolunteer}
                onChange={handleChange}
                placeholder={t.form.why}
                className="w-full border rounded-xl px-4 py-3"
              />

              <p className="text-xs text-gray-500">{t.form.privacyNote}</p>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0F5132] text-white py-4 rounded-xl font-semibold disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Submitting..." : t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/events/dec-2025/DSC04744.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-[#0F5132]/80"></div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-5xl font-bold">{t.cta.heading}</h2>

          <p className="text-white/90 mt-5">{t.cta.description}</p>

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
            {t.cta.becomeVolunteer}
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
