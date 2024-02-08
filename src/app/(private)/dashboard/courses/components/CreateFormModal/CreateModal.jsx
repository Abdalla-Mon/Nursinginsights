"use client";
import * as React from 'react';
import {Modal} from '@mui/material';
import CreateBtn from "@/app/(private)/dashboard/courses/components/CreateBtn/CreateBtn";
import CreateForm from "@/app/(private)/dashboard/courses/components/CreateFormModal/CreateForm/CreateForm";


export default function CreateModal({setReValidate}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CreateBtn handleOpen={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={"overflow-y-auto p-4 flex overflow-y-auto"}
      >

        <CreateForm handleClose={handleClose} setReValidate={setReValidate}/>
      </Modal>
    </div>

  )
}
