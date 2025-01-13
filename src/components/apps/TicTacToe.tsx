import React, { useState, useEffect } from "react";
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
  const [difficulty, setDifficulty] = useState<"Easy" | "Hard">("Easy");

  // Function to calculate winner
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAIMove = (board: Player[]): number | null => {
    if (difficulty === "Easy") {
      // Easy difficulty: Pick a random available move
      const availableMoves = board
        .map((value, index) => (value === null ? index : null))
        .filter((index) => index !== null) as number[];

      return availableMoves.length > 0
        ? availableMoves[Math.floor(Math.random() * availableMoves.length)]
        : null;
    } else {
      // Hard difficulty: Use smarter logic
      // Check if AI can win in the next move
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const testBoard = [...board];
          testBoard[i] = "O";
          if (calculateWinner(testBoard) === "O") {
            return i;
          }
        }
      }

      // Block opponent's winning move
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const testBoard = [...board];
          testBoard[i] = "X";
          if (calculateWinner(testBoard) === "X") {
            return i;
          }
        }
      }

      // Pick the first available move (basic fallback strategy)
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          return i;
        }
      }

      return null; // No available moves
    }
  };

  const handleClick = (index: number) => {
    if (board[index] || winner || currentPlayer !== "X") return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((square) => square)) {
      setWinner("Draw");
    } else {
      setCurrentPlayer("O"); // Switch to AI's turn
    }
  };

  // AI logic for Player "O"
  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      const aiMove = getAIMove(board);
      if (aiMove !== null) {
        const newBoard = [...board];
        newBoard[aiMove] = "O";
        setBoard(newBoard);

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
          setWinner(gameWinner);
        } else if (newBoard.every((square) => square)) {
          setWinner("Draw");
        } else {
          setCurrentPlayer("X"); // Switch back to player
        }
      }
    }
  }, [currentPlayer, board, winner, difficulty, getAIMove]);

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
              className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center"
              onClick={() => handleClick(index)}
              disabled={!!value || winner !== null || currentPlayer === "O"} // Disable squares when AI is playing
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
