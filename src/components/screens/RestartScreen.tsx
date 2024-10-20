import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  initiatePowerOnSequence,
  setShowLoadingScreen,
  setShowRestartScreen,
} from "../../redux/slices/appSlice";
import Loading from "../Loading";

const RestartScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const restartTimeout = setTimeout(() => {
      dispatch(setShowRestartScreen(false));
      dispatch(setShowLoadingScreen(true));

      const powerOnTimeout = setTimeout(() => {
        dispatch(initiatePowerOnSequence());
      }, 2500);

      return () => clearTimeout(powerOnTimeout);
    }, 2500);

    return () => clearTimeout(restartTimeout);
  }, [dispatch]);

  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col">
      <Loading message="Restarting..." />
    </div>
  );
};

export default RestartScreen;
