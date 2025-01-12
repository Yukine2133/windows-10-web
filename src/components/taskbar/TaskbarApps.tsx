import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { minimizeApp, restoreApp } from "../../redux/slices/appSlice";
import { AiOutlineSetting } from "react-icons/ai";
import TaskbarApp from "./TaskbarApp";

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
              <TaskbarApp
                key={appId}
                isMinimized={isMinimized}
                toggleApp={toggleApp}
                app={app}
                src="calculator.png"
                alt="Calculator"
              />
            );
          case "Settings":
            return (
              <TaskbarApp
                key={appId}
                isMinimized={isMinimized}
                toggleApp={toggleApp}
                app={app}
                Icon={AiOutlineSetting}
              />
            );
          case "TextDocument":
            return (
              <TaskbarApp
                key={appId}
                isMinimized={isMinimized}
                toggleApp={toggleApp}
                app={app}
                src="text-document.png"
                alt="Text Document"
              />
            );
          case "Chrome":
            return (
              <TaskbarApp
                key={appId}
                isMinimized={isMinimized}
                toggleApp={toggleApp}
                app={app}
                src="chrome.png"
                alt="Chrome"
              />
            );
          case "Solitaire":
            return (
              <TaskbarApp
                key={appId}
                isMinimized={isMinimized}
                toggleApp={toggleApp}
                app={app}
                src="solitaire.png"
                alt="Solitaire"
              />
            );
          case "Youtube":
            return (
              <TaskbarApp
                key={appId}
                isMinimized={isMinimized}
                toggleApp={toggleApp}
                app={app}
                src="youtube.png"
                alt="Youtube"
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default TaskbarApps;
