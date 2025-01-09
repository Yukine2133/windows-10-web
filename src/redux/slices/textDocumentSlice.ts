import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextDocument {
  name: string;
  content: string;
}

interface TextDocumentsSliceState {
  documents: Record<string, TextDocument>;
}

const loadFromLocalStorage = (): Record<string, TextDocument> => {
  const storedDocuments = localStorage.getItem("textDocuments");
  return storedDocuments ? JSON.parse(storedDocuments) : {};
};

const initialState: TextDocumentsSliceState = {
  documents: loadFromLocalStorage(),
};

const textDocumentsSlice = createSlice({
  name: "textDocuments",
  initialState,
  reducers: {
    saveTextDocument: (
      state,
      action: PayloadAction<{ name: string; content: string }>
    ) => {
      const { name, content } = action.payload;
      state.documents[name] = { name, content };
      localStorage.setItem("textDocuments", JSON.stringify(state.documents));
    },
    deleteTextDocument: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [action.payload]: _, ...remainingDocuments } = state.documents;
      state.documents = remainingDocuments;
      localStorage.setItem("textDocuments", JSON.stringify(state.documents));
    },
  },
});

export const { saveTextDocument, deleteTextDocument } =
  textDocumentsSlice.actions;
export default textDocumentsSlice.reducer;
