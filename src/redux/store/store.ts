import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./../slices/appSlice";
import settingsReducer from "./../slices/settingsSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
