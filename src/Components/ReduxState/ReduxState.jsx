import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
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
  },
}); // creating the reducer state

export const { logInUser, logOutUser } = reducerState.actions; // export funtions

export default reducerState.reducer;  // export main reducer
