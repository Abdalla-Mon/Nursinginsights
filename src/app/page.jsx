"use client";
import { supabase } from "@/lib/supabaseConfig/supabaseConfig";

async function Home() {
  return <div></div>;
}

export default Home;
// update row
// const { data, error } = await supabase
//   .from("courses")
//   .update({ courses: { id: "esadw" } })
//   .filter(`courses->>category`, "eq", "firstgrade");
// console.log(data, error); update a row

// create new row
// const { data, error } = await supabase.from("courses").insert([
//   {
//     courses: {
//       id: newCourseId,
//     },
//     lectures: {
//       id: newLectureId,
//       title: "dsa",
//       content: "new_lecture",
//       course_id: newCourseId,
//     },
//   },
// ]);