"use client";
import { useContext, useEffect, useState } from "react";

import CreateLectures from "@/app/(private)/dashboard/courses/[course_id]/components/CreateLectures";
import { AppLoadingContext } from "@/app/StorePorvider";
import getData from "@/lib/fetch_data/getData";

export default async function LecturesContent({ course_id }) {
  const { url } = useContext(AppLoadingContext);
  const fullUrl = `${url}/api/courses/${course_id}`;

  const result = await getData(fullUrl);
  const data = result;
  return (
    <div className={"w-full md:min-w-[600px] max-w-[800px] p-4 py-5 mx-auto"}>
      <CreateLectures course_id={course_id} courseData={data} />
    </div>
  );
}
