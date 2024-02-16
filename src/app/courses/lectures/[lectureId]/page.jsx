import CourseContent from "@/app/courses/[courseId]/CourseContent";
import getData from "@/lib/fetch_data/getData";
import LecturesContent from "@/app/courses/lectures/[lectureId]/LecturesContent";

export async function generateMetadata({ params: { lectureId } }) {
  let url = `/api/courses?id=${lectureId}`;
  let result = await getData(url);
  result = result;
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
  courses = courses.data.map((course) => ({
    params: {
      courseId: course.id.toString(),
    },
  }));
  return courses;
}

export default async function Course({ params: { lectureId }, searchParams }) {
  let { page, limit, title } = searchParams;
  const path = `/api/courses/lectures/${lectureId}`;
  const result = await getData(
    path + `?page=${page || 1}&limit=${limit || 9}&title=${title || ""}`,
  );
  const data = result.lectures;
  if (!data) return <div>loading...</div>;

  return <LecturesContent data={data} />;
}
