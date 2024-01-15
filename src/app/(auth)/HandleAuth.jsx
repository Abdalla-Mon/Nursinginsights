"use client";
import { use_selector } from "@/lib/redux/hooks/hooks";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function HandleAuth({ children }) {
  const { authState } = use_selector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (authState) router.push("/profile");
  }, [authState]);
  return (
    <>
      {!authState && (
        <div className="bg-white fixed top-0 left-0 w-full h-full z-50 centerd auth_layout">
          <Link href={"/"} className="absolute top-[20px] left-[20px]">
            <Image
              src="/logo_black_text.png"
              alt="Nursing Insights"
              width={100}
              height={100}
            />
          </Link>
          {children}
        </div>
      )}
    </>
  );
}
