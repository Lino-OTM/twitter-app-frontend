import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: { tweets: [] },
  reducers: {
    createTweet(state, action) {
      state.tweets.push(action.payload);
    },
    storeTweets(state, action) {
      state.tweets = action.payload;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, storeTweets } = actions;
export default reducer;
