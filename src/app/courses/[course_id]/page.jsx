import CourseContent from "@/app/courses/[course_id]/CourseContent";
import getData from "@/lib/fetch_data/getData";
import { NextRequest } from "next/server";
import { useRouter } from "next/navigation";

export async function generateMetadata({ params: { course_id } }) {
  let url = `https://nursinginsights.vercel.app/api/courses?id=${course_id}`;
  let result = await getData(url);
  if (!result) {
    url = `http://localhost:3000/api/courses/=${course_id}`;
    result = await getData(url);
  }
  if (!result[0].title) {
    return {
      title: "Title Not Found",
    };
  }
  let title = result[0].title;
  title = title[0].toUpperCase() + title.slice(1);
  return {
    title: title + " | Courses",
  };
}

export async function generateStaticParams() {
  let url = `https://nursinginsights.vercel.app/api/courses`;
  let courses = await getData(url);
  if (!courses) {
    url = `http://localhost:3000/api/courses`;
    courses = await getData(url);
  }
  return courses.map((course) => ({
    params: {
      course_id: course.id.toString(),
    },
  }));
}

async function fetchData(url, page = 0, limit = 5, title = "") {
  const res = await fetch(url + `?page=${page}&limit=${limit}&title=${title}`);
  const data = await res.json();
  return data;
}

export default async function Course({ params: { course_id }, searchParams }) {
  const { page, limit, title } = searchParams;
  const fullUrl = `http:localhost:3000/api/courses/${course_id}`;
  const result = await fetchData(fullUrl, page, limit, title);
  const data = result;
  if (!data) return <div>loading...</div>;

  return <CourseContent data={data} />;
}
