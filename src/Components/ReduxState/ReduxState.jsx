import { createSlice } from "@reduxjs/toolkit";

const initialSTate = {
  current: null,
};



const reducerState = createSlice({
  name: "user",
  initialState,
})
