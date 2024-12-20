import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FolderState {
  folders: string[];
}

const loadFromLocalStorage = (): string[] => {
  const storedFolders = localStorage.getItem("folders");
  return storedFolders ? JSON.parse(storedFolders) : [];
};

const initialState: FolderState = {
  folders: loadFromLocalStorage(),
};

const folderSlice = createSlice({
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
  },
});

export const { addFolder, removeFolder } = folderSlice.actions;
export default folderSlice.reducer;
