import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { initiatePowerOnSequence } from "../redux/slices/appSlice";

const useAppLogicHook = () => {
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

  return {
    constraintRef,
    showApp,
    showLoadingScreen,
    showSleepScreen,
    showRestartScreen,
    showShutDownScreen,
    openedApps,
    minimizedApps,
    wallpaper,
  };
};

export default useAppLogicHook;
