"use client"
import {useForm} from "react-hook-form";
import CreateInput from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateInput";
import CreateSelect from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateSelect";
import PrimaryBtn from "@/sharedComponents/Primary_btn/Primary_btn";
import {deleteDoc} from "firebase/firestore";
import {useRouter} from "next/navigation";

import CreateFields
  from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateInputs/CreateFields";
import {useContext, useState} from "react";
import {IoCloseCircle} from "react-icons/io5";
import {MdDelete} from "react-icons/md";

import {AppLoadingContext} from "@/app/StorePorvider";
import {doc, setDoc} from "firebase/firestore";
import {database} from "@/lib/firebase_config/firebase_conig";
import {Button} from "@mui/material";

export default function CreateForm(props) {
  const {courses, style, selectValue = "", descriptionArray, buttonText = "Create", handleClose, setReValidate} = props;
  const [deleteBtn, setDelete] = useState(false);
  const [deleted, setDeleted] = useState([]);
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {setLoading} = useContext(AppLoadingContext);
  const history = useRouter();
  const onSubmit = async (data) => {
    const {title, id, cat, image} = data;
    setLoading(true);
    const description = groupDescription(data, deleted);

    const docRef = await doc(database, "courses", id);
    if (deleteBtn) {
      await deleteDoc(docRef);
      setLoading(false);
      history.back();
      return ""
    }

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
    if (setReValidate) {
      setReValidate((prev) => !prev);
    }
    if (!handleClose) return
    handleClose();
  }
  const renderInput = (field, key) => {

    if (field.type === "select") {
      return <CreateSelect errors={errors} register={register} value={selectValue} key={key}/>
    }
    if (field.type === "file") {
      return null;
    }
    return <CreateInput field={field} errors={errors} register={register} key={key}/>
  }
  const descriptionFields =
    {
      firstField: {
        label: "Heading",
        id: "heading",
        multi: false

      },
      secondField: {
        label: "Text Body",
        id: "textBody",
        multi: true
      }
    }
  return (
    <form
      className={"p-4 max-w-[600px] m-auto py-5 bg-[white] rounded min-w-full tab:min-w-[600px]  flex flex-col gap-2 relative z-0 ] " + style}
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      {courses.map((course, index) => {
        {
          return renderInput(course, index)
        }
      })}

      <CreateFields errors={errors} register={register} array={descriptionArray} fields={descriptionFields}

                    setDeleted={setDeleted}

      />
      <PrimaryBtn text={buttonText} type={""} class_name={"mt-4"} arrow={true} setDelete={setDelete}/>
      {!handleClose && <Button variant="outlined" className={"text-[red]"} startIcon={<MdDelete/>}
                               type={"submit"}
                               color="error" onClick={() => {
        setDelete(true)
      }
      }
      >
        Delete
      </Button>}
      {handleClose &&
        <IoCloseCircle className={"absolute top-[-12px]  right-[-12px] cursor-pointer text-4xl text-[red]"}
                       onClick={handleClose}/>}
    </form>
  )
}


function groupDescription(data, deleted) {
  const descriptions = [];

  for (let key in data) {
    if (key.startsWith('heading')) {
      const index = key.split('-')[1];
      const textBodyKey = `textBody-${index}`;
      data[textBodyKey] = data[textBodyKey].replace(/\n/g, ",");
      if (deleted.includes(data[key])) continue;
      descriptions.push({heading: data[key], textBody: data[textBodyKey]});
    }
  }
  return descriptions;
}
