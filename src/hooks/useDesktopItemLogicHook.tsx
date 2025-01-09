import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  renameDesktopItem,
  setRename,
} from "../redux/slices/desktopItemsSlice";
import { openApp } from "../redux/slices/appSlice";

const useDesktopItemLogicHook = ({
  order,
  name,
}: {
  order: number;
  name: string;
}) => {
  const dispatch = useAppDispatch();
  const { renamingItem } = useAppSelector((state) => state.desktopItems);
  const [newName, setNewName] = useState(name);

  const handleRename = () => {
    if (newName.trim()) {
      dispatch(
        renameDesktopItem({
          order,
          oldName: name,
          newName,
        })
      );
    }
    dispatch(setRename(null));
  };

  const onClick = (type: string, name: string) => {
    if (type === "textDocument") {
      dispatch(openApp({ type: "TextDocument", name }));
    }
  };

  return {
    onClick,
    newName,
    setNewName,
    handleRename,
    renamingItem,
  };
};

export default useDesktopItemLogicHook;
