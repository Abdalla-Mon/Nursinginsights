"use client";
import * as React from "react";
import { Modal } from "@mui/material";
import CreateBtn from "@/app/(private)/dashboard/courses/components/CreateBtn/CreateBtn";
import CreateForm from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateForm/CreateForm";

import courses from "../../data/courses.json";
import SecondaryBtn from "@/sharedComponents/buttons/SecondaryBtn/SecondaryBtn";
import { RiMenu2Line } from "react-icons/ri";
import { MobileMenu } from "@/app/(private)/dashboard/DashboardMenu/DashMenu";

export default function CreateModal({ setReValidate, card }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [drawer, setDrawer] = React.useState(false);
  return (
    <div>
      <div className={"flex items-center justify-between gap-5"}>
        <MobileMenu setDrawer={setDrawer} drawer={drawer} />
        <RiMenu2Line
          className={"tab:hidden text-3xl cursor-pointer"}
          onClick={() => setDrawer(true)}
        />
        {card && <CreateBtn handleOpen={handleOpen} />}
        {!card && (
          <SecondaryBtn
            text={"Create a new course"}
            arrow={true}
            setModal={setOpen}
            class_name={"tab:w-[350px] ml-auto flex justify-center"}
          />
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={"overflow-y-auto p-4 flex "}
      >
        <CreateForm
          handleClose={handleClose}
          courses={courses}
          setReValidate={setReValidate}
        />
      </Modal>
    </div>
  );
}
