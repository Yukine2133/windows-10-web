import AppWindow from "./AppWindow";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { BiBell, BiMicrophone } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

const Youtube = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  return (
    <AppWindow
      title="Youtube"
      type="Youtube"
      constraintRef={constraintRef}
      className="top-[0.5rem] left-[calc(41.7%-30rem)]  w-[75rem] h-[75%]"
      windowControlsClassName="border-b border-gray-700"
    >
      <div className="flex items-center p-2 justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4 ">
          <HiBars3 className="size-6 cursor-pointer" />
          <div className="flex items-center gap-0.5">
            <img src="youtube.png" alt="Youtube Icon" className="size-8" />
            <div className="relative w-[85px] cursor-pointer">
              <h4 className="text-lg font-semibold">Youtube</h4>
              <span className="absolute top-0 right-0 text-[10px] opacity-50">
                UA
              </span>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="flex items-center gap-4">
          <div className="border flex items-center justify-between border-gray-500 w-[40rem] p-2 rounded-full">
            <h3 className="">rizz monkey</h3>
            <div className="flex items-center gap-4">
              <HiXMark className="size-6 cursor-pointer" />
            </div>
          </div>
          <BiMicrophone className="size-9 rounded-full cursor-pointer bg-[#464646] p-2" />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4  ">
          <div className="flex items-center gap-1 bg-[#464646] rounded-full p-2 cursor-pointer">
            <GoPlus className="size-6" />
            <h4 className="font-semibold">Create</h4>
          </div>
          <BiBell className="size-7 cursor-pointer" />
          <img
            className="size-8 rounded-full object-cover cursor-pointer"
            src="monkey.jfif"
          />
        </div>
      </div>

      <iframe
        src="https://www.youtube.com/embed/gsLvizl5j4E?autoplay=1"
        title="YouTube video player"
        allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
        width="100%"
        height="100%"
      />
    </AppWindow>
  );
};

export default Youtube;
