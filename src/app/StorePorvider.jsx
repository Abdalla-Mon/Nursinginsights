"use client";
import {Provider} from "react-redux";
import {makeStore} from "../lib/redux/store/store.js";
import {AppAuthProvider} from "@/lib/auth/handleUser/checking.js";
import {createContext, useState} from "react";
import Loading from "./loading.js";

export const AppLoadingContext = createContext(null);
export default function StoreProvider({children}) {
  const [loading, setLoading] = useState(false);
  const url = window.location.origin

  return (
    <Provider store={makeStore}>
      <AppLoadingContext.Provider value={{loading, setLoading, url}}>
        {loading && <Loading/>}
        <AppAuthProvider>{children}</AppAuthProvider>
      </AppLoadingContext.Provider>
    </Provider>
  );
}
