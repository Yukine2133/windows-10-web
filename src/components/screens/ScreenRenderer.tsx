import PowerOnScreen from "./PowerOnScreen";
import SleepScreen from "./SleepScreen";
import RestartScreen from "./RestartScreen";
import ShutDownScreen from "./ShutDownScreen";
import useAppLogicHook from "../../hooks/useAppLogic";

const ScreenRenderer = () => {
  const {
    showLoadingScreen,
    showSleepScreen,
    showRestartScreen,
    showShutDownScreen,
  } = useAppLogicHook();
  if (showLoadingScreen) return <PowerOnScreen />;
  if (showSleepScreen) return <SleepScreen />;
  if (showRestartScreen) return <RestartScreen />;
  if (showShutDownScreen) return <ShutDownScreen />;
  return null;
};

export default ScreenRenderer;
