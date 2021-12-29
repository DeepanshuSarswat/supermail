import { createSlice } from "@reduxjs/toolkit";
export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    nightMode: false,
  },

  reducers: {
    opennightMode: (state) => {
      state.nightMode = true;
    },
    closenightMode: (state) => {
      state.nightMode = false;
    },
  },
});

export const { opennightMode, closenightMode } = modeSlice.actions;

export const selectMode = (state) => state.mode.nightMode;

export default modeSlice.reducer;
