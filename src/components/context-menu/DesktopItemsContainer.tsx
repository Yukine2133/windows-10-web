import { useAppSelector } from "../../hooks/reduxHooks";
import { useContextMenuLogicHook } from "../../hooks/useContextMenuLogicHook";
import ContextMenu from "./ContextMenu";
import DesktopItem from "./DesktopItem";

const DesktopItemsContainer = () => {
  const { folders, textDocuments } = useAppSelector(
    (state) => state.desktopItems
  );

  const { handleRightClick, contextMenu, contextMenuRef, closeContextMenu } =
    useContextMenuLogicHook();

  const items = [
    ...folders.map((folder) => ({ name: folder, icon: "folder.png" })),
    ...textDocuments.map((doc) => ({ name: doc, icon: "text-document.png" })),
  ];

  return (
    <>
      <div className="relative p-2 h-full w-full">
        <div className="flex flex-wrap items-start gap-2">
          {items.map((item, index) => (
            <DesktopItem
              handleRightClick={handleRightClick}
              key={index}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {contextMenu.visible && contextMenu.targetItem && (
        <ContextMenu
          closeContextMenu={closeContextMenu}
          position={contextMenu.position}
          contextMenuRef={contextMenuRef}
          targetItem={contextMenu.targetItem}
        />
      )}
    </>
  );
};

export default DesktopItemsContainer;
