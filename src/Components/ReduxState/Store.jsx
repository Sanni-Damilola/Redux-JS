import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";

// storeing the functions from ReduxState
export const store = configureStore({
  reducer: {
    myReducer,
  },
});
