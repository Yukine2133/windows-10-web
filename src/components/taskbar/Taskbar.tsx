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

  const toggleApp = (type: string, name?: string) => {
    const appId = `${type}-${name}`;
    if (minimizedApps.includes(appId)) {
      dispatch(restoreApp(appId));
    } else {
      dispatch(minimizeApp({ type, name }));
    }
  };

  return (
    <div className="flex text-white items-center fixed w-full h-10 bottom-0 left-0 justify-between bg-[#101010]">
      <div className="flex items-center gap-2">
        <StartMenu />
        {openedApps.map((app) => {
          const appId = `${app.type}-${app.name}`;
          const isMinimized = minimizedApps.includes(appId);

          switch (app.type) {
            case "Calculator":
              return (
                <div
                  key={appId}
                  onClick={() => toggleApp(app.type, app.name)}
                  className={`p-2 ${
                    !isMinimized &&
                    "bg-[#272727] hover:bg-[#474747] transition-colors duration-200"
                  }`}
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
                  key={appId}
                  onClick={() => toggleApp(app.type, app.name)}
                  className={`p-2 ${
                    !isMinimized &&
                    "bg-[#272727] hover:bg-[#474747] transition-colors duration-200"
                  }`}
                >
                  <AiOutlineSetting className="size-6" />
                </div>
              );
            case "TextDocument":
              return (
                <div
                  key={appId}
                  onClick={() => toggleApp(app.type, app.name)}
                  className={`p-2 ${
                    !isMinimized &&
                    "bg-[#272727] hover:bg-[#474747] transition-colors duration-200"
                  }`}
                >
                  <img
                    src="text-document.png"
                    alt="Text Document"
                    className="size-6"
                  />
                </div>
              );
            default:
              return null;
          }
        })}
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
