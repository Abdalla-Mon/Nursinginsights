"use client";
import CreateFields from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateFields";
import { Button } from "@mui/material";
import { FaSave } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { database } from "@/lib/firebase_config/firebase_conig";
import { AppLoadingContext } from "@/app/StorePorvider";
import { supabase } from "@/lib/supabaseConfig/supabaseConfig";

const lecturesFields = {
  idLabel: {
    label: "Lecture Id",
    id: "lectureId",
    multi: false,
  },
  firstField: {
    label: "Lecture Name",
    id: "lectureName",
    multi: false,
  },
  secondField: {
    label: "Lecture Link",
    id: "lectureLink",
    multi: true,
  },
};

export default function CreateLectures({ course_id, courseData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const courseLectures = courseData;
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState([]);

  async function submit(data) {
    setLoading(true);
    console.log(deleted);
    if (data) {
      let lectures = groupLectures(data);
      lectures = lectures.filter((lecture, index) => {
        return !deleted.includes(index);
      });
      await updateLectures(lectures, course_id);
    }
    setLoading(false);
  }

  // if (!courseLectures) return <div>loading...</div>;
  return (
    <>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <h3>lectures content</h3>
        <CreateFields
          register={register}
          errors={errors}
          text={"Add lectures"}
          fields={lecturesFields}
          id={true}
          array={courseLectures.lectures}
          setDeleted={setDeleted}
        />
        <Button
          startIcon={<FaSave />}
          variant="contained"
          type={"submit"}
          className={"mt-2"}
        >
          {!loading ? "Save" : "Updating..."}
        </Button>
      </form>
    </>
  );
}

function groupLectures(data) {
  const lectures = {};

  for (const key in data) {
    const [property, index] = key.split("-");

    if (!lectures[index]) {
      lectures[index] = {};
    }
    lectures[index][property] = data[key];
  }

  return Object.values(lectures);
}

async function updateLectures(lectures, id) {
  const { data, error } = await supabase
    .from("courses")
    .update({ lectures: { id, lectures: lectures } })
    .filter(`lectures->>id`, "eq", id);
}


// firebase submit
// async function submit(data) {
//   setLoading(true);
//   if (data) {
//     let lectures = groupLectures(data);
//     lectures.forEach((lecture) => {
//       // const docRef = doc(
//       //   database,
//       //   "courses",
//       //   course_id,
//       //   "lectures",
//       //   lecture.lectureId,
//       // );
//       if (deleted.includes(lecture.lectureId)) {
//         // deleteDoc(docRef);
//         return;
//       }
//       // setDoc(docRef, {
//       //   info: {
//       //     lectureId: lecture.lectureId,
//       //     lectureName: lecture.lectureName,
//       //     lectureLink: lecture.lectureLink,
//       //   },
//       // });
//     });
//   }
//   setLoading(false);
// }