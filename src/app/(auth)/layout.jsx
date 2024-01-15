// const metadata = {
//   title: "Nursing Insights - Empowering Nursing Excellence",
//   description:
//     "Unlock the path to nursing excellence with NursingInsights – your comprehensive online resource for students and professionals in the field of nursing. Explore enriching lectures, insightful videos, and interactive quizzes designed to elevate your academic journey. Delve into department-specific information, guiding you to excel in every facet of your college experience. Join us in fostering a community committed to the art and science of nursing. Empower your knowledge, embrace your potential, and thrive in the world of healthcare at NursingInsights.",
//   keyWords:
//     "Nursing, nursing education, healthcare, student resources, nursing excellence ",
// };

import Image from "next/image";
import Link from "next/link";
import { FormCard } from "./component/FormCard";
import HandleAuth from "./HandleAuth";

export default function authlayout({ children }) {
  return (
    <>
      <HandleAuth>{children}</HandleAuth>
    </>
  );
}
