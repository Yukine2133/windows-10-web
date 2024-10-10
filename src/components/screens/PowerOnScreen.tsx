import Loading from "../Loading";

const PowerOnScreen = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col">
      <Loading message="Please Wait" />
    </div>
  );
};

export default PowerOnScreen;
