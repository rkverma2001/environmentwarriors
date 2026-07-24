import { useEffect, useState } from "react";
import { FaTrophy, FaRedo, FaClock } from "react-icons/fa";

import { useT } from "../i18n/useT";

const TIME_PER_QUESTION = 20;

const Quiz = () => {
  const t = useT().quiz;
  const QUIZ_QUESTIONS = t.questions;

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  const question = QUIZ_QUESTIONS[step];

  useEffect(() => {
    if (done || selected !== null || timeLeft <= 0) return undefined;

    const timer = setTimeout(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          setSelected(-1);
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selected, done]);

  const choose = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setStep((s) => s + 1);
      setSelected(null);
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setTimeLeft(TIME_PER_QUESTION);
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
            {t.hero.badge}
          </span>

          <h1 className="text-white text-4xl md:text-5xl font-bold mt-6">
            {t.hero.heading}
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Quiz Card */}
      <section className="py-16 lg:py-20 bg-[#f8faf8]">
        <div className="max-w-[700px] mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8">

            {!done ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500">
                    {t.questionOf} {step + 1} {t.of} {QUIZ_QUESTIONS.length}
                  </span>

                  <span className="text-sm font-semibold text-[#0F5132]">
                    {t.score} {score}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <FaClock
                    className={selected === null && timeLeft <= 5 ? "text-red-500" : "text-[#0F5132]"}
                  />

                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                        selected === null && timeLeft <= 5 ? "bg-red-500" : "bg-[#0F5132]"
                      }`}
                      style={{ width: `${(Math.max(timeLeft, 0) / TIME_PER_QUESTION) * 100}%` }}
                    />
                  </div>

                  <span
                    className={`text-sm font-semibold w-16 text-right ${
                      selected === null && timeLeft <= 5 ? "text-red-500" : "text-gray-500"
                    }`}
                  >
                    {selected !== null && timeLeft <= 0 ? t.timeUp : `${t.timeLeft}: ${Math.max(timeLeft, 0)}s`}
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
                      ? t.nextQuestion
                      : t.seeResults}
                  </button>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <FaTrophy className="mx-auto text-5xl text-[#F5C542]" />

                <h2 className="text-2xl font-bold text-[#0F5132] mt-6">
                  {t.youScored} {score} / {QUIZ_QUESTIONS.length}
                </h2>

                <p className="text-gray-600 mt-3">
                  {score === QUIZ_QUESTIONS.length
                    ? t.perfectScore
                    : t.keepExploring}
                </p>

                <button
                  onClick={restart}
                  className="mt-8 inline-flex items-center gap-2 bg-[#0F5132] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c4028] transition"
                >
                  <FaRedo /> {t.playAgain}
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
