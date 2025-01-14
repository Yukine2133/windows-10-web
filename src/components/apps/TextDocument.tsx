import useTextDocumentLogic from "../../hooks/useTextDocumentLogic";
import AppWindow from "./AppWindow";

const TextDocument = ({
  constraintRef,
  name,
}: {
  constraintRef: React.MutableRefObject<null>;
  name: string;
}) => {
  const { isDragging, setIsDragging, saveContent, setContent, content } =
    useTextDocumentLogic({ name });

  return (
    <AppWindow
      saveContent={saveContent}
      title={name}
      type="TextDocument"
      drag={isDragging}
      isDragging={isDragging}
      constraintRef={constraintRef}
      className="shadow-2xl w-[60rem] h-[20rem]  left-[calc(50%-30rem)] top-[21%]"
      windowControlsClassName="border-b border-gray-700"
    >
      <div>
        <textarea
          onMouseEnter={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(true)}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={saveContent}
          className="w-full resize-none outline-none h-[20rem] p-2 bg-[#202020] text-lg text-white"
          autoFocus
        />
      </div>
    </AppWindow>
  );
};

export default TextDocument;
