import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
        login: loginSlice,
        user: userSlice,
        modal:modalSlice
  },
});
export default store;
