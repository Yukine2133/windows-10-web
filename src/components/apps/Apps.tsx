import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openApp, restoreApp } from "../../redux/slices/appSlice";

const Apps = () => {
  const dispatch = useAppDispatch();
  const { minimizedApps } = useAppSelector((state) => state.app);

  const toggleApp = (name: string) => {
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(openApp(name));
    }
  };

  return (
    <div className="absolute text-white p-2">
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
    </div>
  );
};

export default Apps;
