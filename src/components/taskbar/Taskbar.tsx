import { LuVolume2 } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import DateTimeDisplay from "./DateTimeDisplay";
import StartMenu from "./StartMenu";

import TaskbarApps from "./TaskbarApps";

const Taskbar = () => {
  return (
    <div className="flex z-20 text-white items-center fixed w-full h-10 bottom-0 left-0 justify-between bg-[#101010]">
      <div className="flex items-center gap-2">
        <StartMenu />

        <TaskbarApps />
      </div>

      <div className="select-none flex h-full items-center">
        <RiComputerLine className="w-9 h-10 taskbar-hover p-2" />
        <LuVolume2 className="w-9 h-10 taskbar-hover p-2" />
        <p className="taskbar-hover p-2">ENG</p>
        <DateTimeDisplay />
      </div>
    </div>
  );
};

export default Taskbar;
