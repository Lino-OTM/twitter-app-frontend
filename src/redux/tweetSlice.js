import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    createTweet(state, action) {
      state.unshift(action.payload);
    },

    storeTweets(state, action) {
      return state= action.payload;
    },

    toggleTweetLike(state, action) {
      const selectedTweet = state.find(
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
