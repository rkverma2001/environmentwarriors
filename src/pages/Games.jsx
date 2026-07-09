import { useState } from "react";
import { FaPuzzlePiece, FaLink, FaMapMarkedAlt, FaClone } from "react-icons/fa";

import WildlifePuzzle from "../games/WildlifePuzzle";
import FoodChain from "../games/FoodChain";
import HabitatMatch from "../games/HabitatMatch";
import SpeciesMatch from "../games/SpeciesMatch";

const GAMES = [
  {
    id: "puzzle",
    icon: FaPuzzlePiece,
    title: "Wildlife Puzzle",
    description: "Slide the tiles to restore the tiger photo.",
    component: WildlifePuzzle,
  },
  {
    id: "foodchain",
    icon: FaLink,
    title: "Food Chain",
    description: "Build 3 real Terai food chains in order.",
    component: FoodChain,
  },
  {
    id: "habitat",
    icon: FaMapMarkedAlt,
    title: "Habitat Match",
    description: "Match species to their core habitat.",
    component: HabitatMatch,
  },
  {
    id: "memory",
    icon: FaClone,
    title: "Species Match",
    description: "Classic memory match with real sanctuary photos.",
    component: SpeciesMatch,
  },
];

const Games = () => {
  const [active, setActive] = useState("puzzle");

  const ActiveGame = GAMES.find((g) => g.id === active).component;

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[360px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Play & Learn
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            Wildlife Games
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            Four mini-games built from real sanctuary and species facts.
          </p>
        </div>
      </section>

      {/* Game Selector */}
      <section className="py-16 lg:py-20 bg-[#f8faf8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {GAMES.map((g) => {
              const Icon = g.icon;
              const isActive = active === g.id;

              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g.id)}
                  className={`text-left rounded-2xl p-6 border transition ${
                    isActive
                      ? "bg-[#0F5132] text-white border-[#0F5132]"
                      : "bg-white hover:border-[#0F5132] hover:shadow-md"
                  }`}
                >
                  <Icon
                    className={`text-2xl mb-4 ${
                      isActive ? "text-[#F5C542]" : "text-[#0F5132]"
                    }`}
                  />

                  <h3
                    className={`font-bold ${
                      isActive ? "text-white" : "text-[#0F5132]"
                    }`}
                  >
                    {g.title}
                  </h3>

                  <p
                    className={`text-sm mt-2 ${
                      isActive ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {g.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <ActiveGame />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Games;
