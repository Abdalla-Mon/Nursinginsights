import localFont from "next/font/local";
import "../styles/index.css";
import StoreProvider from "./StorePorvider";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/sharedComponents/footer/footer";

export const cubid = localFont({
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
            style: "bold",
        },
        {
            path: "./euclid_font/Euclid Circular A Bold Italic.ttf",
            weight: "700",
            style: "italic",
        },
    ],
});
export const metadata = {
    title: "Nursing Insights",
    description:
        "Unlock the path to nursing excellence with NursingInsights – your comprehensive online resource for students and professionals in the field of nursing. Explore enriching lectures, insightful videos, and interactive quizzes designed to elevate your academic journey. Delve into department-specific information, guiding you to excel in every facet of your college experience. Join us in fostering a community committed to the art and science of nursing. Empower your knowledge, embrace your potential, and thrive in the world of healthcare at NursingInsights.",
    keyWords:
        "Nursing, nursing education, healthcare, student resources, nursing excellence ",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={cubid.className}>
        <StoreProvider>
            <Navbar/>
            {children}
            <Footer/>
        </StoreProvider>
        </body>
        </html>
    );
}
