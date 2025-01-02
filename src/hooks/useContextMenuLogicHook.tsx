import { useEffect, useRef, useState } from "react";

export const useContextMenuLogicHook = () => {
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    position: { x: number; y: number };
    targetItem: { name: string; type: string } | null;
  }>({ visible: false, position: { x: 0, y: 0 }, targetItem: null });

  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  const handleRightClick = (
    e: React.MouseEvent,
    targetItem: { name: string; type: string } | null = null
  ) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: e.clientX, y: e.clientY },
      targetItem,
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false, targetItem: null });
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
    targetItem: contextMenu.targetItem,
  };
};
