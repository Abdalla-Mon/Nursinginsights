"use client"
import {doc, setDoc} from "firebase/firestore";
import {useForm} from "react-hook-form";
import CreateInput from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateInput";
import CreateSelect from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateSelect";
import PrimaryBtn from "@/sharedComponents/Primary_btn/Primary_btn";
import CreateFile from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateFile";
import CreateDescription
  from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateDescription";
import {database} from "@/lib/firebase_config/firebase_conig";
import {AppLoadingContext} from "@/app/StorePorvider";
import {useContext} from "react";
import {IoCloseCircle} from "react-icons/io5";
import courses from "../../../data/courses.json";

export default function CreateForm({handleClose, setReValidate}) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {setLoading} = useContext(AppLoadingContext);
  const onSubmit = async (data) => {
    setLoading(true);
    const {title, id, cat, image} = data;
    const description = groupDescription(data);
    const docRef = await doc(database, "courses", id);
    await setDoc(docRef, {
      info: {
        title,
        id,
        category: cat,
        description,
        image: image ? image : ""
      }
    })
    setLoading(false);
    setReValidate((prev) => !prev);
    handleClose();
  }
  const renderInput = (field) => {

    if (field.input.type === "select") {
      return <CreateSelect errors={errors} register={register}/>
    }
    if (field.input.type === "file") {
      return null;
    }
    return <CreateInput field={field} errors={errors} register={register}/>
  }
  return (
    <form
      className={"p-4 max-w-[600px] m-auto py-5 bg-[white] rounded min-w-full tab:min-w-[600px]  flex flex-col gap-2 relative ]"}
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      {courses.map((course, index) => {
        {
          return renderInput(course)
        }
      })}
      <CreateDescription errors={errors} register={register}/>
      <PrimaryBtn text={"Create"} type={""} class_name={"mt-4"} arrow={true}/>
      <IoCloseCircle className={"absolute top-[-12px]  right-[-12px] cursor-pointer text-4xl text-[red]"}
                     onClick={handleClose}
      />
    </form>
  )
}

function groupDescription(data) {
  const descriptions = [];

  for (let key in data) {
    if (key.startsWith('heading')) {
      const index = key.split('-')[1];
      const textBodyKey = `textBody-${index}`;
      data[textBodyKey] = data[textBodyKey].replace(/\n/g, ",");
      descriptions.push({heading: data[key], textBody: data[textBodyKey]});
    }
  }
  return descriptions;
}

