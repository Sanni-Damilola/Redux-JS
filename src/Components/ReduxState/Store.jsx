// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./ReduxState";

// export const store = configureStore({
//   reducer: {
//     myReducer,
//   },
// }); // storeing the reducer

import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState";

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
