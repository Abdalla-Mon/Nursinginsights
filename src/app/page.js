"use client";
import { selectAuthState, setAuthState } from "../lib/redux/slices/testSlice";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{authState.authState ? "Logged in" : "Not Logged In"}</div>
      <button
        onClick={() =>
          authState.authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState.authState ? "Logout" : "LogIn"}
        <div>{authState.num}</div>
      </button>
    </div>
  );
}
export default Home;
