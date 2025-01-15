import { ChromeTab } from "../components/apps/Chrome";
import { PhotosTopBar } from "../components/apps/Photos";
import { closeApp, minimizeApp, setActiveApp } from "../redux/slices/appSlice";
import { setPersonalization } from "../redux/slices/settingsSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
const useAppWindowLogic = ({
  type,
  title,
}: {
  type: string;
  title: string;
}) => {
  const dispatch = useAppDispatch();
  const { activeApp } = useAppSelector((state) => state.app);
  const { isPersonalizationOpen } = useAppSelector((state) => state.settings);

  const appId = `${type}-${title}`;

  const isActive = activeApp === appId;

  const handleFocus = () => {
    dispatch(setActiveApp(appId));
  };

  const onCloseApp = () => {
    dispatch(closeApp({ type, name: title }));
    if (type === "TextDocument" || type === "Photos") {
      dispatch(closeApp({ type, name: title }));
    } else {
      dispatch(closeApp({ type }));
    }

    if (isPersonalizationOpen) {
      dispatch(setPersonalization(false));
    }
  };

  const onMinimizeApp = () => {
    if (type === "TextDocument" || type === "Photos") {
      dispatch(minimizeApp({ type, name: title }));
    } else {
      dispatch(minimizeApp({ type }));
    }
  };

  const renderBar = (type: string) => {
    switch (type) {
      case "Chrome":
        return <ChromeTab />;
      case "Photos":
        return <PhotosTopBar name={title} />;
      default:
        return <h3 className="py-2 px-4">{title}</h3>;
    }
  };
  return {
    renderBar,
    handleFocus,
    isActive,
    onCloseApp,
    onMinimizeApp,
  };
};

export default useAppWindowLogic;
