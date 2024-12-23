import { useAppSelector } from "../../hooks/reduxHooks";

const Folder = () => {
  const { folders } = useAppSelector((state) => state.folders);

  return (
    <div className="relative p-1 h-full w-full">
      <div className="flex  flex-wrap items-start gap-1 ">
        {" "}
        {folders.map((folder, index) => (
          <div
            key={index}
            className="first:ml-16 flex flex-col items-center text-white cursor-pointer"
            style={{ width: "80px" }}
          >
            <img src="folder.png" alt="Folder icon" className="size-10" />
            <span className="text-[12px] text-center  truncate w-full">
              {folder}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
