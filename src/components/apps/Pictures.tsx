import usePicturesLogic from "../../hooks/usePicturesLogic";
import { pictures } from "../../utils/constants";
import AppWindow from "./AppWindow";

const Pictures = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const { toggleApp } = usePicturesLogic();
  return (
    <AppWindow
      title="Pictures"
      type="Pictures"
      constraintRef={constraintRef}
      className="top-[2rem] left-[calc(41.7%-30rem)]  w-[75rem] h-[75%]"
      windowControlsClassName="border-b border-gray-700"
    >
      <div className="flex items-center gap-6 p-2">
        {pictures.map((picture) => (
          <div
            onClick={() => toggleApp({ type: "Photos", name: picture.img })}
            key={picture.id}
            className="cursor-pointer hover:bg-[#4d4d4d] p-2 pt-8"
          >
            <img
              src={picture.img}
              alt={picture.label}
              className=" w-32 object-cover "
            />
            <h1 className="text-sm text-center">{picture.label}</h1>
          </div>
        ))}
      </div>
    </AppWindow>
  );
};

export default Pictures;
