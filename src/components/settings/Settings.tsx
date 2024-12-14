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
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";

const Settings = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const dispatch = useAppDispatch();

  const [isDragging, setIsDragging] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const { isPersonalizationOpen } = useAppSelector((state) => state.settings);

  const handleFileUpload = async () => {
    if (!file) return;

    setUploading(true);

    try {
      const storageRef = ref(storage, `wallpapers/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          // Handle errors
          console.error("Upload failed:", error);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          dispatch(setWallpaper(downloadURL));
          setUploading(false);
          setFile(null);
        }
      );
    } catch (error) {
      console.error("Error uploading the file:", error);
      setUploading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag={isDragging}
      dragConstraints={constraintRef}
      dragMomentum={false}
      className="absolute bg-black text-white top-[100px] left-[18%] w-[75rem] overflow-y-auto h-[80%] scrollbar-hidden"
    >
      <div className="flex items-center justify-between">
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
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            onMouseEnter={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(true)}
            className="outline-none bg-transparent bg-stone-900 w-1/2 rounded-sm"
          />
          <button
            onClick={handleFileUpload}
            disabled={uploading || !file}
            className="bg-blue-600 px-4 py-2 rounded-sm text-white disabled:bg-gray-500"
          >
            {uploading ? `Uploading... ${progress}%` : "Upload Wallpaper"}
          </button>
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
