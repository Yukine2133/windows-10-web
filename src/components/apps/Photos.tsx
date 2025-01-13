import { BiEdit, BiPrinter, BiTrash } from "react-icons/bi";
import AppWindow from "./AppWindow";
import { GrRotateRight } from "react-icons/gr";
import { FaRegShareSquare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Photos = ({
  constraintRef,
  name,
}: {
  constraintRef: React.MutableRefObject<null>;
  name: string;
}) => {
  return (
    <AppWindow
      title={name}
      type="Photos"
      constraintRef={constraintRef}
      className="top-[1rem] left-[calc(41.7%-30rem)]  w-[65rem] h-[75%] shadow-lg"
      windowControlsClassName="border-b border-gray-700"
    >
      <div className="flex justify-center h-[440px]  items-center">
        <img src={name} alt={name} className="w-3/4 h-full object-cover" />
      </div>
    </AppWindow>
  );
};

export default Photos;

export const PhotosTopBar = ({ name }: { name: string }) => {
  return (
    <div className="px-4 flex items-center justify-center ">
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
