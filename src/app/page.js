"use client";
import { signIn } from "next-auth/react";

function Home() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
export default Home;
