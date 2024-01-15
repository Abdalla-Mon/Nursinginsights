"use client";

import Link from "next/link";

export function MemberShip({ pathname }) {
  const href = pathname === "/signup" ? "login" : "signup";
  const content =
    pathname === "/signup"
      ? "Alread have an account?"
      : "Not a member? Sign Up";
  return (
    <Link
      href={href}
      className="text-center mb-2 mt-[-10px] block special_link"
    >
      {content}
    </Link>
  );
}
