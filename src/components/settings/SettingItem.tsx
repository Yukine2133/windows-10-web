import { IconType } from "react-icons";

const SettingItem = ({
  desc,
  handleClick,
  label,
  Icon,
}: {
  desc: string;
  handleClick: (label: string) => void;
  label: string;
  Icon: IconType;
}) => {
  return (
    <div
      onClick={() => handleClick(label)}
      className="flex items-center gap-4 outline outline-1 outline-transparent hover:outline-[#191919] transition-colors duration-200 p-4"
    >
      <Icon className="size-7 text-[#731380]" />
      <div className="flex flex-col gap-2">
        <h4 className="text-sm">{label}</h4>
        <h4 className="text-xs text-[#838383]">{desc}</h4>
      </div>
    </div>
  );
};

export default SettingItem;
