import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
        login: loginSlice,
        user: userSlice
  },
});
export default store;
