import getData from "@/lib/fetch_data/getData";
import LecturesContent from "@/app/courses/lectures/[lectureId]/LecturesContent";

export async function generateMetadata({ params: { lectureId } }) {
  let url = `/api/courses?id=${lectureId}`;
  let result = await getData(url);
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
  return courses.data.map((course) => ({
    params: {
      courseId: course.id,
    },
  }));
}

export default async function Course({ params: { lectureId }, searchParams }) {
  let { page, limit, title } = searchParams;
  if (!page) {
    page = 1;
  }
  if (!limit) {
    limit = 12;
  }
  if (!title) {
    title = "";
  }

  const path = `/api/courses/lectures/${lectureId}`;
  const result = await getData(
    path + `?page=${page}&limit=${limit}&title=${title}`,
  );
  if (!result) return <div>loading...</div>;
  const data = result.lectures;

  return <LecturesContent data={data} />;
}
