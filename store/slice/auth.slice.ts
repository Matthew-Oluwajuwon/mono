import { Auth } from "@/models/state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Auth = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
