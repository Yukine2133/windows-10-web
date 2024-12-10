import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isPersonalizationOpen: boolean;
  wallpaper: string;
}

const initialState: AppState = {
  isPersonalizationOpen: false,
  wallpaper: localStorage.getItem("wallpaper") || "default-wallpaper.webp",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPersonalization: (state, action: PayloadAction<boolean>) => {
      state.isPersonalizationOpen = action.payload;
    },
    setWallpaper: (state, action: PayloadAction<string>) => {
      state.wallpaper = action.payload;
      localStorage.setItem("wallpaper", action.payload);
    },
  },
});

export const { setPersonalization, setWallpaper } = settingsSlice.actions;

export default settingsSlice.reducer;
