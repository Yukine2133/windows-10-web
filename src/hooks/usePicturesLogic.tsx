import { openApp, restoreApp } from "../redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

const usePicturesLogic = () => {
  const dispatch = useAppDispatch();
  const { minimizedApps } = useAppSelector((state) => state.app);

  const toggleApp = ({ type, name }: { type: string; name: string }) => {
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(openApp({ type, name }));
    }
  };
  return {
    toggleApp,
  };
};

export default usePicturesLogic;
