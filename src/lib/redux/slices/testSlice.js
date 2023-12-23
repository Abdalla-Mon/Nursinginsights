import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  authState: false,
  num: 0,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },
  // extraReducers: {what is this do?
  //     [HYDRATE]: (state, action) => {
  //     return {
  //         ...state,
  //         ...action.payload.auth,
  //     };
  //     },
  // },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
