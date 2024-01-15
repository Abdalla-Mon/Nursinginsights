"use client";
import { use_selector } from "@/lib/redux/hooks/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { authState } = use_selector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!authState) router.push("/login");
  }, [authState]);
  return <div>Profile</div>;
}
