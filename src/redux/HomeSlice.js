import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: [{id:1, text:"hola soy un tweet", user: "Pepito"}],
  reducers: {
    createTweet(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = HomeSlice;
export const { createTweet } = actions;
export default reducer;
