"use client"
import {useForm} from "react-hook-form";
import {doc, setDoc} from "firebase/firestore";
import {useState} from "react";
import {database} from "@/lib/firebase_config/firebase_conig";

import CreateLectures from "@/app/(private)/dashboard/courses/[course_id]/components/CreateLectures";


export default async function LecturesContent({course_id}) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [loading, setLoading] = useState(false);

  async function submit(data) {
    if (!data) return;
    setLoading(true)
    const lectures = groupLectures(data);
    lectures.forEach((lecture) => {
      const docRef = doc(database, "courses", course_id, "lectures", lecture.lectureId);
      setDoc(docRef, {
        info: {
          lectureId: lecture.lectureId,
          lectureName: lecture.lectureName,
          lectureLink: lecture.lectureLink
        }
      })
    })
    setLoading(false)
  }


  return (
    <div>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <h3>lectures content</h3>
        <CreateLectures course_id={course_id} loading={loading} errors={errors} register={register}/>
      </form>
    </div>
  )
}

function groupLectures(data) {
  const lectures = {};

  for (const key in data) {
    const [property, index] = key.split('-');

    if (!lectures[index]) {
      lectures[index] = {};
    }

    lectures[index][property] = data[key];
  }

  return Object.values(lectures);
}