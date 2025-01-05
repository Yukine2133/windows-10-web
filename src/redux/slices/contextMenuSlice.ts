// redux/slices/contextMenuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContextMenuState {
  visible: boolean;
  position: { x: number; y: number };
  targetItem: { name: string; type: string } | null;
}

const initialState: ContextMenuState = {
  visible: false,
  position: { x: 0, y: 0 },
  targetItem: null,
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    showContextMenu: (
      state,
      action: PayloadAction<{
        position: { x: number; y: number };
        targetItem: { name: string; type: string } | null;
      }>
    ) => {
      state.visible = true;
      state.position = action.payload.position;
      state.targetItem = action.payload.targetItem;
    },
    closeContextMenu: (state) => {
      state.visible = false;
      state.targetItem = null;
    },
  },
});

export const { showContextMenu, closeContextMenu } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
