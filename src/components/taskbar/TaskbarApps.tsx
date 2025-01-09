import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { minimizeApp, restoreApp } from "../../redux/slices/appSlice";
import { AiOutlineSetting } from "react-icons/ai";

const TaskbarApps = () => {
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
    <>
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
                <img src="calculator.png" alt="Calculator" className="size-6" />
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
    </>
  );
};

export default TaskbarApps;
