import {
  BiEdit,
  BiHeart,
  BiPrinter,
  BiSave,
  BiTrash,
  BiZoomIn,
  BiZoomOut,
} from "react-icons/bi";
import AppWindow from "./AppWindow";
import { GrRotateRight } from "react-icons/gr";
import { FaRegShareSquare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { PiFilmStripLight } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { RxDimensions } from "react-icons/rx";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { useState } from "react";
import { LuMoveDiagonal } from "react-icons/lu";

const Photos = ({
  constraintRef,
  name,
}: {
  constraintRef: React.MutableRefObject<null>;
  name: string;
}) => {
  const [isDragging, setIsDragging] = useState(true);
  return (
    <AppWindow
      title={name}
      type="Photos"
      drag={isDragging}
      constraintRef={constraintRef}
      className="top-[1rem] left-[calc(46%-30rem)]  w-[65rem] h-[520px] shadow-2xl"
      windowControlsClassName="border-b border-gray-700"
    >
      <div className="flex justify-center h-[440px]  items-center">
        <img src={name} alt={name} className="w-3/4 h-full object-contain" />
      </div>
      <PhotosBottomBar setIsDragging={setIsDragging} />
    </AppWindow>
  );
};

export default Photos;

export const PhotosTopBar = ({ name }: { name: string }) => {
  return (
    <div className="px-2 flex items-center justify-center ">
      <div className="flex items-center ">
        <div className="flex bg-[#f783b2] p-2 rounded-lg text-black items-center gap-1 mr-2 cursor-pointer">
          <BiEdit className="size-6" />
          <h2 className="text-xs">Edit</h2>
        </div>
        <GrRotateRight className="size-11  hover:bg-[#2d2d2d] p-3 rounded-lg cursor-pointer" />
        <BiTrash className="size-11 hover:bg-[#2d2d2d] p-3 rounded-lg cursor-pointer" />
        <BiPrinter className="size-11 hover:bg-[#2d2d2d] p-3 rounded-lg cursor-pointer" />
        <FaRegShareSquare className="size-11 hover:bg-[#2d2d2d] p-3 rounded-lg cursor-pointer" />
        <BsThreeDots className="size-11 hover:bg-[#2d2d2d] p-3 rounded-lg cursor-pointer" />
      </div>
      <div className="mx-[182px] text-sm">{name}</div>
      <div className="flex items-center gap-2">
        <img
          src="photos.png"
          alt="Photos icon"
          className="size-9 hover:bg-[#2d2d2d] p-2 rounded-lg cursor-pointer"
        />
        <img
          src="designer.png"
          alt="Designer icon"
          className="size-9 hover:bg-[#2d2d2d] p-2 rounded-lg cursor-pointer"
        />
        <img
          src="clipchamp.png"
          alt="Clipchamp icon"
          className="size-9 hover:bg-[#2d2d2d] p-2 rounded-lg cursor-pointer"
        />
        <div className="pr-4 border-r border-gray-700  ">
          <img
            src="onedrive.webp"
            alt="Onedrive icon"
            className="size-9 hover:bg-[#2d2d2d] p-2 rounded-lg cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export const PhotosBottomBar = ({
  setIsDragging,
}: {
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="px-2 pt-1 flex items-center justify-between shadow-lg  ">
      <div className="flex items-center gap-4 opacity-50 ">
        <div className="pr-2 border-r border-gray-700">
          <PiFilmStripLight className="size-5  " />
        </div>
        <BiHeart className="size-5 " />
        <div className="pr-2 border-r border-gray-700">
          <CiCircleInfo className="size-5 " />
        </div>
        <div className="flex items-center gap-2  text-sm">
          <RxDimensions className="size-4 " />
          <h2>3840 x 2160</h2>
        </div>
        <div className="flex items-center gap-2  text-sm">
          <BiSave className="size-5 " />
          <h2>1.9 MB</h2>
        </div>
      </div>

      <TbWorldSearch className="size-5 " />

      <div className="flex items-center gap-4">
        <MdOutlineZoomOutMap className="size-5 " />

        <div className=" flex gap-3  items-center">
          <BiZoomOut className="size-5" />
          <input
            type="range"
            name=""
            id=""
            onMouseEnter={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(true)}
            className="w-24 h-1 cursor-pointer bg-white bg-opacity-80 rounded-full appearance-none outline-none 
  accent-[#f783b2] hover:accent-[#ff99c9]"
          />
          <BiZoomIn className="size-5" />
        </div>

        <div className="border-l border-gray-700 pl-2">
          <LuMoveDiagonal className="size-6" />
        </div>
      </div>
    </div>
  );
};
