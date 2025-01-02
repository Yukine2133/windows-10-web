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
    removeFolder: (state, action: PayloadAction<string>) => {
      const folderIndex = state.folders.findIndex(
        (folder) => folder === action.payload
      );
      if (folderIndex !== -1) {
        state.folders.splice(folderIndex, 1);
        localStorage.setItem("folders", JSON.stringify(state.folders));
      }
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
    removeTextDocument: (state, action: PayloadAction<string>) => {
      state.textDocuments = state.textDocuments.filter(
        (doc) => doc !== action.payload
      );
      localStorage.setItem(
        "textDocuments",
        JSON.stringify(state.textDocuments)
      );
    },
  },
});

export const { addFolder, removeFolder, addTextDocument, removeTextDocument } =
  desktopItemsSlice.actions;
export default desktopItemsSlice.reducer;
