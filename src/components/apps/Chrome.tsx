import { BiStar } from "react-icons/bi";
import AppWindow from "./AppWindow";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward, IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoIosAdd, IoMdClose } from "react-icons/io";

const Chrome = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  return (
    <AppWindow
      title="Google Chrome"
      type="Chrome"
      constraintRef={constraintRef}
      className="top-[1rem] left-[calc(42%-30rem)]  w-[75rem] h-[75%] "
    >
      <div className="bg-[#262626] flex items-center justify-between w-full px-2 py-2 ">
        <div className="flex items-center gap-4">
          {/* Icons */}
          <IoArrowBack className="size-[18px] opacity-35" />
          <IoArrowForward className="size-[18px] opacity-35" />
          <IoReload className="size-[18px] opacity-85" />

          {/* Search bar */}
          <div className="flex items-center justify-between w-[40rem] bg-[#404040] py-1 px-3 rounded-full ">
            <div
              className="flex
               items-center"
            >
              <FaMagnifyingGlass className="size-3 opacity-50 " />
              <h4 className="select-none pl-2 opacity-50">
                Search Google or type a URL
              </h4>
            </div>

            <div>
              <BiStar className="size-4 opacity-80 " />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img className="size-8 rounded-full object-cover" src="monkey.jfif" />
          <BsThreeDots className="size-4 opacity-70 rotate-90" />
        </div>
      </div>

      <iframe
        src="https://www.google.com/webhp?igu=1"
        width={"100%"}
        height={"100%"}
      />
    </AppWindow>
  );
};

export default Chrome;

export const ChromeTab = () => {
  return (
    <div className="pl-2 flex items-center gap-1 ">
      <div className="bg-[#262626] flex items-center justify-between px-1 py-2 w-[200px] rounded-l-[7px]  rounded-r-[13px]">
        <h4 className="text-sm">New Tab</h4>
        <span className="pr-1">
          <IoMdClose className="size-6 text-white hover:bg-[#202020] p-1 transition-colors duration-200 rounded-full" />
        </span>
      </div>
      <IoIosAdd className="size-8 text-white hover:bg-[#262626] p-1 transition-colors duration-200 rounded-full" />
    </div>
  );
};
