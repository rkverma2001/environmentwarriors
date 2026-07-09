import { useState } from "react";
import { FaTrophy, FaRedo } from "react-icons/fa";

import { useT } from "../i18n/useT";

const IMAGE = "/dudhwatiger.png";
const SIZE = 3;
const BLANK = SIZE * SIZE - 1;
const SOLVED = Array.from({ length: SIZE * SIZE }, (_, i) => i);

function isSolved(board) {
  return board.every((tile, i) => tile === SOLVED[i]);
}

function shuffledBoard() {
  let board = [...SOLVED];
  let blankIndex = BLANK;

  for (let i = 0; i < 150; i++) {
    const row = Math.floor(blankIndex / SIZE);
    const col = blankIndex % SIZE;
    const neighbors = [];

    if (row > 0) neighbors.push(blankIndex - SIZE);
    if (row < SIZE - 1) neighbors.push(blankIndex + SIZE);
    if (col > 0) neighbors.push(blankIndex - 1);
    if (col < SIZE - 1) neighbors.push(blankIndex + 1);

    const swapWith = neighbors[Math.floor(Math.random() * neighbors.length)];
    [board[blankIndex], board[swapWith]] = [board[swapWith], board[blankIndex]];
    blankIndex = swapWith;
  }

  return board;
}

const WildlifePuzzle = () => {
  const t = useT().games.puzzle;
  const [board, setBoard] = useState(shuffledBoard);
  const [moves, setMoves] = useState(0);

  const solved = isSolved(board);

  const tileClick = (index) => {
    if (solved) return;

    const blankIndex = board.indexOf(BLANK);
    const row = Math.floor(index / SIZE);
    const col = index % SIZE;
    const blankRow = Math.floor(blankIndex / SIZE);
    const blankCol = blankIndex % SIZE;

    const isAdjacent =
      (row === blankRow && Math.abs(col - blankCol) === 1) ||
      (col === blankCol && Math.abs(row - blankRow) === 1);

    if (!isAdjacent) return;

    const next = [...board];
    [next[index], next[blankIndex]] = [next[blankIndex], next[index]];
    setBoard(next);
    setMoves((m) => m + 1);
  };

  const reset = () => {
    setBoard(shuffledBoard());
    setMoves(0);
  };

  return (
    <div className="max-w-[520px] mx-auto text-center">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-500">
          {t.moves} {moves}
        </span>

        <button
          onClick={reset}
          className="flex items-center gap-2 text-sm font-semibold text-[#0F5132] hover:underline"
        >
          <FaRedo /> {t.reshuffle}
        </button>
      </div>

      {solved && (
        <div className="mb-4 bg-[#F5C542]/20 border border-[#F5C542] text-[#0F5132] rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-semibold">
          <FaTrophy className="text-[#F5C542]" />
          {t.solvedIn} {moves} {t.movesSuffix}
        </div>
      )}

      <div
        className="grid gap-1 mx-auto bg-[#0F5132] rounded-2xl overflow-hidden p-1"
        style={{
          gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
          width: 360,
          height: 360,
        }}
      >
        {board.map((tile, index) => {
          if (tile === BLANK) {
            return <div key={index} className="bg-[#f8faf8] rounded-lg" />;
          }

          const tileRow = Math.floor(tile / SIZE);
          const tileCol = tile % SIZE;

          return (
            <button
              key={index}
              onClick={() => tileClick(index)}
              className="rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${IMAGE})`,
                backgroundSize: `${SIZE * 100}% ${SIZE * 100}%`,
                backgroundPosition: `${(tileCol / (SIZE - 1)) * 100}% ${
                  (tileRow / (SIZE - 1)) * 100
                }%`,
              }}
            />
          );
        })}
      </div>

      <p className="text-gray-500 text-sm mt-4">
        {t.instructions}
      </p>
    </div>
  );
};

export default WildlifePuzzle;
