import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const reducerState = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.current = action.payload;
    },
  },
});
