import Link from "next/link";

export default function CourseCard({ course, dashboard, children }) {
  const category = course.category.replace(/_/g, " ");
  return (
    <div className={"course_card p-5  w-full mx-auto"}>
      <div className={"w-full h-[200px] card_image "}></div>
      <h3 className={"card_title"}>{course.title}</h3>

      <h6>
        {dashboard && children}
        {!dashboard && (
          <Link className={"course_details"} href={"/courses/" + course.id}>
            Read course details
          </Link>
        )}
      </h6>
      <div className={"flex justify-between items-center btn_container"}>
        <RenderLectureLink dashboard={dashboard} course={course} />
        <h4>
          <span className={"card_category capitalize"}>{category}</span>
        </h4>
      </div>
    </div>
  );
}
function RenderLectureLink({ dashboard, course }) {
  const href = dashboard ? "/dashboard/courses/" : "/courses/lectures/";
  return (
    <Link
      href={href + course.id + "?page=1&limit=12"}
      className={
        "course_button  text-white  flex items-center rounded-md w-fit text-center mt-5"
      }
    >
      {dashboard ? "Edit Lectures" : "Go to lectures"}
    </Link>
  );
}
