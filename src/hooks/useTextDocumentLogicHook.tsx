import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { saveTextDocument } from "../redux/slices/textDocumentSlice";

const useTextDocumentLogicHook = ({ name }: { name: string }) => {
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
  return {
    isDragging,
    setIsDragging,
    saveContent,
    setContent,
    content,
  };
};

export default useTextDocumentLogicHook;
