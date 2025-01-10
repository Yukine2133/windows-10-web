import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAppDispatch } from "./reduxHooks";
import { storage } from "../firebase/firebase";
import { setWallpaper } from "../redux/slices/settingsSlice";

const usePersonalizationLogicHook = () => {
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

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
  return {
    file,
    setFile,
    handleFileUpload,
    uploading,
    progress,
    dispatch,
  };
};

export default usePersonalizationLogicHook;
