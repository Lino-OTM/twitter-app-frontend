import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./HomeSlice";

const store = configureStore({
  reducer: { home: HomeReducer },
});

export default store;
