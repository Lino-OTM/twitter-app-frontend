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
  },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
