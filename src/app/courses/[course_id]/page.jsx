import CourseContent from "@/app/courses/[course_id]/CourseContent";
import getData from "@/lib/fetch_data/getData";

export async function generateMetadata({ params: { course_id } }) {
  let url = `/api/courses?id=${course_id}`;
  let result = await getData(url);
  result = result[0];
  if (!result.title) {
    return {
      title: "Title Not Found",
    };
  }
  let { title } = result;

  return {
    title: title + " | Nursing Courses",
    description: `${title} is a comprehensive nursing course offered by the Faculty of Nursing Cairo university. Learn more about this and other nursing courses on nursing insights website.`,
    keyWords:
      "Nursing, nursing education, healthcare, student resources, nursing excellence, nursing courses, Nursing Insights, online nursing courses, nursing community, academic journey, healthcare professionals",
  };
}

export async function generateStaticParams() {
  let url = `/api/courses`;
  let courses = await getData(url);
  courses = courses.map((course) => ({
    params: {
      course_id: course.id.toString(),
    },
  }));
  return courses;
}

export default async function Course({ params: { course_id }, searchParams }) {
  let { page, limit, title } = searchParams;
  const path = `/api/courses/${course_id}`;
  const result = await getData(
    path + `?page=${page || 1}&limit=${limit || 9}&title=${title || ""}`,
  );
  const data = result.lectures;
  console.log(result);
  if (!data) return <div>loading...</div>;

  // return <CourseContent data={data} />;
}
