import { useState } from "react";
import { FaTrophy, FaRedo, FaCheck } from "react-icons/fa";

const HABITAT_PAIRS = [
  { id: "tiger", animal: "Bengal Tiger", habitat: "Forest & Tall Grassland" },
  { id: "gharial", animal: "Gharial", habitat: "River Sandbanks" },
  { id: "barasingha", animal: "Swamp Deer (Barasingha)", habitat: "Wetland Marshes" },
  { id: "elephant", animal: "Asian Elephant", habitat: "Dense Sal Forest" },
  { id: "dolphin", animal: "Gangetic River Dolphin", habitat: "Deep River Channels" },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const HabitatMatch = () => {
  const [habitats] = useState(() => shuffle(HABITAT_PAIRS));
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedHabitat, setSelectedHabitat] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState(false);

  const allMatched = matched.length === HABITAT_PAIRS.length;

  const evaluate = (animalId, habitatId) => {
    if (animalId === habitatId) {
      setMatched((m) => [...m, animalId]);
      setSelectedAnimal(null);
      setSelectedHabitat(null);
    } else {
      setWrongPair(true);
      setTimeout(() => {
        setWrongPair(false);
        setSelectedAnimal(null);
        setSelectedHabitat(null);
      }, 600);
    }
  };

  const pickAnimal = (id) => {
    if (matched.includes(id) || wrongPair) return;
    setSelectedAnimal(id);
    if (selectedHabitat) evaluate(id, selectedHabitat);
  };

  const pickHabitat = (id) => {
    if (matched.includes(id) || wrongPair) return;
    setSelectedHabitat(id);
    if (selectedAnimal) evaluate(selectedAnimal, id);
  };

  const reset = () => {
    setSelectedAnimal(null);
    setSelectedHabitat(null);
    setMatched([]);
    setWrongPair(false);
  };

  if (allMatched) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-8">
        <FaTrophy className="mx-auto text-5xl text-[#F5C542]" />
        <h3 className="text-2xl font-bold text-[#0F5132] mt-6">
          All species matched to their habitats!
        </h3>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
        >
          <FaRedo /> Play Again
        </button>
      </div>
    );
  }

  const cellClasses = (id, isSelected) => {
    if (matched.includes(id)) return "border-green-600 bg-green-50 text-green-700";
    if (wrongPair && isSelected) return "border-red-500 bg-red-50 text-red-600";
    if (isSelected) return "border-[#0F5132] bg-[#0F5132]/5";
    return "border hover:border-[#0F5132] hover:bg-[#0F5132]/5";
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <p className="text-center text-gray-600 mb-8">
        Click a species, then click its matching habitat.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          {HABITAT_PAIRS.map((p) => (
            <button
              key={p.id}
              onClick={() => pickAnimal(p.id)}
              disabled={matched.includes(p.id)}
              className={`w-full text-left px-5 py-4 rounded-xl border font-medium transition flex items-center justify-between ${cellClasses(
                p.id,
                selectedAnimal === p.id
              )}`}
            >
              {p.animal}
              {matched.includes(p.id) && <FaCheck />}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {habitats.map((p) => (
            <button
              key={p.id}
              onClick={() => pickHabitat(p.id)}
              disabled={matched.includes(p.id)}
              className={`w-full text-left px-5 py-4 rounded-xl border font-medium transition flex items-center justify-between ${cellClasses(
                p.id,
                selectedHabitat === p.id
              )}`}
            >
              {p.habitat}
              {matched.includes(p.id) && <FaCheck />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HabitatMatch;
