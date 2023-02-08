import { createSlice } from "@reduxjs/toolkit";

// createing an object / state
const initialState = {
  current: null,
};

// creating the reducer state
const ReduxState = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, actions) => {
      state.current = actions.payload;
    },
  }, // creating function
});

export const { loginUser } = ReduxState.actions; // exporting functions

export default ReduxState.reducer;


// 😎😉😊
