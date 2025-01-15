import { motion } from "framer-motion";
import WindowControls from "../WindowControls";
import useAppWindowLogic from "../../hooks/useAppWindowLogic";

interface AppWindowProps {
  title: string;
  type: string;
  children: React.ReactNode;
  constraintRef: React.MutableRefObject<null>;
  drag?: boolean;
  isDragging?: boolean;
  className: string;
  windowControlsClassName?: string;
  saveContent?: () => void;
}

const AppWindow = ({
  title,
  type,
  children,
  constraintRef,
  drag = true,
  isDragging = true,
  className = "",
  windowControlsClassName = "",
  saveContent,
}: AppWindowProps) => {
  const { renderBar, handleFocus, isActive, onCloseApp, onMinimizeApp } =
    useAppWindowLogic({ type, title });
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag={drag && isDragging}
      dragConstraints={constraintRef}
      dragMomentum={false}
      onClick={handleFocus}
      className={`absolute shadow-2xl ${
        isActive ? "z-50" : "z-10"
      } bg-[#202020] text-white ${className}`}
    >
      <div
        className={`flex justify-between items-center ${windowControlsClassName}`}
      >
        {renderBar(type)}

        <WindowControls
          closeApp={onCloseApp}
          minimizeApp={() => {
            saveContent?.();
            onMinimizeApp();
          }}
        />
      </div>
      {children}
    </motion.div>
  );
};

export default AppWindow;
