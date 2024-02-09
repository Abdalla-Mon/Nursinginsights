import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {AppLoadingContext} from "@/app/StorePorvider";

export default async function CoursesData({revalidate}) {
  const {url} = useContext(AppLoadingContext);
  if (!url) return <div>loading....</div>;
  const data = await getData(`${url}/api/courses`);
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
