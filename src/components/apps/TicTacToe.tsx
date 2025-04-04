import React from "react";
import AppWindow from "./AppWindow";
import UseTicTacToeLogic from "../../hooks/UseTicTacToeLogic";

const TicTacToe = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const {
    resetGame,
    handleClick,
    setDifficulty,
    difficulty,
    board,
    currentPlayer,
    winner,
    colorScheme,
  } = UseTicTacToeLogic();

  return (
    <AppWindow
      title="Tic Tac Toe"
      type="TicTacToe"
      constraintRef={constraintRef}
      className="top-[2.5rem] left-[calc(41.7%-30rem)]  w-[75rem] h-[75%]"
    >
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <label className="text-lg font-semibold">Difficulty: </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as "Easy" | "Hard")}
            className="ml-2 px-2 py-1 border rounded text-black"
          >
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {board.map((value, index) => (
            <button
              key={index}
              style={{
                backgroundColor: colorScheme,
              }}
              className={`
                size-16   ${
                  colorScheme === "#fff" ? "text-black" : "text-white"
                } text-2xl font-bold flex items-center justify-center
                
                
                `}
              onClick={() => handleClick(index)}
              disabled={!!value || winner !== null || currentPlayer === "O"} // Disable squares when AI is playing
            >
              {value}
            </button>
          ))}
        </div>
        {winner && (
          <div className="mt-4 text-center">
            {winner === "Draw" ? (
              <h2 className="text-xl font-bold">It's a draw!</h2>
            ) : (
              <div>
                <h2 className="text-xl font-bold">Player {winner} wins!</h2>
                {winner === "O" && <p>Imagine losing to an AI...</p>}
              </div>
            )}
            <button
              onClick={resetGame}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            >
              Play Again
            </button>
          </div>
        )}
        {!winner && (
          <button
            onClick={resetGame}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset Game
          </button>
        )}
      </div>
    </AppWindow>
  );
};

export default TicTacToe;
