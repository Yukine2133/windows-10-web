import { useAppSelector } from "../../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { showContextMenu } from "../../redux/slices/contextMenuSlice";
import DesktopItem from "./DesktopItem";

const DesktopItemsContainer = () => {
  const dispatch = useDispatch();
  const items = useAppSelector((state) => state.desktopItems.items);

  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  return (
    <div className="relative p-2 ">
      <div className="flex flex-wrap items-start gap-2">
        {sortedItems.map((item, index) => (
          <DesktopItem
            key={index}
            name={item.name}
            icon={item.type === "folder" ? "folder.png" : "text-document.png"}
            order={item.order}
            type={item.type}
            handleRightClick={(e, target) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(
                showContextMenu({
                  position: { x: e.clientX, y: e.clientY },
                  targetItem: target,
                })
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopItemsContainer;
