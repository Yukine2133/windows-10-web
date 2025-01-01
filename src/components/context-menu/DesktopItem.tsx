interface DesktopItemProps {
  name: string;
  icon: string; // Path to the icon (e.g., folder or text document)
}

const DesktopItem = ({ name, icon }: DesktopItemProps) => {
  return (
    <div
      className="first:ml-16 flex flex-col items-center text-white cursor-pointer"
      style={{ width: "80px" }}
    >
      <img src={icon} alt="Item icon" className="size-10" />
      <span className="text-[12px] text-center truncate w-full">{name}</span>
    </div>
  );
};

export default DesktopItem;
