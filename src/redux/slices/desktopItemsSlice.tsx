import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DesktopItemsSliceState {
  folders: string[];
  textDocuments: string[];
}

const loadFromLocalStorage = (name: string): string[] => {
  const storedDesktopItems = localStorage.getItem(`${name}`);
  return storedDesktopItems ? JSON.parse(storedDesktopItems) : [];
};

const initialState: DesktopItemsSliceState = {
  folders: loadFromLocalStorage("folders"),
  textDocuments: loadFromLocalStorage("textDocuments"),
};

const desktopItemsSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    addFolder: (state) => {
      const newFolderName = `New Folder ${state.folders.length + 1}`;
      state.folders.push(newFolderName);
      localStorage.setItem("folders", JSON.stringify(state.folders));
    },
    removeFolder: (state, action: PayloadAction<number>) => {
      state.folders.splice(action.payload, 1);
      localStorage.setItem("folders", JSON.stringify(state.folders));
    },
    addTextDocument: (state) => {
      const newTextDocumentName = `New Text Document ${
        state.textDocuments.length + 1
      }`;
      state.textDocuments.push(newTextDocumentName);
      localStorage.setItem(
        "textDocuments",
        JSON.stringify(state.textDocuments)
      );
    },
  },
});

export const { addFolder, removeFolder, addTextDocument } =
  desktopItemsSlice.actions;
export default desktopItemsSlice.reducer;
