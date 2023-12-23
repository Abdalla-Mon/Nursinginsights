import GoogleProvider from "next-auth/providers/google";
import data from "./google_config.json";
console.log(data);
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "622044934109-ehd98u91enoask4usc7a41iqfnr04ns5.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
