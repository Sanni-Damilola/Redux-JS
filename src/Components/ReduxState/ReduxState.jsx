import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const ReducerState = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.current = action.payload;
    },
    logOut: (state, action) => {
      state.current = null;
    },
  },
});
