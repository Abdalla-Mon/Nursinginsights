import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  authState: false,
  num: 0,
  error: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAuthError(state, action) {
      state.error = action.payload;
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

export const { setAuthState, setAuthError } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
