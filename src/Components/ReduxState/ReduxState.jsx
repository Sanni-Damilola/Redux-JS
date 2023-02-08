import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const ReduxState = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, actions) => {
      state.current = actions.payload;
    },
  },
});

export const {} = ReduxState.actions;

export default ReduxState.reducer;
