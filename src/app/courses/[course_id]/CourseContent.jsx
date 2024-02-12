"use client";
import { useContext, useEffect, useState } from "react";
import getData from "@/lib/fetch_data/getData";
import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

export default async function CourseContent({ data }) {
  // const fullUrl = `http:localhost:3000/api/courses/${course_id}`;
  // const result = await getData(fullUrl);
  // const data = result;
  // if (!data) return <div>loading...</div>;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [w, setWindow] = useState(null);
  useEffect(() => {
    setWindow(window);
  }, []);

  async function handleChange(event, value) {
    const searchParams = new URLSearchParams(window.location.search);
    let search = [];
    for (const param of searchParams) {
      search.push(`${param[0]}=${param[1]}`);
    }
    search = search.map((param) => {
      if (param.includes("page")) {
        return param.replace(/page=\d+/, `page=${value - 1}`);
      }
      return param;
    });
    search = `?${search.join("&")}`;

    router.push(search);
    // if (searchParams) {
    //   router.push(`?page=${value - 1}&limit=${limit}`);
    // } else {
    //   router.push(`?page=${value - 1}`);
    // }
    // const fullUrl = `http:localhost:3000/api/courses/${course_id}`;
    // const result = await getData(fullUrl);
    // const data = result;
    // if (!data) return <div>loading...</div>;
  }

  const courseData = data.lectures.map((lecture) => {
    return (
      <div key={lecture.id}>
        <h2>{lecture.lectureName}</h2>
      </div>
    );
  });
  return (
    <div>
      <h1>Courses</h1>

      <div className={"grid grid-cols-3 gap-10"}>{courseData}</div>
      <Pagination count={10} onChange={handleChange} />
    </div>
  );
}
