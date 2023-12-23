"use client";
import { login } from "@/lib/auth/auth_wirh_email_and_pass/login_with_email";
import { signUp } from "@/lib/auth/auth_wirh_email_and_pass/signup_with_email";
import { verifyEmail } from "@/lib/auth/auth_wirh_email_and_pass/verify_email";

function Home() {
  return (
    <div>
      <button
        onClick={() => {
          login("abdotlos60@gmail.com", 123456789);
        }}
      >
        Sign in{" "}
      </button>
      <button
        onClick={() => {
          signUp("abdo2@g.com", 123456789);
        }}
      >
        Create account
      </button>
      <button onClick={verifyEmail}>verify</button>
    </div>
  );
}
export default Home;
