import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DesktopItem {
  name: string;
  type: "folder" | "textDocument";
  order: number;
}

interface DesktopItemsSliceState {
  items: DesktopItem[];
}

// Load items from localStorage
const loadFromLocalStorage = (): DesktopItem[] => {
  const storedItems = localStorage.getItem("desktopItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

// Initial state
const initialState: DesktopItemsSliceState = {
  items: loadFromLocalStorage(),
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
    },
  },
});

export const {
  addFolder,
  addTextDocument,
  removeFolder,
  removeTextDocument,
  renameItem,
} = desktopItemsSlice.actions;
export default desktopItemsSlice.reducer;
