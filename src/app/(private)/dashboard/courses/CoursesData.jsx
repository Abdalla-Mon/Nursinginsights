"use client";
import getData from "@/lib/fetch_data/getData";
import CourseCard from "@/sharedComponents/cards/courseCard/CourseCard";
import { useState } from "react";
import { Modal } from "@mui/material";

import CourseContent from "@/app/(private)/dashboard/courses/components/CoursesContent/CoursesContent";

export default async function CoursesData() {
  const [reValidate, setReValidate] = useState(false);
  // const data = null;
  const path = `/api/courses?page=1&limit=10`;
  const data = await getData(path);
  if (!data) return "No data available at the moment. Please try again later.";
  return (
    <div>
      <h1>Courses</h1>
      <div className={"grid tab:grid-cols-2 xl:grid-cols-3 gap-4"}>
        {data.data.map((course) => (
          <CourseCard course={course} key={course.id} dashboard={true}>
            <EditModal course={course} setReValidate={setReValidate} />
          </CourseCard>
        ))}
      </div>
    </div>
  );
}
function EditModal({ course, setReValidate }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button
        onClick={handleOpen}
        className={"cursor-pointer font-bold text-blue-500"}
      >
        Edit The course
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={"overflow-y-auto p-4 flex "}
      >
        <div className={"flex m-auto"}>
          <CourseContent
            data={course}
            handleClose={handleClose}
            setReValidate={setReValidate}
          />
        </div>
      </Modal>{" "}
    </div>
  );
}
