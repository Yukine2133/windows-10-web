import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openApp, restoreApp } from "../../redux/slices/appSlice";

const Apps = () => {
  const dispatch = useAppDispatch();
  const { minimizedApps } = useAppSelector((state) => state.app);

  const toggleApp = (name: string) => {
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(openApp({ type: name }));
    }
  };

  return (
    <div className="relative    ">
      <div className="flex flex-col  items-center z-10 gap-2 text-white pt-2 px-1">
        <div
          onClick={() => toggleApp("Calculator")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="calculator.png"
            alt="Calculator Icon"
            className="size-9"
          />
          <h2 className="text-[13px]">Calculator</h2>
        </div>
        <div
          onClick={() => toggleApp("Chrome")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="chrome.png"
            alt="Chrome Icon"
            className="size-10"
          />
          <h2 className="text-[13px] text-center">Google Chrome</h2>
        </div>
        <div
          onClick={() => toggleApp("Solitaire")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="solitaire.png"
            alt="Solitaire Icon"
            className="size-10"
          />
          <h2 className="text-[13px]">Solitaire</h2>
        </div>
      </div>
    </div>
  );
};

export default Apps;
