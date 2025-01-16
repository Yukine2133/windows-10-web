import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isPersonalizationOpen: boolean;
  wallpaper: string;
  colorScheme: string;
}

const initialState: AppState = {
  isPersonalizationOpen: false,
  wallpaper: localStorage.getItem("wallpaper") || "default-wallpaper.webp",
  colorScheme: "#731380",
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
    setColorScheme: (state, action: PayloadAction<string>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { setPersonalization, setWallpaper, setColorScheme } =
  settingsSlice.actions;

export default settingsSlice.reducer;
