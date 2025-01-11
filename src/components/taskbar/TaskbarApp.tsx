import { IconType } from "react-icons";

const TaskbarApp = ({
  app,
  isMinimized,
  toggleApp,
  Icon,
  alt,
  src,
}: {
  isMinimized: boolean;
  toggleApp: (type: string, name?: string) => void;
  app: { type: string; name?: string };
  Icon?: IconType;
  src?: string;
  alt?: string;
}) => {
  return (
    <div
      onClick={() => toggleApp(app.type, app.name)}
      className={`p-2 ${
        !isMinimized &&
        "bg-[#272727] hover:bg-[#474747] transition-colors duration-200"
      }`}
    >
      {Icon ? (
        <Icon className="size-6" />
      ) : (
        <img src={src} alt={alt} className="size-6" />
      )}
    </div>
  );
};

export default TaskbarApp;
