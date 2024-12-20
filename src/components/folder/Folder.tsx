import { useAppSelector } from "../../hooks/reduxHooks";

const Folder = () => {
  const { folders } = useAppSelector((state) => state.folders);

  return (
    <div>
      <div className="absolute mt-2  px-2 py-16">
        {folders.map((folder, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-2 cursor-pointer text-white "
          >
            <img
              src="folder.png"
              alt="Folder icon"
              className="size-10 w-1/2 mr-2  "
            />
            <span className="text-[13px]">{folder}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
