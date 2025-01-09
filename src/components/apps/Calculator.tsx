import { motion } from "framer-motion";

import { closeApp, minimizeApp } from "../../redux/slices/appSlice";
import { calculatorButtons } from "../../utils/constants";
import useCalculatorLogicHook from "../../hooks/useCalculatorLogicHook";
import WindowControls from "../WindowControls";
import { useAppDispatch } from "../../hooks/reduxHooks";

const Calculator = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const { history, handleClick, display } = useCalculatorLogicHook();

  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag
      dragConstraints={constraintRef}
      dragMomentum={false}
      className="absolute z-10 w-[20rem] text-white bg-[#202020] left-[calc(73%-30rem)] top-[6rem] "
    >
      <div className="flex justify-between items-center">
        <h3 className=" py-2 px-4">Calculator</h3>
        <WindowControls
          minimizeApp={() => dispatch(minimizeApp({ type: "Calculator" }))}
          closeApp={() => dispatch(closeApp({ type: "Calculator" }))}
        />
      </div>

      <div className="text-right px-4  text-gray-400">{history}</div>
      <div className="text-right px-4 py-2 text-3xl text-white">{display}</div>

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
