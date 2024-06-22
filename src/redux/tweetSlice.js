import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: { tweets: [] },
  reducers: {
    createTweet(state, action) {
      state.tweets.unshift(action.payload);
    },

    storeTweets(state, action) {
      state.tweets = action.payload;
    },

    toggleTweetLike(state, action) {
      const selectedTweet = state.tweets.find(
        (t) => t._id === action.payload.tweetId
      );
      if (selectedTweet.likes.includes(action.payload.userId)) {
        selectedTweet.likes = selectedTweet.likes.filter(
          (item) => item !== action.payload.userId
        );
      } else {
        selectedTweet.likes.push(action.payload.userId);
      }
    },

    removeTweet(state, action) {
      return state.filter((tweet) => tweet._id !== action.payload);
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { createTweet, storeTweets, toggleTweetLike, removeTweet } =
  actions;
export default reducer;
