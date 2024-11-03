import { HiMinus } from "react-icons/hi2";
import { MdOutlineCropSquare } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const WindowControls = ({
  minimizeApp,
  closeApp,
}: {
  minimizeApp: () => void;
  closeApp: () => void;
}) => {
  return (
    <div className="flex items-center">
      <HiMinus
        onClick={minimizeApp}
        className="size-10 hover:bg-[#363636] px-3 py-2 transition-colors duration-200"
      />
      <MdOutlineCropSquare className="size-10 hover:bg-[#363636] px-3 py-2 transition-colors duration-200" />
      <IoMdClose
        onClick={closeApp}
        className="size-10 hover:bg-[#e81123] px-3 py-2 transition-colors duration-200"
      />
    </div>
  );
};

export default WindowControls;
