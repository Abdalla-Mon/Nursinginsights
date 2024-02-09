import CourseContent from "@/app/courses/[course_id]/CourseContent";
import getData from "@/lib/fetch_data/getData";

export async function generateMetadata({params: {course_id}}) {
  let url = `https://nursinginsights.vercel.app/api/courses?id=${course_id}`
  let result = await getData(url);
  if (!result) {
    url = `http://localhost:3000/api/courses?id=${course_id}`
    result = await getData(url);
  }
  if (!result[0].title) {
    return {
      title: "Title Not Found"
    }
  }
  let title = result[0].title;
  title = title[0].toUpperCase() + title.slice(1);
  return {
    title: title + " | Courses",
  }

}

export async function generateStaticParams() {
  let url = `https://nursinginsights.vercel.app/api/courses`;
  let courses = await getData(url);
  if (!courses) {
    url = `http://localhost:3000/api/courses`
    courses = await getData(url);
  }
  return courses.map(course => ({
    params: {
      course_id: course.id.toString()
    }
  }));
}

export default async function Course({params: {course_id}},) {
  return (
    <CourseContent course_id={course_id}/>
  )
}
