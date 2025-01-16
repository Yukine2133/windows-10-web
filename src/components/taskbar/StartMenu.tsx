import { FaWindows } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { menuItems } from "../../utils/constants";
import { motion } from "framer-motion";
import Quit from "./Quit";
import useStartMenu from "../../hooks/useStartMenu";
import Apps from "../apps/Apps";

const StartMenu = () => {
  const {
    labelVariants,
    isStartMenuOpen,
    setIsStartMenuOpen,
    menuVariants,
    handleClick,
    quit,
    startMenuRef,
    startButtonRef,
  } = useStartMenu();

  return (
    <div className="relative">
      <div
        ref={startButtonRef}
        onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        className="hover:bg-[#272727]  transition-colors duration-100 h-full w-10 p-2"
      >
        <FaWindows className="w-5 h-6 group-hover:text-[#d157e2]" />
      </div>
      {isStartMenuOpen && (
        <motion.div
          ref={startMenuRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-start z-[80]  gap-4 px-2 py-4 absolute bottom-full w-[40rem] h-[31.938em] bg-[#1f1f1f] shadow-lg"
        >
          <div className="flex flex-col justify-between h-full w-[150px]">
            <div className="flex items-center gap-2">
              <HiBars3 className="size-6 cursor-pointer" />
            </div>
            <div className="space-y-4 relative">
              {menuItems.map((item, index) => {
                const { Icon, label } = item;
                return (
                  <div
                    key={index}
                    className="flex  cursor-pointer items-center gap-2 group hover:bg-[#333]  transition-colors duration-300 p-2 rounded-md"
                    style={{ minWidth: "150px" }}
                    onClick={() => handleClick(label)}
                  >
                    <Icon className="size-6" />
                    <motion.h3
                      className="opacity-0 group-hover:opacity-100"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={labelVariants}
                    >
                      {label}
                    </motion.h3>
                  </div>
                );
              })}
              {quit && <Quit />}
            </div>
          </div>

          <div className="flex-1 w-full">
            <Apps
              setIsStartMenuOpen={setIsStartMenuOpen}
              startMenu={true}
              className="grid grid-cols-4 gap-4 text-sm"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StartMenu;
