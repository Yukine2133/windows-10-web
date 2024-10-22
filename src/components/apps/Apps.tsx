const Apps = () => {
  return (
    <div className="absolute text-white p-2">
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <img
          style={{ userSelect: "none" }}
          draggable="false"
          src="calculator.png"
          alt="Calculator Icon"
          className="size-9"
        />
        <h2 className="text-[13px]">Calculator</h2>
      </div>
    </div>
  );
};

export default Apps;
