"use client"
import {useSearchParams} from "next/navigation";
import {useContext} from "react";
import getData from "@/lib/fetch_data/getData";
import {AppLoadingContext} from "@/app/StorePorvider";

export default async function CourseContent({course_id}) {
  const q = useSearchParams().get("q");
  let {url} = useContext(AppLoadingContext)
  const fullUrl = `${url}/api/courses/${course_id}?q=${q || ""}`
  const result = await getData(fullUrl);
  const data = result;
  if (!data) return <div>loading...</div>;

  const courseData = data.map((course) => {
    return (
      <div key={course.id}>
        <h2>{course.title}</h2>
      </div>
    );
  });
  return (
    <div>
      <h1>Courses</h1>
      {courseData}
    </div>
  );
}