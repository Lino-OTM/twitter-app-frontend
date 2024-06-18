import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: [],
  reducers: {
    createTweet(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = HomeSlice;
export const { createTweet } = actions;
export default reducer;
