"use client";
import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {AppLoadingContext} from "@/app/StorePorvider";
import {useContext,} from "react";

export default async function Courses() {
  const category = useSearchParams().get("category");
  const {url} = useContext(AppLoadingContext)
  const result = await getData(`${url}/api/courses?category=${category || "all"}`);
  const data = result;
  if (!data) return <div>loading...</div>;

  const courses = data.map((course) => (
    <div key={course.id}>
      <h2>{course.title}</h2>
      <Link href={`/courses/${course.id}`}>View Course</Link>
    </div>
  ));

  return (
    <div>
      <h1>Courses</h1>
      {courses}
    </div>
  );
}