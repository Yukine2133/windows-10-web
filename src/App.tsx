import { useEffect } from "react";
import PowerOnScreen from "./components/screens/PowerOnScreen";
import Taskbar from "./components/taskbar/Taskbar";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { initiatePowerOnSequence } from "./redux/slices/appSlice";
import SleepScreen from "./components/screens/SleepScreen";
import RestartScreen from "./components/screens/RestartScreen";
import ShutDownScreen from "./components/screens/ShutDownScreen";

const App = () => {
  const dispatch = useAppDispatch();
  const {
    showApp,
    showLoadingScreen,
    showSleepScreen,
    showRestartScreen,
    showShutDownScreen,
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
        <div className="relative  w-[100vw] h-[100vh]">
          <img
            className="h-full w-full absolute top-0 left-0 object-cover"
            src="default-wallpaper.webp"
            alt="Default Wallpaper"
            draggable="false"
            onError={() => console.log("Error loading wallpaper")}
            style={{ userSelect: "none" }}
          />
          <Taskbar />
        </div>
      )}
    </main>
  );
};

export default App;
