import { configureStore } from "@reduxjs/toolkit";
import TweetSlice from "./tweetSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { tweets: TweetSlice, auth: authSlice },
});

export default store;
