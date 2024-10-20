import Loading from "../Loading";

const ShutDownScreen = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col">
      <Loading message="Windows is shutting down..." />
    </div>
  );
};

export default ShutDownScreen;
