import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
}; // createing an 

const reducerState = createSlice({
  name: "users",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.current = action.payload;
    },

    logOutUser: (state, action) => {
      state.current = null;
    },
  },
}); // creating the reducer state

export const { logInUser, logOutUser } = reducerState.actions;

export default reducerState.reducer;
