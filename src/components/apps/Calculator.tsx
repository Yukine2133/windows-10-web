import { motion } from "framer-motion";
import { useAppDispatch } from "../../hooks/reduxHooks";

import { HiMinus } from "react-icons/hi2";
import { MdOutlineCropSquare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { closeApp } from "../../redux/slices/appSlice";
import { calculatorButtons } from "../../utils/constants";
const Calculator = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const dispatch = useAppDispatch();

  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearDisplay = () => {
    setDisplay("0");
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

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
    } else if (value === "=") {
      if (operator && currentValue !== null) {
        const result = calculate(currentValue, parseFloat(display), operator);
        if (result === "Error") {
          setDisplay("Error");
        } else {
          setDisplay(String(result));
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
          setCurrentValue(null);
        } else {
          setDisplay(String(result));
          setCurrentValue(result);
        }
      }
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
  return (
    <motion.div
      drag
      dragConstraints={constraintRef}
      dragMomentum={false}
      className="absolute w-[20rem] text-white bg-[#202020] left-52 top-1/3 "
    >
      <div className="flex justify-between items-center">
        <h3 className=" py-2 px-4">Calculator</h3>
        <div className="flex  items-center">
          <HiMinus className="size-10 hover:bg-[#363636] px-3 py-2" />
          <MdOutlineCropSquare className="size-10 hover:bg-[#363636] px-3 py-2" />
          <IoMdClose
            onClick={() => dispatch(closeApp("Calculator"))}
            className="size-10 hover:bg-[#11e81123] px-3 py-2"
          />
        </div>
      </div>

      <div className="text-right p-4 text-3xl  text-white">{display}</div>

      <div className="grid grid-cols-4 gap-1 p-4">
        {calculatorButtons.flat().map((button) => (
          <button
            key={button}
            onClick={() => handleClick(button)}
            className="bg-[#3c3c3c] p-[0.75rem] rounded-[0.175rem] text-xl hover:bg-[#323232] transition-colors duration-200"
          >
            {button}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Calculator;
