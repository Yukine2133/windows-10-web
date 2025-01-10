import { motion } from "framer-motion";
import WindowControls from "../WindowControls";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { closeApp, minimizeApp } from "../../redux/slices/appSlice";

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
  const dispatch = useAppDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag={drag && isDragging}
      dragConstraints={constraintRef}
      dragMomentum={false}
      className={`absolute z-10 bg-[#202020] text-white ${className}`}
    >
      <div
        className={`flex justify-between items-center ${windowControlsClassName}`}
      >
        <h3 className="py-2 px-4">{title}</h3>
        <WindowControls
          closeApp={() => {
            dispatch(closeApp({ type }));
          }}
          minimizeApp={() => {
            saveContent?.();
            dispatch(minimizeApp({ type }));
          }}
        />
      </div>
      {children}
    </motion.div>
  );
};

export default AppWindow;
