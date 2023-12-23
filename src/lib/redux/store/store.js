import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slices/testSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

// export const wrapper = createWrapper(makeStore);
