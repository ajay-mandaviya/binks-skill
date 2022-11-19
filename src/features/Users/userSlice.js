import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../services";

export const getAllUsers = createAsyncThunk(
  "post/getUsers",
  async (_, thunkApi) => {
    try {
      const response = await fetchUser();
      const users = await response.json();

      return users;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userProfileSlice = createSlice({
  name: "userList",
  initialState: {
    allUsers: [],
    loading: false,
    currentUser: {},
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.results;
    },
    [getAllUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const { setCurrentUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
