import { useState } from "react";
import { FaTrophy, FaRedo } from "react-icons/fa";

const QUIZ_QUESTIONS = [
  {
    q: "Which two species famously coexist only in Dudhwa National Park, nowhere else in Uttar Pradesh?",
    options: [
      "Tiger & Leopard",
      "Tiger & One-Horned Rhino",
      "Elephant & Gharial",
      "Rhino & Gharial",
    ],
    answer: 1,
  },
  {
    q: "Kishanpur Wildlife Sanctuary is often nicknamed what, for its dense tiger population?",
    options: [
      "Bird Paradise",
      "Tiger Territory",
      "The Green Corridor",
      "Deer Valley",
    ],
    answer: 1,
  },
  {
    q: "Which sanctuary is one of the few places in India where the Gangetic river dolphin and the gharial share the same river?",
    options: [
      "Pilibhit Tiger Reserve",
      "Dudhwa National Park",
      "Katarniaghat Wildlife Sanctuary",
      "Kishanpur Wildlife Sanctuary",
    ],
    answer: 2,
  },
  {
    q: "Pilibhit Tiger Reserve is part of which cross-border wildlife corridor?",
    options: [
      "Western Ghats Corridor",
      "Terai Arc Landscape",
      "Sundarbans Corridor",
      "Deccan Plateau Corridor",
    ],
    answer: 1,
  },
  {
    q: "The swamp deer (barasingha) — Uttar Pradesh's state animal — gathers in its largest herds at which wetland?",
    options: [
      "Jhadi Tal in Kishanpur",
      "Girwa river in Katarniaghat",
      "Sharda river in Pilibhit",
      "Neora river in Dudhwa",
    ],
    answer: 0,
  },
  {
    q: "In what year was Katarniaghat Wildlife Sanctuary established?",
    options: ["1958", "1972", "1976", "2014"],
    answer: 2,
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUIZ_QUESTIONS[step];

  const choose = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setStep((s) => s + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-[360px] flex items-center"
        style={{ background: "linear-gradient(135deg,#0F5132,#0B2E1F)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Test Your Knowledge
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            Eco-Trivia
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            How well do you know the Terai's tigers, rhinos and wetlands?
          </p>
        </div>
      </section>

      {/* Quiz Card */}
      <section className="py-16 lg:py-20 bg-[#f8faf8]">
        <div className="max-w-[700px] mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8">

            {!done ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-500">
                    Question {step + 1} of {QUIZ_QUESTIONS.length}
                  </span>

                  <span className="text-sm font-semibold text-[#0F5132]">
                    Score: {score}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0F5132] mb-6">
                  {question.q}
                </h2>

                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selected === index;
                    const isCorrect = index === question.answer;

                    let stateClasses =
                      "border hover:border-[#0F5132] hover:bg-[#0F5132]/5";

                    if (selected !== null) {
                      if (isCorrect) {
                        stateClasses =
                          "border-green-600 bg-green-50 text-green-700";
                      } else if (isSelected) {
                        stateClasses =
                          "border-red-500 bg-red-50 text-red-600";
                      } else {
                        stateClasses = "border opacity-60";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => choose(index)}
                        className={`w-full text-left px-5 py-3 rounded-xl transition ${stateClasses}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <button
                    onClick={next}
                    className="mt-8 w-full bg-[#0F5132] text-white py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                  >
                    {step + 1 < QUIZ_QUESTIONS.length
                      ? "Next Question"
                      : "See Results"}
                  </button>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <FaTrophy className="mx-auto text-5xl text-[#F5C542]" />

                <h2 className="text-2xl font-bold text-[#0F5132] mt-6">
                  You scored {score} / {QUIZ_QUESTIONS.length}
                </h2>

                <p className="text-gray-600 mt-3">
                  {score === QUIZ_QUESTIONS.length
                    ? "Perfect score — a true Environment Warrior!"
                    : "Keep exploring our sanctuaries to learn more."}
                </p>

                <button
                  onClick={restart}
                  className="mt-8 inline-flex items-center gap-2 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                >
                  <FaRedo /> Play Again
                </button>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
