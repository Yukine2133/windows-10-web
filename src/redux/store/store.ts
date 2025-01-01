import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./../slices/appSlice";
import settingsReducer from "./../slices/settingsSlice";
import desktopItemsReducer from "../slices/desktopItemsSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
    desktopItems: desktopItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
