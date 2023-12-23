import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StorePorvider";

// const roboto = Roboto({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });
const cubid = localFont({
  src: [
    {
      path: "./euclid_font/Euclid Circular A Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./euclid_font/Euclid Circular A Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./euclid_font/Euclid Circular A Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./euclid_font/Euclid Circular A Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cubid.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
