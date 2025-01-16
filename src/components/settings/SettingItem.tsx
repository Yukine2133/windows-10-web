import { IconType } from "react-icons";
import { useAppSelector } from "../../hooks/reduxHooks";

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
  const { colorScheme } = useAppSelector((state) => state.settings);
  return (
    <div
      onClick={() => handleClick(label)}
      className="flex items-center gap-4 outline outline-1 outline-transparent hover:outline-[#191919] transition-colors duration-200 p-4"
    >
      <Icon style={{ color: colorScheme }} className="size-7" />
      <div className="flex flex-col gap-2">
        <h4 className="text-sm">{label}</h4>
        <h4 className="text-xs text-[#838383]">{desc}</h4>
      </div>
    </div>
  );
};

export default SettingItem;
