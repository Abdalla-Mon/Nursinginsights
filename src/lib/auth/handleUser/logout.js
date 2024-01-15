import { auth } from "@/lib/firebase_config/firebase_conig";

import { signOut } from "firebase/auth";

// ...
export async function handleLogOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Error logging out:", error);
  }
}
