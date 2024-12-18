import { contextMenuItems } from "../../utils/constants";

interface ContextMenuProps {
  position: { x: number; y: number };
  contextMenuRef: React.RefObject<HTMLDivElement>;
}

const ContextMenu = ({ position, contextMenuRef }: ContextMenuProps) => {
  return (
    <div
      ref={contextMenuRef}
      className="absolute bg-[#2b2b2b] text-white rounded shadow-lg text-center text-sm"
      style={{
        top: position.y,
        left: position.x,
        zIndex: 1000,
      }}
    >
      {contextMenuItems.map((option, index) => (
        <div
          key={index}
          className="px-4 py-2 hover:bg-[#414141] cursor-pointer"
          onClick={option.action}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
