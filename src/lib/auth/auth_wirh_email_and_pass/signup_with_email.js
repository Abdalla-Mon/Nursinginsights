import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase_config/firebase_conig";

export const signUp = async (registerEmail, registerPassword, userName) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    updateProfile(auth.currentUser, {
      displayName: userName,
    });
    console.log(user);
    const verify = await sendEmailVerification(user);
  } catch (error) {
    let errorCode = await error?.code;
    if (!errorCode) return;
    errorCode = errorCode.replace("auth/", "");
    return errorCode;
  }
};
