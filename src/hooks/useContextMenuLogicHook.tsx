import { useEffect, useRef } from "react";
import { closeContextMenu } from "../redux/slices/contextMenuSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  getContextMenuItems,
  getContextMenuItemsDesktop,
} from "../utils/constants";
import { DesktopItem } from "../redux/slices/desktopItemsSlice";

export const useContextMenuLogicHook = () => {
  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const { visible, position, targetItem } = useAppSelector(
    (state) => state.contextMenu
  );

  const options =
    targetItem?.type === "Desktop"
      ? getContextMenuItemsDesktop(dispatch, () => dispatch(closeContextMenu()))
      : getContextMenuItems(
          dispatch,
          () => dispatch(closeContextMenu()),
          targetItem as DesktopItem
        );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node)
      ) {
        dispatch(closeContextMenu());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  if (!visible || !targetItem) {
    return null;
  }

  return {
    position,
    options,
    contextMenuRef,
  };
};
