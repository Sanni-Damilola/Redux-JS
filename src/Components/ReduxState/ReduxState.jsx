import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};


const ReducerState = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {

    }
  }
})