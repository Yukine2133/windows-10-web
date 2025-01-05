import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./../slices/appSlice";
import settingsReducer from "./../slices/settingsSlice";
import desktopItemsReducer from "../slices/desktopItemsSlice";
import contextMenuReducer from "../slices/contextMenuSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
    desktopItems: desktopItemsReducer,
    contextMenu: contextMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
