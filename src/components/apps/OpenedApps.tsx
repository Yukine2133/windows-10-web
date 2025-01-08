import TextDocument from "./TextDocument";
import Calculator from "./Calculator";
import { useAppSelector } from "../../hooks/reduxHooks";
import Settings from "../settings/Settings";

const OpenedApps = ({
  constraintRef,
}: {
  constraintRef: React.MutableRefObject<null>;
}) => {
  const { minimizedApps, openedApps } = useAppSelector((state) => state.app);

  return (
    <>
      {openedApps.map((app) => {
        if (minimizedApps.includes(app.type)) return null;

        switch (app.type) {
          case "TextDocument":
            return (
              <TextDocument
                key={app.name}
                constraintRef={constraintRef}
                name={app.name || "Untitled Document"}
              />
            );
          case "Calculator":
            return <Calculator key={app.type} constraintRef={constraintRef} />;
          case "Settings":
            return <Settings constraintRef={constraintRef} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default OpenedApps;
