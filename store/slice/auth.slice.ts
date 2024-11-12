import { UserData } from "@/models/response";
import { Auth } from "@/models/state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Auth = {
  isAuthenticated: false,
  user: new UserData()
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
    }
  },
});

export const { updateUserInfo } = authSlice.actions
export const authReducer = authSlice.reducer;
