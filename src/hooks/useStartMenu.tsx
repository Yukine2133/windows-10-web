import { useEffect, useRef, useState } from "react";
import { openApp, restoreApp } from "../redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useStartMenu = () => {
  const dispatch = useAppDispatch();

  const { minimizedApps } = useAppSelector((state) => state.app);

  const startMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (label: string) => {
    switch (label) {
      case "Power":
        setQuit(!quit);
        break;
      case "Settings":
        toggleApp("Settings");
        break;
      case "Pictures":
        toggleApp("Pictures");
        break;
    }
  };

  const toggleApp = (name: string) => {
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(e.target as Node)
      ) {
        setIsStartMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return {
    labelVariants,
    isStartMenuOpen,
    setIsStartMenuOpen,
    menuVariants,
    handleClick,
    minimizedApps,
    quit,
    setQuit,
    startMenuRef,
  };
};

export default useStartMenu;
