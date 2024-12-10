import { motion } from "framer-motion";
import { settingItems } from "../../utils/constants";
import WindowControls from "../WindowControls";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeApp, minimizeApp } from "../../redux/slices/appSlice";
import {
  setPersonalization,
  setWallpaper,
} from "../../redux/slices/settingsSlice";
import { useState } from "react";

const Settings = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const dispatch = useAppDispatch();

  const [wallpaperInput, setWallpaperInput] = useState("");

  const { isPersonalizationOpen } = useAppSelector((state) => state.settings);

  const handleWallpaperChange = () => {
    dispatch(setWallpaper(wallpaperInput));
    setWallpaperInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag
      dragConstraints={constraintRef}
      dragMomentum={false}
      className="absolute  bg-black text-white top-[100px] left-[18%] w-[75rem]  overflow-y-auto h-[80%] scrollbar-hidden  "
    >
      <div className="flex items-center  justify-between">
        <h3 className="px-4 text-sm">Settings</h3>
        <WindowControls
          closeApp={() => {
            dispatch(closeApp("Settings"));
          }}
          minimizeApp={() => {
            dispatch(minimizeApp("Settings"));
          }}
        />
      </div>

      {isPersonalizationOpen ? (
        <div className="flex items-center justify-center flex-col p-3 space-y-4">
          <h3 className="text-xl">Change wallpaper</h3>
          <input
            type="text"
            value={wallpaperInput}
            onChange={(e) => setWallpaperInput(e.target.value)}
            placeholder="Add wallpaper URL"
            className="outline-none bg-transparent bg-stone-900 w-1/2 rounded-sm"
          />
          <button onClick={handleWallpaperChange}>Change Wallpaper</button>
        </div>
      ) : (
        <>
          <div className="mt-5 text-center text-lg">Windows Settings</div>

          <section className="grid p-12 grid-cols-4 gap-10">
            {settingItems.map((setting) => {
              const { desc, Icon, label, id } = setting;
              return (
                <div
                  onClick={() => {
                    if (label === "Personalization") {
                      dispatch(setPersonalization(true));
                    }
                  }}
                  key={id}
                  className="flex items-center gap-4 outline outline-1 outline-transparent hover:outline-[#191919] transition-colors duration-200 p-4"
                >
                  <Icon className="size-7 text-[#731380]" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm">{label}</h4>
                    <h4 className="text-xs text-[#838383]">{desc}</h4>
                  </div>
                </div>
              );
            })}
          </section>
        </>
      )}
    </motion.div>
  );
};

export default Settings;
