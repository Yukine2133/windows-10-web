import { IoMoonOutline } from "react-icons/io5";
import { RiShutDownLine, RiRestartLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  setShowRestartScreen,
  setShowSleepScreen,
  setShutDownScreen,
} from "../../redux/slices/appSlice";

const Quit = () => {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      className="absolute text bottom-14 border border-gray-600 left-0 shadow-xl space-y-2  bg-[#1f1f1f] z-20"
    >
      <div
        onClick={() => dispatch(setShowSleepScreen(true))}
        className="flex items-center gap-2 hover:bg-[#333]  transition-colors duration-300 px-2 py-1 cursor-pointer"
      >
        <IoMoonOutline className="size-5 rotate-[260deg]" />
        Sleep
      </div>
      <div
        onClick={() => dispatch(setShutDownScreen(true))}
        className="flex items-center gap-2 hover:bg-[#333]  transition-colors duration-300 px-2 py-1 cursor-pointer"
      >
        <RiShutDownLine className="size-5 " />
        Shut Down
      </div>
      <div
        onClick={() => dispatch(setShowRestartScreen(true))}
        className="flex items-center gap-2 hover:bg-[#333]  transition-colors duration-300 px-2 py-1 cursor-pointer"
      >
        <RiRestartLine className="size-5  " />
        Restart
      </div>
    </motion.div>
  );
};

export default Quit;
