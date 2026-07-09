import { useState } from "react";
import { FaTrophy, FaRedo } from "react-icons/fa";

import { useT } from "../i18n/useT";

const IMAGES = {
  dudhwa: "/dudhwanationalpark.png",
  kishanpur: "/kishanpur.png",
  katarniaghat: "/katarniaghat.png",
  pilibhit: "/pilibhit.png",
  tiger: "/dudhwatiger.png",
  rhino: "/dudhwarhino.png",
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(pairs) {
  const cards = [];
  pairs.forEach((p) => {
    const img = IMAGES[p.id];
    cards.push({ key: p.id + "-img", pairId: p.id, kind: "image", img, label: p.label });
    cards.push({ key: p.id + "-label", pairId: p.id, kind: "label", label: p.label });
  });
  return shuffle(cards);
}

const SpeciesMatch = () => {
  const t = useT().games.memory;
  const MEMORY_PAIRS = t.pairs;
  const [deck, setDeck] = useState(() => buildDeck(MEMORY_PAIRS));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const allMatched = matched.length === MEMORY_PAIRS.length;

  const flip = (index) => {
    if (locked) return;
    if (flipped.includes(index)) return;
    if (matched.includes(deck[index].pairId)) return;
    if (flipped.length === 2) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = newFlipped;

      if (deck[a].pairId === deck[b].pairId) {
        setMatched((m) => [...m, deck[a].pairId]);
        setFlipped([]);
      } else {
        setLocked(true);
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 800);
      }
    }
  };

  const reset = () => {
    setDeck(buildDeck(MEMORY_PAIRS));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setLocked(false);
  };

  if (allMatched) {
    return (
      <div className="max-w-[600px] mx-auto text-center py-8">
        <FaTrophy className="mx-auto text-5xl text-[#F5C542]" />
        <h3 className="text-2xl font-bold text-[#0F5132] mt-6">
          {t.allMatched} {moves} {t.movesSuffix}
        </h3>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
        >
          <FaRedo /> {t.playAgain}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[720px] mx-auto text-center">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-gray-500">
          {t.moves} {moves}
        </span>
        <button
          onClick={reset}
          className="flex items-center gap-2 text-sm font-semibold text-[#0F5132] hover:underline"
        >
          <FaRedo /> {t.restart}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {deck.map((card, index) => {
          const isFaceUp = flipped.includes(index) || matched.includes(card.pairId);
          const isMatched = matched.includes(card.pairId);

          return (
            <button
              key={card.key}
              onClick={() => flip(index)}
              className={`h-24 rounded-xl border flex items-center justify-center overflow-hidden transition ${
                isMatched
                  ? "border-green-600 bg-green-50"
                  : "border-[#0F5132]/20"
              }`}
            >
              {isFaceUp ? (
                card.kind === "image" ? (
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-semibold text-[#0F5132] px-2 leading-tight">
                    {card.label}
                  </span>
                )
              ) : (
                <span className="text-[#0F5132] text-2xl">🌿</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SpeciesMatch;
