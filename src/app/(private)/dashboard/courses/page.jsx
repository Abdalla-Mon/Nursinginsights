"use client"
import CreateModal from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateModal";
import CoursesData from "@/app/(private)/dashboard/courses/CoursesData";
import {useState} from "react";

export default function DashboardPage() {
  const [reValidate, setReValidate] = useState(false);
  return (
    <div>
      <CreateModal setReValidate={setReValidate}/>
      <CoursesData reValidate={reValidate}/>
    </div>
  );
}




