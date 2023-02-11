import { createSlice } from "@reduxjs/toolkit";

const initialSTate = {
  current: null,
};

const reducerState = createSlice({
  name: "user",
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

export const { logIn, logOut } = reducerState.actions;

export default reducerState.reducer;
