"use client";

import CreateLectures from "@/app/(private)/dashboard/courses/[course_id]/components/CreateLectures";
import getData from "@/lib/fetch_data/getData";

export default async function LecturesContent({ course_id }) {
  const result = await getData(`/api/courses/lectures/${course_id}`);
  const data = result;
  return (
    <div className={"w-full md:min-w-[600px] max-w-[800px] p-4 py-5 mx-auto"}>
      <CreateLectures course_id={course_id} courseData={data} />
    </div>
  );
}
