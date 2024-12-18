import { useState, useEffect, useRef } from "react";

const useContextMenuLogicHook = () => {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    position: { x: number; y: number };
  }>({ visible: false, position: { x: 0, y: 0 } });

  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: e.clientX, y: e.clientY },
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node)
      ) {
        closeContextMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeContextMenu]);

  return {
    handleRightClick,
    closeContextMenu,
    contextMenu,
    contextMenuRef,
  };
};

export default useContextMenuLogicHook;
