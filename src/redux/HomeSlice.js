import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: { tweets: [{ text: "hola" }] },
  reducers: {
    createTweet(state, action) {
      state.tweets.push(action.payload);
    },
  },
});

const { actions, reducer } = HomeSlice;
export const { createTweet } = actions;
export default reducer;
