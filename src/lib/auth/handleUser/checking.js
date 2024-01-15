import { auth } from "@/lib/firebase_config/firebase_conig";
import { onAuthStateChanged } from "firebase/auth";
import { use_dispatch } from "@/lib/redux/hooks/hooks";
import { setAuthState } from "@/lib/redux/slices/authSlice";
export const AppAuthProvider = ({ children }) => {
  const dispatch = use_dispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      dispatch(setAuthState(true));
    } else {
      dispatch(setAuthState(false));
    }
  });
  return <>{children}</>;
};
