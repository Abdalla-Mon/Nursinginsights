import CourseContent from "@/app/(private)/dashboard/courses/components/CoursesContent/CoursesContent";
import getData from "@/lib/fetch_data/getData";
import LecturesContent from "@/app/(private)/dashboard/courses/[course_id]/components/LecturesContent";

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

export default function Course({ params: { course_id } }) {
  return (
    <div className={""}>
      <LecturesContent course_id={course_id} />
    </div>
  );
}
