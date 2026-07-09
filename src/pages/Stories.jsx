import { useState } from "react";
import { FaCamera, FaCheckCircle, FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";

import sanctuariesData from "../data/sanctuariesData";

const sanctuaryNames = Object.values(sanctuariesData).map((s) => s.name);

const initialStories = [
  {
    name: "Ramesh K.",
    location: "Dudhwa National Park",
    species: "Bengal Tiger",
    story:
      "Spotted a tigress with two cubs crossing the Sathiana grassland at dawn — a quiet reminder of why this forest is worth protecting.",
  },
  {
    name: "Priya S.",
    location: "Kishanpur Wildlife Sanctuary",
    species: "Swamp Deer (Barasingha)",
    story:
      "Watched a herd of over 200 barasingha grazing at Jhadi Tal during golden hour. Unforgettable.",
  },
];

const emptyForm = { name: "", location: "", species: "", story: "" };

const Stories = () => {
  const [stories, setStories] = useState(initialStories);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.story) return;
    setStories((s) => [{ ...form }, ...s]);
    setForm(emptyForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[420px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Community Voices
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            Share Your Wildlife Story
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            Had a memorable wildlife sighting or conservation moment in one
            of our sanctuaries? Tell us about it.
          </p>
        </div>
      </section>

      {/* Form + Stories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">

            {/* Submission Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 h-fit border">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-5">
                Submit Your Story
              </h2>

              {submitted && (
                <p className="text-[#0F5132] font-semibold flex items-center gap-2 mb-4">
                  <FaCheckCircle /> Thanks for sharing! Your story was added
                  below (demo only).
                </p>
              )}

              <form onSubmit={submit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                  className="w-full border rounded-xl px-4 py-3"
                />

                <select
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                >
                  <option value="">Where did this happen?</option>
                  {sanctuaryNames.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                  <option>Elsewhere</option>
                </select>

                <input
                  type="text"
                  placeholder="Species Sighted (optional)"
                  value={form.species}
                  onChange={(e) => update("species", e.target.value)}
                  className="w-full border rounded-xl px-4 py-3"
                />

                <textarea
                  rows={5}
                  placeholder="Tell us your story..."
                  value={form.story}
                  onChange={(e) => update("story", e.target.value)}
                  required
                  className="w-full border rounded-xl px-4 py-3"
                ></textarea>

                <div className="border border-dashed rounded-xl p-6 text-center text-gray-400 text-sm">
                  <FaCamera className="mx-auto text-lg mb-2" />
                  Photo upload (demo placeholder)
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F5132] text-white py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                >
                  Submit Story
                </button>
              </form>
            </div>

            {/* Story List */}
            <div className="space-y-6">
              {stories.map((s, index) => (
                <div
                  key={index}
                  className="bg-[#f8faf8] rounded-2xl p-6 border"
                >
                  <div className="flex items-center gap-3">
                    <FaUserCircle className="text-[#0F5132] text-3xl" />

                    <div>
                      <h3 className="font-semibold text-[#0F5132]">
                        {s.name}
                      </h3>

                      <p className="text-gray-500 text-xs flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {s.location || "Elsewhere"}
                        {s.species ? ` · ${s.species}` : ""}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {s.story}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
