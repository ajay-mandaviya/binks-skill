import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import userSlice from "./features/Users/userSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    authSlice,
  },
});
