"use client"
import CreateFields from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateFields";
import {Button} from "@mui/material";
import {FaSave} from "react-icons/fa";
import {useContext} from "react";
import {AppLoadingContext} from "@/app/StorePorvider";
import getData from "@/lib/fetch_data/getData";

const lecturesFields =
  {
    idLabel: {
      label: "Lecture Id",
      id: "lectureId",
      multi: false
    },
    firstField: {
      label: "Lecture Name",
      id: "lectureName",
      multi: false

    },
    secondField: {
      label: "Lecture Link",
      id: "lectureLink",
      multi: true
    }
  }

export default async function CreateLectures({course_id, loading, register, errors, setDeleted}) {
  const {url} = useContext(AppLoadingContext)
  const fullUrl = `${url}/api/courses/${course_id}`
  const result = await getData(fullUrl);
  let data = result;
  if (!data) return <div>loading...</div>
  return (
    <>
      <CreateFields register={register} errors={errors} text={"Add lectures"} fields={lecturesFields} id={true}
                    array={data}
                    setDeleted={setDeleted}
      />
      <Button startIcon={<FaSave/>} variant="contained"
              type={"submit"}
              className={"mt-2"}
      >
        {!loading ? "Save" : "Updating..."}
      </Button>
    </>
  )
}