"use client";
import getData from "@/lib/fetch_data/getData";
import CourseCard from "@/sharedComponents/cards/courseCard/CourseCard";
import { useState } from "react";
import { Modal } from "@mui/material";

import CourseContent from "@/app/(private)/dashboard/courses/components/CoursesContent/CoursesContent";
import Banner, {BannerContent} from "@/sharedComponents/banner/Banner";
import DashMenu from "@/app/(private)/dashboard/DashboardMenu/DashMenu";
import CreateModal from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateModal";

export default async function CoursesData({ searchParams}) {
  const [reValidate, setReValidate] = useState(false);
    let { page, limit, title, category } = searchParams;
    if (!page) {
        page = 1;
    }
    if (!limit) {
        limit = 12;
    }
    if (!title) {
        title = "";
    }
    if (!category||category==="all") {
        category = "";
    }
    let path =
          "/api/courses" +
          `?page=${page}&limit=${limit}&title=${title}&category=${category}`;
    const data = await getData(path);
  if (!data) return "No data available at the moment. Please try again later.";
  return (
    <div className={" "}>
        <Banner>
            <CreateModal setReValidate={setReValidate} />
            <BannerContent category={category} searchParams={searchParams} length={data.total}/>

            <DashMenu />
        </Banner>
<div className={"container mx-auto mt-[-150px] section_padding"}>

        <div className={"grid tab:grid-cols-2 lg:grid-cols-3 gap-4"}>
        {data.data.map((course) => (
          <CourseCard course={course} key={course.id} dashboard={true}>
            <EditModal course={course} setReValidate={setReValidate} />
          </CourseCard>
        ))}
      </div>
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
        className={"cursor-pointer font-bold highlighted text-xl"}
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
