import { useEffect } from "react";
import PowerOnScreen from "./components/screens/PowerOnScreen";
import Taskbar from "./components/taskbar/Taskbar";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { initiatePowerOnSequence } from "./redux/slices/appSlice";

const App = () => {
  const dispatch = useAppDispatch();
  const { showApp, showLoadingScreen } = useAppSelector((state) => state.app);

  useEffect(() => {
    setTimeout(() => {
      dispatch(initiatePowerOnSequence());
    }, 2500);
  }, [dispatch]);
  return (
    <main>
      {showLoadingScreen && <PowerOnScreen />}

      {showApp && (
        <div className="relative  w-[100vw] h-[100vh]">
          <img
            className="h-full w-full absolute top-0 left-0 object-cover"
            src="default-wallpaper.webp"
            alt="Default Wallpaper"
            draggable="false"
            style={{ userSelect: "none" }}
          />
          <Taskbar />
        </div>
      )}
    </main>
  );
};

export default App;
