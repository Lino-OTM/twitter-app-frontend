import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: { tweets: ["sss"] },
  reducers: {
    createTweet(state, action) {
      state.tweets.push(action.payload);
    },
    getAllTweets(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, getAllTweets } = actions;
export default reducer;
