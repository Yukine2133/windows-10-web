import { closeContextMenu } from "../../redux/slices/contextMenuSlice";
import {
  getContextMenuItems,
  getContextMenuItemsDesktop,
} from "../../utils/constants";
import { DesktopItem } from "../../redux/slices/desktopItemsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const ContextMenu = () => {
  const dispatch = useAppDispatch();
  const { visible, position, targetItem } = useAppSelector(
    (state) => state.contextMenu
  );

  if (!visible || !targetItem) return null;

  const options =
    targetItem.type === "Desktop"
      ? getContextMenuItemsDesktop(dispatch, () => dispatch(closeContextMenu()))
      : getContextMenuItems(
          dispatch,
          () => dispatch(closeContextMenu()),
          targetItem as DesktopItem
        );

  return (
    <div
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
