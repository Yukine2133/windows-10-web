import { motion } from "framer-motion";
import WindowControls from "../WindowControls";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { closeApp, minimizeApp } from "../../redux/slices/appSlice";
import { ChromeTab } from "./Chrome";
import { PhotosTopBar } from "./Photos";

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

  const renderBar = (type: string) => {
    switch (type) {
      case "Chrome":
        return <ChromeTab />;
      case "Photos":
        return <PhotosTopBar name={title} />;
      default:
        return <h3 className="py-2 px-4">{title}</h3>;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag={drag && isDragging}
      dragConstraints={constraintRef}
      dragMomentum={false}
      className={`absolute shadow-2xl z-10 bg-[#202020] text-white ${className}`}
    >
      <div
        className={`flex justify-between items-center ${windowControlsClassName}`}
      >
        {renderBar(type)}

        <WindowControls
          closeApp={() => {
            dispatch(closeApp({ type, name: title }));
            if (type === "TextDocument" || type === "Photos") {
              dispatch(closeApp({ type, name: title }));
            } else {
              dispatch(closeApp({ type }));
            }
          }}
          minimizeApp={() => {
            saveContent?.();
            if (type === "TextDocument" || type === "Photos") {
              dispatch(minimizeApp({ type, name: title }));
            } else {
              dispatch(minimizeApp({ type }));
            }
          }}
        />
      </div>
      {children}
    </motion.div>
  );
};

export default AppWindow;
