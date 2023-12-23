import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase_config/firebase_conig";

export const signUp = async (registerEmail, registerPassword) => {
  const user = await createUserWithEmailAndPassword(
    auth,
    registerEmail,
    registerPassword
  );

  const verify = await sendEmailVerification(user);
};
