"use client";
import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
// export async function generateMetadata({ params: { userId } }){
//     const userData = getUser(userId)
//     const user = await userData

//     if (!user.name) {
//         return {
//             title: "User Not Found"
//         }
//     }

//     return {
//         title: user.name,
//         description: `This is the page of ${user.name}`
//     }

// }

// export async function generateStaticParams() {
//     const usersData= getAllUsers()
//     const users = await usersData

//     return users.map(user => ({
//         userId: user.id.toString()
//     }))
// }

export default async function Course({params: {course_id}}) {
  const q = useSearchParams().get("q");
  const [data, setData] = useState(null);
  console.log(q)
  useEffect(() => {
    const fetchData = async () => {
      const url = `${window.location.origin}/api/courses/${course_id}?q=${q || ""}`
      const result = await getData(url);
      console.log(url)
      setData(result);
    };
    fetchData();
  }, [q]);

  if (!data) return <div>loading...</div>;

  const courseData = data.map((course) => {
    return (
      <div key={course.id}>
        <h2>{course.title}</h2>
      </div>
    );
  });
  return (
    <div>
      <h1>Courses</h1>
      {courseData}
    </div>
  );
}
