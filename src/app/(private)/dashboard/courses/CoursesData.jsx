"use client"
import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
import {useContext} from "react";
import {AppLoadingContext} from "@/app/StorePorvider";

export default async function CoursesData() {
  const {url} = useContext(AppLoadingContext);
  if (!url) return <div>loading....</div>;
  const data = await getData(`${url}/api/courses`);
  if (!data) return "No data available at the moment. Please try again later."
  const courses = data?.map((course) => {
    return (
      <div key={course.id}>
        <h2>{course.title}</h2>
        <Link href={`/dashboard/courses/${course.id}`}>Edit Course</Link>
      </div>
    );
  });
  return (
    <div>
      <h1>Courses</h1>
      {courses}
    </div>
  );
}
