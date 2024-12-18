import { useState } from "react";

const useContextMenuLogicHook = () => {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    position: { x: number; y: number };
  }>({ visible: false, position: { x: 0, y: 0 } });

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: e.clientX, y: e.clientY },
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };
  return {
    handleRightClick,
    closeContextMenu,
    contextMenu,
  };
};

export default useContextMenuLogicHook;
