import { useEffect, useState } from "react";
import PowerOnScreen from "./components/screens/PowerOnScreen";

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    initiatePowerOnSequence();
  }, []);

  const initiatePowerOnSequence = () => {
    setTimeout(() => {
      setShowLoadingScreen(false);
      setShowApp(true);
    }, 2500);
  };
  return (
    <main>
      {showLoadingScreen && <PowerOnScreen />}

      {showApp && (
        <div className="relative w-[100vw] h-[100vh]">
          <img
            className="h-full w-full absolute top-0 left-0 object-cover"
            src="default-wallpaper.webp"
            alt="Default Wallpaper"
            draggable="false" // Disable dragging
            style={{ userSelect: "none" }} // Disable selection
          />
        </div>
      )}
    </main>
  );
};

export default App;
