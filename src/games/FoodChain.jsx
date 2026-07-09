import { useState } from "react";
import { FaArrowRight, FaTrophy, FaRedo } from "react-icons/fa";

const FOOD_CHAINS = [
  {
    name: "Grassland Chain",
    items: ["Terai Grassland Vegetation", "Chital (Spotted Deer)", "Bengal Tiger"],
  },
  {
    name: "Wetland Chain",
    items: ["Aquatic Plants", "Fish", "Gharial"],
  },
  {
    name: "Forest-Edge Chain",
    items: ["Forest Shrubs & Grasses", "Swamp Deer (Barasingha)", "Leopard"],
  },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FoodChain = () => {
  const [chainIndex, setChainIndex] = useState(0);
  const [pool, setPool] = useState(() => shuffle(FOOD_CHAINS[0].items));
  const [built, setBuilt] = useState([]);
  const [wrongItem, setWrongItem] = useState(null);
  const [allDone, setAllDone] = useState(false);

  const chain = FOOD_CHAINS[chainIndex];
  const nextExpected = chain.items[built.length];

  const pick = (item) => {
    if (wrongItem) return;

    if (item === nextExpected) {
      const newBuilt = [...built, item];
      setBuilt(newBuilt);
      setPool((p) => p.filter((i) => i !== item));

      if (newBuilt.length === chain.items.length) {
        setTimeout(() => {
          if (chainIndex + 1 < FOOD_CHAINS.length) {
            const next = chainIndex + 1;
            setChainIndex(next);
            setPool(shuffle(FOOD_CHAINS[next].items));
            setBuilt([]);
          } else {
            setAllDone(true);
          }
        }, 700);
      }
    } else {
      setWrongItem(item);
      setTimeout(() => setWrongItem(null), 600);
    }
  };

  const reset = () => {
    setChainIndex(0);
    setPool(shuffle(FOOD_CHAINS[0].items));
    setBuilt([]);
    setWrongItem(null);
    setAllDone(false);
  };

  if (allDone) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-8">
        <FaTrophy className="mx-auto text-5xl text-[#F5C542]" />
        <h3 className="text-2xl font-bold text-[#0F5132] mt-6">
          All food chains complete!
        </h3>
        <p className="text-gray-600 mt-3">
          Producer → Consumer → Predator, across grassland, wetland and
          forest-edge habitats.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
        >
          <FaRedo /> Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[700px] mx-auto text-center">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-gray-500">
          Chain {chainIndex + 1} of {FOOD_CHAINS.length}
        </span>
        <span className="text-sm font-semibold text-[#0F5132]">
          {chain.name}
        </span>
      </div>

      <p className="text-gray-600 mb-6">
        Click the items in order: Producer → Consumer → Predator
      </p>

      {/* Built chain */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 min-h-[48px]">
        {built.length === 0 && (
          <span className="text-gray-400 text-sm">
            Nothing built yet — start below.
          </span>
        )}
        {built.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <span className="bg-[#0F5132] text-white px-4 py-2 rounded-full text-sm font-medium">
              {item}
            </span>
            {index < built.length - 1 && (
              <FaArrowRight className="text-[#0F5132]" />
            )}
          </div>
        ))}
      </div>

      {/* Pool */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {pool.map((item) => (
          <button
            key={item}
            onClick={() => pick(item)}
            className={`px-5 py-3 rounded-xl border font-medium transition ${
              wrongItem === item
                ? "border-red-500 bg-red-50 text-red-600"
                : "hover:border-[#0F5132] hover:bg-[#0F5132]/5"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodChain;
