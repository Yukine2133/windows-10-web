import {
  setPersonalization,
  setWallpaper,
} from "../../redux/slices/settingsSlice";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { BsArrowLeft } from "react-icons/bs";

const Personalization = ({
  setIsDragging,
}: {
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  return (
    <div>
      <button
        onClick={() => dispatch(setPersonalization(false))}
        className="px-4 flex items-center gap-2 "
      >
        <BsArrowLeft className="text-lg" />
        <h6
          className="
      text-sm"
        >
          Go back
        </h6>
      </button>
      <div className="flex items-center justify-center flex-col p-3 space-y-4">
        <label htmlFor="file-upload" className="text-xl cursor-pointer">
          Change wallpaper
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          onMouseEnter={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(true)}
          className="outline-none bg-transparent bg-stone-900 w-1/2 rounded-sm hidden"
        />
        <button
          onClick={handleFileUpload}
          disabled={uploading || !file}
          className="bg-blue-600 px-4 py-2 rounded-sm text-white disabled:bg-gray-500"
        >
          {uploading ? `Uploading... ${progress}%` : "Upload Wallpaper"}
        </button>
      </div>
    </div>
  );
};

export default Personalization;
