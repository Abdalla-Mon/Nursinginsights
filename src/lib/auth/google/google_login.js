"use client";
import { auth } from "@/lib/firebase_config/firebase_conig";
import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

// export const signWithGoogle = signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     console.log("Google Login Success");
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     console.log("Google Login field");
//   });
export const signWithGoogle = async (setRedirect) => {
  try {
    const user = await signInWithRedirect(auth, provider);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log("Google Login field");
  }
};
// export const getGoogleSingResult = async () => {
//   try {
//     const result = await getRedirectResult(auth);
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     console.log(result);
//     console.log(credential);
//     // The signed-in user info.
//     const user = result.user;
//   } catch (error) {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   }
// };
