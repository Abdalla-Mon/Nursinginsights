"use client";
import getData from "@/lib/fetch_data/getData";
import CreateForm from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateForm/CreateForm";
import {useContext} from "react";
import {AppLoadingContext} from "@/app/StorePorvider";

export default async function CourseContent({course_id}) {
  const {url} = useContext(AppLoadingContext)
  const fullUrl = `${url}/api/courses?id=${course_id}`
  let result = await getData(fullUrl);

  let data = result[0]
  if (!data) return <div>loading...</div>;
  const formInputs = [{
    id: "title",
    name: "Title",
    type: "text",
    required: true,
    defaultValue: data.title,
  },
    {
      id: "id",
      name: "ID",
      type: "text",
      value: data.id,

    },
    {
      id: "select",
      name: "Select",
      type: "select",
      required: true,
    }
  ]
  return (
    <div>
      <CreateForm courses={formInputs} style="" selectValue={data.category} descriptionArray={data.description}
                  buttonText={"Edit"}/>
    </div>
  );
}
