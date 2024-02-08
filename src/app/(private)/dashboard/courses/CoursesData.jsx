"use client";
import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
import {useEffect, useState} from "react";

export default async function CoursesData({revalidate}) {
  const [host, setHost] = useState("");
  useEffect(() => {
    setHost(window.location.origin);
  }, []);
  if (!host) return <div>loading...</div>;
  const data = await getData(`${host}/api/courses`);
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
