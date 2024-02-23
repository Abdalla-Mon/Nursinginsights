"use client";
import CreateModal from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateModal";
import CoursesData from "@/app/(private)/dashboard/courses/CoursesData";
import { useState } from "react";
import DashMenu from "@/app/(private)/dashboard/DashboardMenu/DashMenu";

export default function DashboardCourses() {
   const [reValidate, setReValidate] = useState(false);
   return (
           <div className={"flex flex-row gap-8 justify-center"}>
              <DashMenu />
              <div className={"w-full tab:w-[70%]"}>
                 <CreateModal setReValidate={setReValidate} />
                 <CoursesData reValidate={reValidate} />
              </div>
           </div>
   );
}
