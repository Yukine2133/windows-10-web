import useDesktopItemLogicHook from "../../hooks/useDesktopItemLogicHook";

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
  const { handleRename, newName, onClick, setNewName, renamingItem } =
    useDesktopItemLogicHook({ order, name });
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleRightClick(e, { name, type });
      }}
      className=" flex flex-col  items-center text-white cursor-pointer"
      style={{ width: "70px" }}
      onClick={() => onClick(type, name)}
    >
      <img
        src={icon}
        alt="Item icon"
        className={`${type === "folder" ? "size-10" : "size-[34px]"}`}
      />
      {renamingItem === name ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onBlur={handleRename}
          onKeyDown={(e) => e.key === "Enter" && handleRename()}
          onClick={(e) => e.stopPropagation()}
          autoFocus
          className="outline-none mt-1  z-50 bg-[#3c3c3c] rounded-sm transition-all duration-300  text-white text-center"
        />
      ) : (
        <span className="text-[11.5px] text-center break-words w-full">
          {name}
        </span>
      )}
    </div>
  );
};

export default DesktopItem;
