import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/counter/mailSlice";
import userReducer from "../features/counter/userSlice";
import modeReducer from "../features/counter/modeSlice";

// "../features/counter/modeSlice";
export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    mode: modeReducer,
  },
});
