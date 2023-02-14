import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  count: 0,
}; // createing an initiaState

const reducerState = createSlice({
  name: "users",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.current = action.payload;
    }, // function to login

    logOutUser: (state, action) => {
      state.current = null;
    }, // function to logout
    countFunction: (state) => {
      state.count += 1;
    },
  },
}); // creating the reducer state

export const { logInUser, logOutUser, countFunction } = reducerState.actions; // export funtions

export default reducerState.reducer; // export main reducer
