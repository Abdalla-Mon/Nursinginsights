import getData from "@/lib/fetch_data/getData";
import LecturesContent from "@/app/(private)/dashboard/courses/[course_id]/components/LecturesContent";

export async function generateStaticParams() {
  const path = "/api/courses";
  let courses = await getData(path);
  if (!courses || !courses.data || !Array.isArray(courses.data)) {
    console.error("No data available at the moment. Please try again later.");
    return [];
  }
  return courses.data.map((course) => ({
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
