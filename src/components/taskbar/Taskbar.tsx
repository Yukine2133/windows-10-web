import { LuVolume2 } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import DateTimeDisplay from "./DateTimeDisplay";
import StartMenu from "./StartMenu";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { minimizeApp, restoreApp } from "../../redux/slices/appSlice";
import { AiOutlineSetting } from "react-icons/ai";

const Taskbar = () => {
  const dispatch = useAppDispatch();
  const { openedApps, minimizedApps } = useAppSelector((state) => state.app);

  const toggleApp = (name: string) => {
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(minimizeApp({ type: name }));
    }
  };
  return (
    // Start Menu
    <div className="flex text-white items-center fixed w-full h-10 bottom-0 left-0 justify-between bg-[#101010]">
      <div className="flex items-center gap-2">
        <StartMenu />
        {/* Apps */}

        {openedApps.map((app) => {
          switch (app.type) {
            case "Calculator":
              return (
                <div
                  onClick={() => toggleApp("Calculator")}
                  className={`${
                    !minimizedApps.includes("Calculator") &&
                    "bg-[#272727] p-2 hover:bg-[#474747] transition-colors duration-200"
                  } p-2`}
                >
                  <img
                    src="calculator.png"
                    alt="Calculator"
                    className="size-6"
                  />
                </div>
              );
            case "Settings":
              return (
                <div
                  onClick={() => toggleApp("Settings")}
                  className={`${
                    !minimizedApps.includes("Settings") &&
                    "bg-[#272727] p-2 hover:bg-[#474747] transition-colors duration-200"
                  } p-2`}
                >
                  <AiOutlineSetting className="size-6" />
                </div>
              );
            case "TextDocument":
              return (
                <div
                  onClick={() => toggleApp("TextDocument")}
                  className={`${
                    !minimizedApps.includes("TextDocument") &&
                    "bg-[#272727] p-2 hover:bg-[#474747] transition-colors duration-200"
                  } p-2`}
                >
                  <img
                    src="text-document.png"
                    alt="Text Document"
                    className="size-6"
                  />
                </div>
              );
          }
        })}
      </div>

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
