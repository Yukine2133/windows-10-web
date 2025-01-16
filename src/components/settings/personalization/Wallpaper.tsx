import React from "react";
import usePersonalizationLogic from "../../../hooks/usePersonalizationLogic";

const Wallpaper = ({
  setIsDragging,
}: {
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { file, setFile, handleFileUpload, uploading, progress } =
    usePersonalizationLogic();
  return (
    <div className="mx-auto">
      {/* <button
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
      </button> */}
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

export default Wallpaper;
