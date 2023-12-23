"use client";
import { handleFacebookSignIn } from "@/lib/auth/facebook/facebook_auth";

function Home() {
  return (
    <div>
      <button onClick={handleFacebookSignIn}>Sign in with facebook</button>
    </div>
  );
}
export default Home;
