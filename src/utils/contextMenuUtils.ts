import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  addFolder,
  addTextDocument,
  DesktopItem,
  removeFolder,
  removeTextDocument,
  setRename,
} from "../redux/slices/desktopItemsSlice";

export const getContextMenuItems = (
  dispatch: Dispatch<AnyAction>,
  closeContextMenu: () => void,
  targetItem: DesktopItem
) => [
  {
    label: "Rename",
    action: () => {
      dispatch(setRename(targetItem.name));
      closeContextMenu();
    },
  },
  {
    label: "Delete",
    action: () => {
      if (targetItem.type === "folder") {
        dispatch(removeFolder(targetItem.name));
      } else if (targetItem.type === "textDocument") {
        dispatch(removeTextDocument(targetItem.name));
      }
      closeContextMenu();
    },
  },
];

export const getContextMenuItemsDesktop = (
  dispatch: Dispatch<AnyAction>,
  closeContextMenu: () => void
) => [
  {
    label: "Create Folder",
    action: () => {
      dispatch(addFolder());
      closeContextMenu();
    },
  },
  {
    label: "Create Text Document",
    action: () => {
      dispatch(addTextDocument());
      closeContextMenu();
    },
  },
];
