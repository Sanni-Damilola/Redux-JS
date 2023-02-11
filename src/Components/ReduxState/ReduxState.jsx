import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

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
});

export const { logInUser, logOutUser } = reducerState.actions;

export default reducerState.reducer;
