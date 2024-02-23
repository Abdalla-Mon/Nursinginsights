"use client";
import CoursesData from "@/app/(private)/dashboard/courses/CoursesData";

export default function DashboardCourses({searchParams}) {
   return (
           <div >
                 <CoursesData  searchParams={searchParams} />
           </div>
   );
}
