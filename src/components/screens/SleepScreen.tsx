import { useEffect, useState, useCallback } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setShowApp, setShowSleepScreen } from "../../redux/slices/appSlice";

const SleepScreen = () => {
  const [flagForDelay, setFlagForDelay] = useState(false);
  const dispatch = useAppDispatch();

  const handleMouseOrKeyboardAction = useCallback(() => {
    dispatch(setShowSleepScreen(false));
    dispatch(setShowApp(true));
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.addEventListener("keydown", handleMouseOrKeyboardAction);
      setFlagForDelay(true);
    }, 2500);

    return () => {
      document.removeEventListener("keydown", handleMouseOrKeyboardAction);
      clearTimeout(timeoutId);
    };
  }, [handleMouseOrKeyboardAction]);

  return (
    <div
      {...(flagForDelay && { onMouseMoveCapture: handleMouseOrKeyboardAction })}
      className="bg-black h-screen"
    ></div>
  );
};

export default SleepScreen;
