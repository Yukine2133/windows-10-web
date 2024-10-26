import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showLoadingScreen: boolean;
  showRestartScreen: boolean;
  showShutDownScreen: boolean;
  showSleepScreen: boolean;
  showApp: boolean;
  openedApps: string[];
}

const initialState: AppState = {
  showLoadingScreen: true,
  showRestartScreen: false,
  showSleepScreen: false,
  showShutDownScreen: false,
  showApp: false,
  openedApps: [],
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
    openApp: (state, action: PayloadAction<string>) => {
      if (!state.openedApps.includes(action.payload)) {
        state.openedApps.push(action.payload);
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      state.openedApps = state.openedApps.filter(
        (app) => app !== action.payload
      );
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
  openApp,
  closeApp,
} = appSlice.actions;
export default appSlice.reducer;
