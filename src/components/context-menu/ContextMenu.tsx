import { useDispatch } from "react-redux";
import {
  getContextMenuItems,
  getContextMenuItemsDesktop,
} from "../../utils/constants";
import { DesktopItem } from "../../redux/slices/desktopItemsSlice";
import { useContextMenuLogicHook } from "../../hooks/useContextMenuLogicHook";

const ContextMenu = () => {
  const dispatch = useDispatch();
  const { contextMenu, closeContextMenu, contextMenuRef } =
    useContextMenuLogicHook();

  if (!contextMenu.visible || !contextMenu.targetItem) return null;

  const { position, targetItem } = contextMenu;

  const options =
    targetItem.type === "Desktop"
      ? getContextMenuItemsDesktop(dispatch, closeContextMenu)
      : getContextMenuItems(
          dispatch,
          closeContextMenu,
          targetItem as DesktopItem
        );

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
