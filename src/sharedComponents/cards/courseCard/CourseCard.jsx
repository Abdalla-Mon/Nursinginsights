import Link from "next/link";
import PrimaryBtn from "@/sharedComponents/buttons/Primary_btn/Primary_btn";
import Image from "next/image";

export default function CourseCard({ course, dashboard, children }) {
  const category = course.category.replace(/_/g, " ");
  return (
    <div className={"course_card p-5  w-full mx-auto"}>
      <div className={"w-full h-[300px] card_image "}>
          <Image width={300} height={300} src={"/card/card1.jpg"} className={"w-full h-full"} />
          {!dashboard && (
                <Link className={""} href={"/courses/" + course.id}>
                    <PrimaryBtn arrow={true}  class_name={" course_details "} text={"Course details"}/>
                </Link>
          )}

      </div>
      <h3 className={"card_title"}>{course.title}</h3>

      <div className={"text-xl"}>
        {dashboard && children}

      </div>
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
  const text=      dashboard ? "Edit Lectures" : "Go to lectures"

    return (
    <Link
      href={href + course.id + "?page=1&limit=12"}
      // className={
      //   // "course_button  text-white  flex items-center rounded-md w-fit text-center mt-5"
      // }
    >
        <PrimaryBtn text={text} arrow={true} />
    </Link>
  );
}
