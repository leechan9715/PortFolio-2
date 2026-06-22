import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMainHidden: false,
  isTransitioning: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showMain: (state) => {
      state.isMainHidden = false;
      state.isTransitioning = false;
    },
    startMainTransition: (state) => {
      state.isTransitioning = true;
    },
    startMainReturn: (state) => {
      state.isTransitioning = false;
    },
    hideMain: (state) => {
      state.isMainHidden = true;
      state.isTransitioning = true;
    },
    toggleMain: (state) => {
      state.isMainHidden = !state.isMainHidden;
      state.isTransitioning = state.isMainHidden;
    },
  },
});

export const {
  showMain,
  startMainTransition,
  startMainReturn,
  hideMain,
  toggleMain,
} = uiSlice.actions;
export default uiSlice.reducer;
