import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpenedApp {
  type: string;
  name?: string;
}

interface AppState {
  showLoadingScreen: boolean;
  showRestartScreen: boolean;
  showShutDownScreen: boolean;
  showSleepScreen: boolean;
  showApp: boolean;
  openedApps: OpenedApp[];
  minimizedApps: string[];
  activeApp: string | null;
}

const initialState: AppState = {
  showLoadingScreen: true,
  showRestartScreen: false,
  showSleepScreen: false,
  showShutDownScreen: false,
  showApp: false,
  openedApps: [],
  minimizedApps: [],
  activeApp: null, // Initially, no active app
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
    openApp: (state, action: PayloadAction<OpenedApp>) => {
      const existingApp = state.openedApps.find(
        (app) =>
          app.type === action.payload.type && app.name === action.payload.name
      );

      if (!existingApp) {
        state.openedApps.push(action.payload);
      }
    },

    setActiveApp: (state, action: PayloadAction<string>) => {
      state.activeApp = action.payload; // Set the active app by app ID
    },

    closeApp: (
      state,
      action: PayloadAction<{ type: string; name?: string }>
    ) => {
      const appId = `${action.payload.type}-${action.payload.name}`;
      state.openedApps = state.openedApps.filter(
        (app) =>
          app.type !== action.payload.type ||
          (action.payload.name && app.name !== action.payload.name)
      );
      if (state.activeApp === appId) {
        state.activeApp = null;
      }
    },

    minimizeApp: (
      state,
      action: PayloadAction<{ type: string; name?: string }>
    ) => {
      const appId = `${action.payload.type}-${action.payload.name}`;
      if (!state.minimizedApps.includes(appId)) {
        state.minimizedApps.push(appId);
      }
    },

    restoreApp: (state, action: PayloadAction<string>) => {
      state.minimizedApps = state.minimizedApps.filter(
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
  minimizeApp,
  restoreApp,
  setActiveApp,
} = appSlice.actions;
export default appSlice.reducer;
