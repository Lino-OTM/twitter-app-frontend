import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "" },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
