"use client";
import CreateForm from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateForm/CreateForm";

export default function CourseContent({ data, handleClose, setReValidate }) {
  if (!data) return <div>loading...</div>;
  const formInputs = [
    {
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
    },
  ];
  return (
    <div>
      <CreateForm
        courses={formInputs}
        style="w-full max-w-[800px] "
        selectValue={data.category}
        descriptionArray={data.description}
        buttonText={"Edit"}
        handleClose={handleClose}
        setReValidate={setReValidate}
        edit={true}
      />
    </div>
  );
}
