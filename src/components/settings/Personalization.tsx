import { AiOutlinePicture } from "react-icons/ai";
import Wallpaper from "./personalization/Wallpaper";
import { useState } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import ColorScheme from "./personalization/ColorScheme";
import { setPersonalization } from "../../redux/slices/settingsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { BsArrowLeft } from "react-icons/bs";

const Personalization = ({
  setIsDragging,
}: {
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [tab, setTab] = useState("Wallpaper");
  const dispatch = useAppDispatch();
  const { colorScheme } = useAppSelector((state) => state.settings);

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
        <button
          onClick={() => dispatch(setPersonalization(false))}
          className="px-4 flex items-center gap-2 "
        >
          <BsArrowLeft className="text-lg" />
          <h6
            className="
      text-sm"
          >
            Go back
          </h6>
        </button>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setTab(item.name)}
            style={{
              borderColor: colorScheme,
            }}
            className={`
              flex items-center gap-2   hover:bg-[#353535] ${
                tab === item.name && "border-l-4   "
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
