import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isPersonalizationOpen: boolean;
}

const initialState: AppState = {
  isPersonalizationOpen: false,
};
const settingsSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPersonalization: (state, action: PayloadAction<boolean>) => {
      state.isPersonalizationOpen = action.payload;
    },
  },
});

export const { setPersonalization } = settingsSlice.actions;

export default settingsSlice.reducer;
