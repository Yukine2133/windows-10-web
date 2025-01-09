import { motion } from "framer-motion";
import WindowControls from "../WindowControls";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeApp, minimizeApp } from "../../redux/slices/appSlice";
import { useState, useEffect } from "react";
import { saveTextDocument } from "../../redux/slices/textDocumentSlice";

const TextDocument = ({
  constraintRef,
  name,
}: {
  constraintRef: React.MutableRefObject<null>;
  name: string;
}) => {
  const dispatch = useAppDispatch();
  const documentContent = useAppSelector(
    (state) => state.textDocument.documents[name]?.content || ""
  );

  const [content, setContent] = useState(documentContent);
  const [isDragging, setIsDragging] = useState(true);

  useEffect(() => {
    setContent(documentContent);
  }, [documentContent]);

  const saveContent = () => {
    dispatch(saveTextDocument({ name, content }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      drag={isDragging}
      dragConstraints={constraintRef}
      dragMomentum={false}
      className={`absolute w-[60rem] z-10 h-[20rem] text-white bg-[#202020] left-[calc(50%-30rem)] top-[21%]`}
    >
      <div className="flex justify-between items-center border-b border-gray-700">
        <h3 className="py-2 px-4">{name}</h3>
        <WindowControls
          minimizeApp={() =>
            dispatch(minimizeApp({ type: "TextDocument", name }))
          }
          closeApp={() => {
            saveContent();
            dispatch(closeApp({ type: "TextDocument", name }));
          }}
        />
      </div>

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
    </motion.div>
  );
};

export default TextDocument;
