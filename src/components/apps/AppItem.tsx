const AppItem = ({
  toggleApp,
  src,
  label,
  startMenu,
}: {
  toggleApp: (name: string) => void;
  src: string;
  label: string;
  startMenu?: boolean;
}) => {
  return (
    <div
      onClick={() => toggleApp(label)}
      className={`flex flex-col justify-center items-center cursor-pointer ${
        startMenu &&
        "bg-[#353535] p-2 rounded-sm hover:border hover:border-[#9a9a9a] h-[80px]"
      } `}
    >
      <img
        style={{ userSelect: "none" }}
        draggable="false"
        src={src}
        className="size-10"
      />
      <h2 className={`text-[13px] text-center`}>{label}</h2>
    </div>
  );
};

export default AppItem;
