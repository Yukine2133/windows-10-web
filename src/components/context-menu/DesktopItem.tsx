import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { renameItem } from "../../redux/slices/desktopItemsSlice";

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
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleRename = () => {
    dispatch(renameItem({ order, newName }));
    setIsRenaming(false);
  };

  return (
    <div
      onContextMenu={(e) => {
        e.stopPropagation();
        handleRightClick(e, { name, type });
      }}
      className="first:ml-16 flex flex-col  items-center text-white cursor-pointer"
      style={{ width: "70px" }}
    >
      <img
        src={icon}
        alt="Item icon"
        className={`${type === "folder" ? "size-10" : "size-9"}`}
      />
      <span
        onDoubleClick={() => setIsRenaming(true)}
        className="text-[11.5px] text-center  w-full"
      >
        {name}
      </span>

      {isRenaming && (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onBlur={handleRename}
          onKeyDown={(e) => e.key === "Enter" && handleRename()}
          autoFocus
          className="bg-transparent outline-none border border-gray-600 text-white text-center"
        />
      )}
    </div>
  );
};

export default DesktopItem;
