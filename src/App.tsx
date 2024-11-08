import { useEffect, useRef } from "react";
import PowerOnScreen from "./components/screens/PowerOnScreen";
import Taskbar from "./components/taskbar/Taskbar";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { initiatePowerOnSequence } from "./redux/slices/appSlice";
import SleepScreen from "./components/screens/SleepScreen";
import RestartScreen from "./components/screens/RestartScreen";
import ShutDownScreen from "./components/screens/ShutDownScreen";
import Apps from "./components/apps/Apps";
import Calculator from "./components/apps/Calculator";
import Settings from "./components/settings/Settings";

const App = () => {
  const dispatch = useAppDispatch();
  const constraintRef = useRef(null);
  const {
    showApp,
    showLoadingScreen,
    showSleepScreen,
    showRestartScreen,
    showShutDownScreen,
    openedApps,
    minimizedApps,
  } = useAppSelector((state) => state.app);

  useEffect(() => {
    setTimeout(() => {
      dispatch(initiatePowerOnSequence());
    }, 2500);
  }, [dispatch]);
  return (
    <main>
      {showLoadingScreen && <PowerOnScreen />}
      {showSleepScreen && <SleepScreen />}
      {showRestartScreen && <RestartScreen />}
      {showShutDownScreen && <ShutDownScreen />}
      {showApp && (
        <div ref={constraintRef} className="relative  w-[100vw] h-[100vh]">
          <img
            className="h-full w-full absolute top-0 left-0 object-cover"
            src="default-wallpaper.webp"
            alt="Default Wallpaper"
            draggable="false"
            onError={() => console.log("Error loading wallpaper")}
            style={{ userSelect: "none" }}
          />
          <Apps />
          {openedApps.includes("Calculator") &&
            !minimizedApps.includes("Calculator") && (
              <Calculator constraintRef={constraintRef} />
            )}
          <Settings constraintRef={constraintRef} />
          <Taskbar />
        </div>
      )}
    </main>
  );
};

export default App;
