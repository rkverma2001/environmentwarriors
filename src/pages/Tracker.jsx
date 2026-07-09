import { useEffect, useState } from "react";
import { FaPaw, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaRedo } from "react-icons/fa";

const SPECIES_LIST = [
  { id: "tiger", name: "Bengal Tiger", sanctuaries: ["Dudhwa", "Kishanpur", "Katarniaghat", "Pilibhit"] },
  { id: "rhino", name: "One-Horned Rhino", sanctuaries: ["Dudhwa"] },
  { id: "barasingha", name: "Swamp Deer (Barasingha)", sanctuaries: ["Dudhwa", "Kishanpur"] },
  { id: "elephant", name: "Asian Elephant", sanctuaries: ["Dudhwa", "Kishanpur", "Katarniaghat", "Pilibhit"] },
  { id: "leopard", name: "Leopard", sanctuaries: ["Dudhwa", "Kishanpur", "Katarniaghat", "Pilibhit"] },
  { id: "slothbear", name: "Sloth Bear", sanctuaries: ["Dudhwa"] },
  { id: "fishingcat", name: "Fishing Cat", sanctuaries: ["Dudhwa", "Pilibhit"] },
  { id: "gharial", name: "Gharial", sanctuaries: ["Katarniaghat", "Kishanpur"] },
  { id: "dolphin", name: "Gangetic River Dolphin", sanctuaries: ["Katarniaghat"] },
  { id: "mugger", name: "Marsh Mugger Crocodile", sanctuaries: ["Katarniaghat"] },
  { id: "hogdeer", name: "Hog Deer", sanctuaries: ["Dudhwa", "Kishanpur", "Pilibhit"] },
  { id: "chital", name: "Chital (Spotted Deer)", sanctuaries: ["Dudhwa", "Kishanpur"] },
  { id: "otter", name: "Otter", sanctuaries: ["Kishanpur"] },
  { id: "florican", name: "Bengal Florican", sanctuaries: ["Dudhwa", "Kishanpur"] },
  { id: "saruscrane", name: "Sarus Crane", sanctuaries: ["Dudhwa", "Kishanpur"] },
  { id: "paintedstork", name: "Painted Stork", sanctuaries: ["Kishanpur"] },
];

const SANCTUARY_NAMES = [
  "Dudhwa National Park",
  "Kishanpur Wildlife Sanctuary",
  "Katarniaghat Wildlife Sanctuary",
  "Pilibhit Tiger Reserve",
];

const STORAGE_KEY = "ew-species-tracker-v1";

const SEED_SIGHTINGS = [
  {
    species: "Bengal Tiger",
    sanctuary: "Dudhwa National Park",
    name: "Ramesh K.",
    date: "2026-06-14",
    notes: "Crossing Sathiana grassland at dawn.",
  },
  {
    species: "Gharial",
    sanctuary: "Katarniaghat Wildlife Sanctuary",
    name: "Anjali T.",
    date: "2026-06-10",
    notes: "Basking on a sandbank along the Girwa.",
  },
  {
    species: "Swamp Deer (Barasingha)",
    sanctuary: "Kishanpur Wildlife Sanctuary",
    name: "Priya S.",
    date: "2026-06-02",
    notes: "Herd of 200+ at Jhadi Tal.",
  },
];

function loadSightings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore corrupt storage
  }
  return SEED_SIGHTINGS;
}

const emptyForm = { species: "", sanctuary: "", name: "", date: "", notes: "" };

const Tracker = () => {
  const [sightings, setSightings] = useState(loadSightings);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sightings));
  }, [sightings]);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.species || !form.sanctuary || !form.name || !form.date) return;
    setSightings((s) => [{ ...form }, ...s]);
    setForm(emptyForm);
  };

  const resetDemo = () => {
    setSightings(SEED_SIGHTINGS);
  };

  const tally = sightings.reduce((acc, s) => {
    acc[s.species] = (acc[s.species] || 0) + 1;
    return acc;
  }, {});

  const topSpecies = Object.entries(tally)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[380px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Citizen Science
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            Species Spotting Tracker
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            A shared, growing log of wildlife sightings across our four
            sanctuaries — logged by visitors like you.
          </p>
        </div>
      </section>

      {/* Form + Feed */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">

            {/* Left: form + tally */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-lg p-8 border">
                <h2 className="text-2xl font-bold text-[#0F5132] mb-5">
                  Log a Sighting
                </h2>

                <form onSubmit={submit} className="space-y-4">
                  <select
                    value={form.species}
                    onChange={(e) => update("species", e.target.value)}
                    required
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="">Select Species</option>
                    {SPECIES_LIST.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={form.sanctuary}
                    onChange={(e) => update("sanctuary", e.target.value)}
                    required
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="">Select Sanctuary</option>
                    {SANCTUARY_NAMES.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    required
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <textarea
                    rows={3}
                    placeholder="Notes (optional)"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className="w-full border rounded-xl px-4 py-3"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#0F5132] text-white py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                  >
                    Log Sighting
                  </button>
                </form>
              </div>

              <div className="bg-[#f8faf8] rounded-3xl p-8 border">
                <h3 className="font-bold text-[#0F5132] mb-4">
                  Most-Logged Species
                </h3>

                {topSpecies.length === 0 ? (
                  <p className="text-gray-500 text-sm">No sightings yet.</p>
                ) : (
                  <ul className="space-y-2">
                    {topSpecies.map(([species, count]) => (
                      <li
                        key={species}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-700">{species}</span>
                        <span className="font-semibold text-[#0F5132]">
                          {count}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={resetDemo}
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#0F5132]"
                >
                  <FaRedo /> Reset Demo Data
                </button>
              </div>
            </div>

            {/* Right: feed */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F5132] mb-5">
                Recent Sightings
              </h2>

              <div className="space-y-4">
                {sightings.map((s, index) => (
                  <div
                    key={index}
                    className="bg-[#f8faf8] rounded-2xl p-5 border flex gap-4"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#0F5132]/10 flex items-center justify-center flex-shrink-0">
                      <FaPaw className="text-[#0F5132]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-semibold text-[#0F5132]">
                          {s.species}
                        </h4>

                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <FaCalendarAlt />
                          {s.date}
                        </span>
                      </div>

                      <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                        <FaMapMarkerAlt />
                        {s.sanctuary}
                        <span className="mx-1">·</span>
                        <FaUser />
                        {s.name}
                      </p>

                      {s.notes && (
                        <p className="text-gray-600 text-sm mt-2">
                          {s.notes}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Tracker;
