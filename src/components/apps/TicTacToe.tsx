import React, { useState } from "react";
import AppWindow from "./AppWindow";

type Player = "X" | "O" | null;

const TicTacToe = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "Draw">(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((square) => square)) {
      setWinner("Draw");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const calculateWinner = (board: Player[]): Player | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <AppWindow
      title="Tic Tac Toe"
      type="TicTacToe"
      constraintRef={constraintRef}
      className="top-[2.5rem] left-[calc(41.7%-30rem)]  w-[75rem] h-[75%]"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-2">
          {board.map((value, index) => (
            <button
              key={index}
              className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
        {winner && (
          <div className="mt-4">
            {winner === "Draw" ? (
              <h2 className="text-xl font-bold">It's a draw!</h2>
            ) : (
              <h2 className="text-xl font-bold">Player {winner} wins!</h2>
            )}
            <button
              onClick={resetGame}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </AppWindow>
  );
};

export default TicTacToe;
