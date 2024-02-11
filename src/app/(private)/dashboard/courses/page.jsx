"use client";
import CreateModal from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateModal";
import CoursesData from "@/app/(private)/dashboard/courses/CoursesData";
import { useState } from "react";
import SecondaryBtn from "@/sharedComponents/buttons/SecondaryBtn/SecondaryBtn";

export default function DashboardPage() {
  const [reValidate, setReValidate] = useState(false);
  return (
    <div>
      <SecondaryBtn text={"Create a new course"} arrow={true} />
      <CreateModal setReValidate={setReValidate} />
      <CoursesData reValidate={reValidate} />
    </div>
  );
}
