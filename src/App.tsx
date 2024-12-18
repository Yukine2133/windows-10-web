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
import ContextMenu from "./components/context-menu/ContextMenu";
import useContextMenuLogic from "./hooks/useContextMenuLogic";

const App = () => {
  const { closeContextMenu, handleRightClick, contextMenu } =
    useContextMenuLogic();

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
  const { wallpaper } = useAppSelector((state) => state.settings);

  useEffect(() => {
    setTimeout(() => {
      dispatch(initiatePowerOnSequence());
    }, 2500);
  }, [dispatch]);

  return (
    <main onContextMenu={handleRightClick}>
      {showLoadingScreen && <PowerOnScreen />}
      {showSleepScreen && <SleepScreen />}
      {showRestartScreen && <RestartScreen />}
      {showShutDownScreen && <ShutDownScreen />}
      {showApp && (
        <div ref={constraintRef} className="relative  w-[100vw] h-[100vh]">
          <img
            className="h-full w-full absolute top-0 left-0 object-cover"
            src={wallpaper}
            alt="Wallpaper"
            draggable="false"
            onError={() => console.log("Error loading wallpaper")}
            style={{ userSelect: "none" }}
          />
          <Apps />
          {openedApps.includes("Calculator") &&
            !minimizedApps.includes("Calculator") && (
              <Calculator constraintRef={constraintRef} />
            )}
          {openedApps.includes("Settings") &&
            !minimizedApps.includes("Settings") && (
              <Settings constraintRef={constraintRef} />
            )}
          <Taskbar />
        </div>
      )}
      {contextMenu.visible && (
        <ContextMenu
          position={contextMenu.position}
          onClose={closeContextMenu}
        />
      )}
    </main>
  );
};

export default App;
