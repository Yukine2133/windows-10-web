import { calculatorButtons } from "../../utils/constants";
import useCalculatorLogicHook from "../../hooks/useCalculatorLogicHook";
import AppWindow from "./AppWindow";

const Calculator = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const { history, handleClick, display } = useCalculatorLogicHook();

  return (
    <AppWindow
      title="Calculator"
      type="Calculator"
      constraintRef={constraintRef}
      className="left-[calc(73%-30rem)] top-[6rem] w-[20rem]"
    >
      <div className="text-right px-4  text-gray-400">{history}</div>
      <div
        className="text-right px-4 py-2 text-3xl text-white  "
        style={{ overflowWrap: "anywhere" }}
      >
        {display}
      </div>

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
    </AppWindow>
  );
};

export default Calculator;
