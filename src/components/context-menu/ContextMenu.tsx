import { useContextMenuLogicHook } from "../../hooks/useContextMenuLogicHook";

const ContextMenu = () => {
  const contextMenu = useContextMenuLogicHook();

  if (!contextMenu) {
    return null;
  }

  const { position, options, contextMenuRef } = contextMenu;

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
      {options.map((option, index) => (
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
