import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showLoadingScreen: boolean;
  showRestartScreen: boolean;
  showShutDownScreen: boolean;
  showSleepScreen: boolean;
  showApp: boolean;
}

const initialState: AppState = {
  showLoadingScreen: true,
  showRestartScreen: false,
  showSleepScreen: false,
  showShutDownScreen: false,
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
    setShowRestartScreen(state, action: PayloadAction<boolean>) {
      state.showRestartScreen = action.payload;
      state.showApp = false;
    },
    setShowSleepScreen(state, action: PayloadAction<boolean>) {
      state.showSleepScreen = action.payload;
      state.showApp = false;
    },
    setShutDownScreen(state, action: PayloadAction<boolean>) {
      state.showShutDownScreen = action.payload;
      state.showApp = false;
    },
    initiatePowerOnSequence: (state) => {
      state.showLoadingScreen = false;
      state.showApp = true;
    },
  },
});

export const {
  setShowLoadingScreen,
  setShowApp,
  initiatePowerOnSequence,
  setShowRestartScreen,
  setShowSleepScreen,
  setShutDownScreen,
} = appSlice.actions;
export default appSlice.reducer;
