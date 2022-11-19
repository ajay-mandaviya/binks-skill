import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: localStorage.getItem("binks") || false,
    user: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
      localStorage.setItem("binks", true);
    },

    logout: (state) => {
      localStorage.removeItem("binks");
      state.isLogin = false;
      state.user = {};
    },
  },
});

export const { logout, signIn } = authSlice.actions;
export default authSlice.reducer;
