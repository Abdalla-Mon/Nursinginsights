import getData from "@/lib/fetch_data/getData";
import Link from "next/link";

export default async function Courses({ searchParams }) {
  const category = searchParams.category;

  const result = await getData(`/api/courses?category=${category || "all"}`);

  const data = result.data;
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
