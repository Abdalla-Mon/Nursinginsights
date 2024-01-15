import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_config/firebase_conig";

export const login = async (loginEmail, loginPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
    return null;
  } catch (error) {
    let errorCode = await error.code;
    errorCode = errorCode.replace("auth/", "");
    console.log(errorCode);

    return errorCode;
  }
};
