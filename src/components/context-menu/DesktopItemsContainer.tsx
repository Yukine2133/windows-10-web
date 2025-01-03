import { useAppSelector } from "../../hooks/reduxHooks";
import { useContextMenuLogicHook } from "../../hooks/useContextMenuLogicHook";
import ContextMenu from "./ContextMenu";
import DesktopItem from "./DesktopItem";

const DesktopItemsContainer = () => {
  const items = useAppSelector((state) => state.desktopItems.items);

  const { handleRightClick, contextMenu } = useContextMenuLogicHook();

  // Sort items by creation order
  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  return (
    <>
      <div className="relative p-2 h-full w-full">
        <div className="flex flex-wrap items-start gap-2">
          {sortedItems.map((item, index) => (
            <DesktopItem
              handleRightClick={handleRightClick}
              key={index}
              name={item.name}
              icon={item.type === "folder" ? "folder.png" : "text-document.png"}
              order={item.order}
              type={item.type}
            />
          ))}
        </div>
      </div>
      {contextMenu.visible && contextMenu.targetItem && <ContextMenu />}
    </>
  );
};

export default DesktopItemsContainer;
