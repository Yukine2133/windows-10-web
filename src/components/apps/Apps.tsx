import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openApp, restoreApp, setActiveApp } from "../../redux/slices/appSlice";
import AppItem from "./AppItem";

const Apps = ({
  className,
  startMenu,
  setIsStartMenuOpen,
}: {
  className: string;
  startMenu?: boolean;
  setIsStartMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const { minimizedApps } = useAppSelector((state) => state.app);

  const toggleApp = (name: string) => {
    dispatch(setActiveApp(name));
    if (setIsStartMenuOpen) {
      setIsStartMenuOpen(false);
    }
    if (minimizedApps.includes(name)) {
      dispatch(restoreApp(name));
    } else {
      dispatch(openApp({ type: name }));
    }
  };

  return (
    <div className="relative    ">
      <div className={` z-10  text-white ${className}`}>
        {/* Calculator */}
        <AppItem
          label="Calculator"
          toggleApp={() => toggleApp("Calculator")}
          src="calculator.png"
          startMenu={startMenu}
        />

        {/* Chrome */}
        <AppItem
          label="Chrome"
          toggleApp={() => toggleApp("Chrome")}
          src="chrome.png"
          startMenu={startMenu}
        />

        {/* Solitaire */}
        <AppItem
          label="Solitaire"
          toggleApp={() => toggleApp("Solitaire")}
          src="solitaire.png"
          startMenu={startMenu}
        />

        {/* Youtube */}
        <AppItem
          label="Youtube"
          toggleApp={() => toggleApp("Youtube")}
          src="youtube.png"
          startMenu={startMenu}
        />

        {/* Spotify */}
        <AppItem
          label="Spotify"
          toggleApp={() => toggleApp("Spotify")}
          src="spotify.png"
          startMenu={startMenu}
        />

        {/* Tic Tac Toe */}
        <AppItem
          label="Tic Tac Toe"
          toggleApp={() => toggleApp("TicTacToe")}
          src="tictactoe.png"
          startMenu={startMenu}
        />
      </div>
    </div>
  );
};

export default Apps;
