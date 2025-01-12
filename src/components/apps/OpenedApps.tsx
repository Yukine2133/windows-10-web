import { useAppSelector } from "../../hooks/reduxHooks";
import TextDocument from "./TextDocument";
import Calculator from "./Calculator";
import Settings from "../settings/Settings";
import Chrome from "./Chrome";
import Solitaire from "./Solitaire";

const OpenedApps = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const { minimizedApps, openedApps } = useAppSelector((state) => state.app);

  return (
    <>
      {openedApps.map((app) => {
        const appId = `${app.type}-${app.name}`;

        if (minimizedApps.includes(appId)) return null;

        switch (app.type) {
          case "TextDocument":
            return (
              <TextDocument
                key={appId}
                constraintRef={constraintRef}
                name={app.name || "Untitled Document"}
              />
            );
          case "Calculator":
            return <Calculator key={appId} constraintRef={constraintRef} />;
          case "Settings":
            return <Settings key={appId} constraintRef={constraintRef} />;
          case "Chrome":
            return <Chrome key={appId} constraintRef={constraintRef} />;
          case "Solitaire":
            return <Solitaire key={appId} constraintRef={constraintRef} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default OpenedApps;
