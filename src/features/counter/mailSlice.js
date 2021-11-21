import { createSlice } from "@reduxjs/toolkit";
export const mailSlice = createSlice({
  name: "mail",

  initialState: {
    SelectedMail: null,
  },

  reducers: {
    SelectMail: (state, action) => {
      state.SelectedMail = action.payload;
      console.log(state.SelectedMail);
    },
  },
});

export const { SelectMail } = mailSlice.actions;

export const openMailBox = (state) => state.mail.SelectedMail;
// export const openMailBox = reducers.SelectMail;
export default mailSlice.reducer;
