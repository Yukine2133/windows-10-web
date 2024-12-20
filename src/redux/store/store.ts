import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./../slices/appSlice";
import settingsReducer from "./../slices/settingsSlice";
import folderReducer from "./../slices/folderSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
    folders: folderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
