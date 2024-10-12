import { FaWindows } from "react-icons/fa";
import { LuVolume2 } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import DateTimeDisplay from "./DateTimeDisplay";

const Taskbar = () => {
  return (
    // Start Menu
    <div className="flex text-white items-center fixed w-full h-10 bottom-0 left-0 justify-between bg-[#101010]">
      <div className="hover:bg-[#272727] transition-colors duration-100 h-full group  w-10 p-2 ">
        <FaWindows className="w-6 h-6  group-hover:text-[#d157e2]  " />
      </div>

      {/* Apps */}

      <div className="select-none  flex  h-full  items-center">
        <RiComputerLine className="w-9 h-10 taskbar-hover p-2  " />
        <LuVolume2 className="w-9 h-10 taskbar-hover p-2  " />
        <p className="taskbar-hover p-2">ENG</p>
        <DateTimeDisplay />
      </div>
    </div>
  );
};

export default Taskbar;
