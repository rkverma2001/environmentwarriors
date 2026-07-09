import { useEffect, useState } from "react";
import { FaPaw, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaRedo } from "react-icons/fa";

import { useT } from "../i18n/useT";

const STORAGE_KEY = "ew-species-tracker-v1";

const emptyForm = { species: "", sanctuary: "", name: "", date: "", notes: "" };

const Tracker = () => {
  const t = useT();
  const tt = t.tracker;
  const nav = t.nav;

  const sanctuaryNames = Object.values(nav.sanctuaryNames);

  const seedSightings = tt.seedSightings.map((s) => ({
    species: tt.speciesList.find((sp) => sp.id === s.speciesId).name,
    sanctuary: nav.sanctuaryNames[s.sanctuarySlug],
    name: s.name,
    date: s.date,
    notes: s.notes,
  }));

  function loadSightings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // ignore corrupt storage
    }
    return seedSightings;
  }

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
    setSightings(seedSightings);
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
            {tt.hero.badge}
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            {tt.hero.heading}
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            {tt.hero.description}
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
                  {tt.form.heading}
                </h2>

                <form onSubmit={submit} className="space-y-4">
                  <select
                    value={form.species}
                    onChange={(e) => update("species", e.target.value)}
                    required
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="">{tt.form.selectSpecies}</option>
                    {tt.speciesList.map((s) => (
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
                    <option value="">{tt.form.selectSanctuary}</option>
                    {sanctuaryNames.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder={tt.form.yourName}
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
                    placeholder={tt.form.notes}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className="w-full border rounded-xl px-4 py-3"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#0F5132] text-white py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                  >
                    {tt.form.submit}
                  </button>
                </form>
              </div>

              <div className="bg-[#f8faf8] rounded-3xl p-8 border">
                <h3 className="font-bold text-[#0F5132] mb-4">
                  {tt.tally.heading}
                </h3>

                {topSpecies.length === 0 ? (
                  <p className="text-gray-500 text-sm">{tt.tally.empty}</p>
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
                  <FaRedo /> {tt.tally.resetDemo}
                </button>
              </div>
            </div>

            {/* Right: feed */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F5132] mb-5">
                {tt.feed.heading}
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
