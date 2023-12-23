"use client";
import { Provider } from "react-redux";
import { makeStore } from "../lib/redux/store/store.js";
export default function StoreProvider({ children }) {
  return <Provider store={makeStore}>{children}</Provider>;
}
