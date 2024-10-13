import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: true,
  },
  reducers: {
    toggleForm: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});
export const { toggleForm } = loginSlice.actions;
export default loginSlice.reducer;
