import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openApp, restoreApp } from "../../redux/slices/appSlice";

const Apps = () => {
  const dispatch = useAppDispatch();
  const { minimizedApps } = useAppSelector((state) => state.app);

  const toggleApp = (name: string) => {
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(openApp({ type: name }));
    }
  };

  return (
    <div className="relative    ">
      <div className="flex flex-col  items-center z-10 gap-2 text-white pt-2 px-1">
        {/* Calculator */}
        <div
          onClick={() => toggleApp("Calculator")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="calculator.png"
            alt="Calculator Icon"
            className="size-9"
          />
          <h2 className="text-[13px]">Calculator</h2>
        </div>

        {/* Chrome */}
        <div
          onClick={() => toggleApp("Chrome")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="chrome.png"
            alt="Chrome Icon"
            className="size-10"
          />
          <h2 className="text-[13px] text-center">
            Google <br /> Chrome
          </h2>
        </div>

        {/* Solitaire */}
        <div
          onClick={() => toggleApp("Solitaire")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="solitaire.png"
            alt="Solitaire Icon"
            className="size-10"
          />
          <h2 className="text-[13px]">Solitaire</h2>
        </div>

        {/* Youtube */}
        <div
          onClick={() => toggleApp("Youtube")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="youtube.png"
            alt="Youtube Icon"
            className="size-10"
          />
          <h2 className="text-[13px]">Youtube</h2>
        </div>

        {/* Spotify */}
        <div
          onClick={() => toggleApp("Spotify")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="spotify.png"
            alt="Spotify Icon"
            className="size-10"
          />
          <h2 className="text-[13px]">Spotify</h2>
        </div>

        {/* Tic Tac Toe */}
        <div
          onClick={() => toggleApp("TicTacToe")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            style={{ userSelect: "none" }}
            draggable="false"
            src="tictactoe.png"
            alt="TicTacToe Icon"
            className="size-10"
          />
          <h2 className="text-[13px] text-center">Tic Tac Toe</h2>
        </div>
      </div>
    </div>
  );
};

export default Apps;
