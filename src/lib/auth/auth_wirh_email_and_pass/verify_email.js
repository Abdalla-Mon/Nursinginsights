import { auth } from "@/lib/firebase_config/firebase_conig";
import { sendEmailVerification } from "firebase/auth";

export const verifyEmail = async () => {
  const user = auth.currentUser;
  const verify = await sendEmailVerification(user);
};
