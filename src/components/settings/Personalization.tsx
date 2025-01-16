import { AiOutlinePicture } from "react-icons/ai";
import Wallpaper from "./personalization/Wallpaper";
import { useState } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import ColorScheme from "./personalization/ColorScheme";

const Personalization = ({
  setIsDragging,
}: {
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [tab, setTab] = useState("Wallpaper");

  const items = [
    {
      id: 1,
      name: "Wallpaper",
      icon: AiOutlinePicture,
    },
    {
      id: 2,
      name: "Color Scheme",
      icon: MdOutlineColorLens,
    },
  ];
  return (
    <div className="flex h-full">
      <div className=" bg-[#1f1f1f] w-[200px] h-full">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setTab(item.name)}
            className={`
              flex items-center gap-2   hover:bg-[#353535] ${
                tab === item.name && "border-l-4  border-[#731380] "
              } transition-colors duration-200 p-2
              `}
          >
            <item.icon className="size-5" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <div className="mx-auto ">
        {tab === "Wallpaper" ? (
          <Wallpaper setIsDragging={setIsDragging} />
        ) : (
          <ColorScheme />
        )}
      </div>
    </div>
  );
};

export default Personalization;
