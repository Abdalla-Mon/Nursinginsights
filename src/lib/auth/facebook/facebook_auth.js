// // make a login
// window.fbAsyncInit = function () {
//   FB.init({
//     appId: "{your-app-id}",
//     cookie: true,
//     xfbml: true,
//     version: "{api-version}",
//   });

//   FB.AppEvents.logPageView();
// };

// (function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

// //    check if login
// FB.getLoginStatus(function (response) {
//   statusChangeCallback(response);
// });

// import { auth } from "../../firebase_config/firebase_conig";
// import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
// export const handleFacebookSignIn = async () => {
//   try {
//     const provider = new FacebookAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     console.log(result);
//     const user = result.user;
//     // User is signed in
//   } catch (error) {
//     // Handle sign-in errors
//   }
// };
