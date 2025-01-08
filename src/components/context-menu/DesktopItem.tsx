import { useState } from "react";
import { renameItem, setRename } from "../../redux/slices/desktopItemsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openApp } from "../../redux/slices/appSlice";

interface DesktopItemProps {
  name: string;
  icon: string;
  handleRightClick: (
    e: React.MouseEvent,
    { name, type }: { name: string; type: string }
  ) => void;
  order: number;
  type: "folder" | "textDocument";
}

const DesktopItem = ({
  name,
  icon,
  type,
  handleRightClick,
  order,
}: DesktopItemProps) => {
  const dispatch = useAppDispatch();
  const { renamingItem } = useAppSelector((state) => state.desktopItems);
  const [newName, setNewName] = useState(name);

  const handleRename = () => {
    if (newName.trim()) {
      dispatch(renameItem({ order, newName }));
    }
    dispatch(setRename(null));
  };

  const onClick = (type: string, name: string) => {
    if (type === "textDocument") {
      dispatch(openApp({ type: "TextDocument", name }));
    }
  };

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleRightClick(e, { name, type });
      }}
      className="first:ml-16 flex flex-col  items-center text-white cursor-pointer"
      style={{ width: "70px" }}
      onClick={() => onClick(type, name)}
    >
      <img
        src={icon}
        alt="Item icon"
        className={`${type === "folder" ? "size-10" : "size-9"}`}
      />
      {renamingItem === name ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onBlur={handleRename}
          onKeyDown={(e) => e.key === "Enter" && handleRename()}
          autoFocus
          className="outline-none  z-50 bg-[#3c3c3c] rounded-sm transition-all duration-300  text-white text-center"
        />
      ) : (
        <span
          onDoubleClick={() => dispatch(setRename(name))}
          className="text-[11.5px] text-center break-words w-full"
        >
          {name}
        </span>
      )}
    </div>
  );
};

export default DesktopItem;
