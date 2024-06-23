import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "" },
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },

    setUser: (state, action) => {
      return action.payload;
    },
    logOut: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
