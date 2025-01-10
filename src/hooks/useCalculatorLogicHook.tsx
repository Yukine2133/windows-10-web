import { useEffect, useState } from "react";

const useCalculatorLogicHook = () => {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState("");
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearDisplay = () => {
    setDisplay("0");
    setHistory("");
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const deleteLastDigit = () => {
    setDisplay((prevDisplay) =>
      prevDisplay.length > 1 ? prevDisplay.slice(0, -1) : "0"
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (value: string) => {
    if (!isNaN(Number(value))) {
      if (waitingForOperand) {
        setDisplay(value);
        setWaitingForOperand(false);
      } else {
        setDisplay(display === "0" ? value : display + value);
      }
    } else if (value === "C") {
      clearDisplay();
    } else if (value === "⌫") {
      deleteLastDigit();
    } else if (value === "=") {
      if (operator && currentValue !== null) {
        const result = calculate(currentValue, parseFloat(display), operator);
        if (result === "Error") {
          setDisplay("Error");
          setHistory("");
        } else {
          setDisplay(String(result));
          setHistory(`${history} ${display} =`);
          setCurrentValue(result);
        }
        setOperator(null);
        setWaitingForOperand(true);
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentValue === null) {
        setCurrentValue(parseFloat(display));
      } else if (operator) {
        const result = calculate(currentValue, parseFloat(display), operator);
        if (result === "Error") {
          setDisplay("Error");
          setHistory("");
          setCurrentValue(null);
        } else {
          setDisplay(String(result));
          setCurrentValue(result);
        }
      }
      setHistory(`${display} ${value}`);
      setOperator(value);
      setWaitingForOperand(true);
    }
  };

  const calculate = (
    firstOperand: number,
    secondOperand: number,
    op: string
  ) => {
    switch (op) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return secondOperand !== 0 ? firstOperand / secondOperand : "Error";
      default:
        return secondOperand;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      if (
        !isNaN(Number(key)) ||
        ["+", "-", "*", "/", "=", "Enter"].includes(key)
      ) {
        handleClick(key === "Enter" ? "=" : key);
      } else if (key === "Backspace") {
        handleClick("⌫");
      } else if (key.toLowerCase() === "c") {
        handleClick("C");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  return {
    handleClick,
    display,
    history,
  };
};

export default useCalculatorLogicHook;
