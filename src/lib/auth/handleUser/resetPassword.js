import { auth } from "@/lib/firebase_config/firebase_conig";
import { sendPasswordResetEmail } from "firebase/auth";

export const resetPassword = async (resetEmail) => {
  try {
    const user = await sendPasswordResetEmail(auth, resetEmail);
  } catch (error) {
    let errorCode = await error?.code;
    if (!errorCode) return;
    errorCode = errorCode.replace("auth/", "");
    console.log(errorCode);

    return errorCode;
  }
};
