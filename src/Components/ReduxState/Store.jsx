// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./ReduxState";

import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {
//     myReducer,
//   },
// }); // storeing the reducer

export const store = configureStore({
  reducer: {
    myReducer,
  },
});
