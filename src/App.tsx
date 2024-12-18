import PowerOnScreen from "./components/screens/PowerOnScreen";
import Taskbar from "./components/taskbar/Taskbar";

import SleepScreen from "./components/screens/SleepScreen";
import RestartScreen from "./components/screens/RestartScreen";
import ShutDownScreen from "./components/screens/ShutDownScreen";
import Apps from "./components/apps/Apps";
import Calculator from "./components/apps/Calculator";
import Settings from "./components/settings/Settings";
import ContextMenu from "./components/context-menu/ContextMenu";
import useContextMenuLogicHook from "./hooks/useContextMenuLogicHook";
import useAppLogicHook from "./hooks/useAppLogicHook";

const App = () => {
  const {
    constraintRef,
    showApp,
    showLoadingScreen,
    showSleepScreen,
    showRestartScreen,
    showShutDownScreen,
    openedApps,
    minimizedApps,
    wallpaper,
  } = useAppLogicHook();
  const { closeContextMenu, handleRightClick, contextMenu } =
    useContextMenuLogicHook();

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
