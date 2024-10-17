import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showLoadingScreen: boolean;
  showApp: boolean;
}

const initialState: AppState = {
  showLoadingScreen: true,
  showApp: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowLoadingScreen(state, action: PayloadAction<boolean>) {
      state.showLoadingScreen = action.payload;
    },
    setShowApp(state, action: PayloadAction<boolean>) {
      state.showApp = action.payload;
    },
    initiatePowerOnSequence: (state) => {
      state.showLoadingScreen = false;
      state.showApp = true;
    },
  },
});

export const { setShowLoadingScreen, setShowApp, initiatePowerOnSequence } =
  appSlice.actions;
export default appSlice.reducer;
