import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_config/firebase_conig";
export const login = async (loginEmail, loginPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(await user);
  } catch (error) {
    console.log(error);
  }
};
