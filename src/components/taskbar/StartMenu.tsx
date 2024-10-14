import { useState } from "react";
import { FaWindows } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { menuItems } from "../../utils/constants";
import { motion } from "framer-motion";

const StartMenu = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        className="hover:bg-[#272727] transition-colors duration-100 h-full group w-10 p-2"
      >
        <FaWindows className="w-5 h-6 group-hover:text-[#d157e2]" />
      </div>
      {isStartMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-start gap-4 px-2 py-4 absolute bottom-full w-[40rem] h-[31.938em] bg-[#1f1f1f] shadow-lg"
        >
          <div className="flex group group-hover:w-[100px] flex-col justify-between h-full">
            <div className="group flex items-center gap-2">
              <HiBars3 className="size-6 cursor-pointer" />
              <h3 className="hidden group-hover:block">Start</h3>
            </div>
            <div className="space-y-4 group">
              {menuItems.map((item, index) => {
                const { Icon } = item;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="size-6 cursor-pointer" />
                    <h3 className="hidden group-hover:block">{item.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="text-sm">Apps</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StartMenu;
