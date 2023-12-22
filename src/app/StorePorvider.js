"use client";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store/store";
export default function StoreProvider({ children }) {
  return <Provider store={makeStore}>{children}</Provider>;
}
