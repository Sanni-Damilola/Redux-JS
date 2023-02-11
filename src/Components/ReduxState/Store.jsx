import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
