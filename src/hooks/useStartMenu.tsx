import { useState } from "react";
import { openApp, restoreApp } from "../redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useStartMenu = () => {
  const dispatch = useAppDispatch();

  const { minimizedApps } = useAppSelector((state) => state.app);

  const handleClick = (label: string) => {
    if (label === "Power") {
      setQuit(!quit);
    }
    if (label === "Settings") {
      toggleSettings("Settings");
    }
  };

  const toggleSettings = (name: string) => {
    setIsStartMenuOpen(false);
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(openApp({ type: name }));
    }
  };
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const [quit, setQuit] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return {
    labelVariants,
    isStartMenuOpen,
    setIsStartMenuOpen,
    menuVariants,
    handleClick,
    minimizedApps,
    quit,
    setQuit,
  };
};

export default useStartMenu;
