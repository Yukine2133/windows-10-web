import Taskbar from "./components/taskbar/Taskbar";
import Apps from "./components/apps/Apps";
import Calculator from "./components/apps/Calculator";
import Settings from "./components/settings/Settings";
import ContextMenu from "./components/context-menu/ContextMenu";
import useAppLogicHook from "./hooks/useAppLogicHook";
import ScreenRenderer from "./components/screens/ScreenRenderer";
import DesktopItemsContainer from "./components/context-menu/DesktopItemsContainer";

const App = () => {
  const { constraintRef, showApp, openedApps, minimizedApps, wallpaper } =
    useAppLogicHook();

  return (
    <main>
      <ScreenRenderer /> {/* Render the screen based on the state */}
      {showApp && (
        <div ref={constraintRef} className="relative w-[100vw] h-[100vh]">
          <img
            className="h-full w-full absolute top-0 left-0 object-cover"
            src={wallpaper}
            alt="Wallpaper"
            draggable="false"
            onError={() => console.log("Error loading wallpaper")}
            style={{ userSelect: "none" }}
          />
          <Apps />
          <DesktopItemsContainer />
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
      <ContextMenu />
    </main>
  );
};

export default App;
