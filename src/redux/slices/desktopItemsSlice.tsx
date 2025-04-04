import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { renameTextDocument } from "./textDocumentSlice";

export interface DesktopItem {
  name: string;
  type: "folder" | "textDocument";
  order: number;
}

interface DesktopItemsSliceState {
  items: DesktopItem[];
  renamingItem: string | null;
}

const loadFromLocalStorage = (): DesktopItem[] => {
  const storedItems = localStorage.getItem("desktopItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

export const renameDesktopItem = createAsyncThunk(
  "desktopItems/renameDesktopItem",
  async (
    {
      order,
      oldName,
      newName,
    }: { order: number; oldName: string; newName: string },
    { dispatch }
  ) => {
    dispatch(renameItem({ order, newName }));

    if (oldName !== newName) {
      dispatch(renameTextDocument({ oldName, newName }));
    }
  }
);

const initialState: DesktopItemsSliceState = {
  items: loadFromLocalStorage(),
  renamingItem: null,
};

const desktopItemsSlice = createSlice({
  name: "desktopItems",
  initialState,
  reducers: {
    addFolder: (state) => {
      const newFolder = {
        name: `New Folder ${
          state.items.filter((item) => item.type === "folder").length + 1
        }`,
        type: "folder",
        order: state.items.length + 1,
      };
      state.items.push(newFolder as DesktopItem);
      localStorage.setItem("desktopItems", JSON.stringify(state.items));
    },
    addTextDocument: (state) => {
      const newTextDocument = {
        name: `New Text Document ${
          state.items.filter((item) => item.type === "textDocument").length + 1
        }`,
        type: "textDocument",
        order: state.items.length + 1,
      };
      state.items.push(newTextDocument as DesktopItem);
      localStorage.setItem("desktopItems", JSON.stringify(state.items));
    },
    removeFolder: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.type !== "folder" || item.name !== action.payload
      );
      localStorage.setItem("desktopItems", JSON.stringify(state.items));
    },
    removeTextDocument: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.type !== "textDocument" || item.name !== action.payload
      );
      localStorage.setItem("desktopItems", JSON.stringify(state.items));
    },
    setRename: (state, action: PayloadAction<string | null>) => {
      state.renamingItem = action.payload;
    },
    renameItem: (
      state,
      action: PayloadAction<{ order: number; newName: string }>
    ) => {
      const { order, newName } = action.payload;
      const item = state.items.find((item) => item.order === order);
      if (item) {
        item.name = newName;
        localStorage.setItem("desktopItems", JSON.stringify(state.items));
      }
      state.renamingItem = null;
    },
  },
});

export const {
  addFolder,
  addTextDocument,
  removeFolder,
  removeTextDocument,
  renameItem,
  setRename,
} = desktopItemsSlice.actions;
export default desktopItemsSlice.reducer;
