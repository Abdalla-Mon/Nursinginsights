"use client";
import { Fab, Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { useCallback, useReducer, useState } from "react";
import TextField from "@mui/material/TextField";
import { MdDelete } from "react-icons/md";

const initialState = [];

function inputPairReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_INPUT_PAIR":
      return [...state, { heading: "", textBody: "" }];
    case "DELETE_INPUT_PAIR":
      // return state.filter((item, index) => index !== action.index);

      return state.filter((item, index) => index !== action.index);

    default:
      return state;
  }
}

function RenderTextField(props) {
  const {
    label,
    id,
    name,
    register,
    requiredMessage,
    errors,
    defaultValue,
    multi = false,
    type = "text",
  } = props;
  return (
    <TextField
      label={label}
      variant="filled"
      fullWidth
      id={id}
      name={name}
      type={type}
      defaultValue={defaultValue}
      multiline={multi}
      {...register(name, { required: requiredMessage })}
      error={!!errors[name]}
    />
  );
}

export default function CreateFields(props) {
  const {
    register,
    errors,
    array = [],
    text = "Add a description",
    fields,
    id,
    setDeleted,
    table = true,
  } = props;

  const [state, dispatch] = useReducer(inputPairReducer, array);
  const handleAddClick = () => {
    dispatch({ type: "ADD_INPUT_PAIR" });
  };
  const handleDeleteClick = (item) => {
    setDeleted((prev) => [...prev, item]);
  };
  return (
    <div className={"mt-2"}>
      <Fab
        variant="extended"
        size="medium"
        className={"w-fit bg-fuchsia-700 text-[white]"}
        aria-label="add"
        onClick={handleAddClick}
      >
        <IoMdAdd sx={{ mr: 1 }} />
        {text}
      </Fab>
      <FieldsContent
        register={register}
        errors={errors}
        state={state}
        handleDeleteClick={handleDeleteClick}
        fields={fields}
        id={id}
      />
    </div>
  );
}

function FieldsContent({
  state,
  register,
  errors,
  fields,
  id,
  handleDeleteClick,
  table,
}) {
  return (
    <div className={"flex flex-col gap-2 mt-3"}>
      {state.map((inputPair, index) => (
        <div key={fields[0].id + index} className={"flex flex-col gap-2"}>
          {fields.map((field) => (
            <RenderTextField
              key={field.id + index}
              label={field.label}
              id={`${field.id}-${index}`}
              name={`${field.id}-${index}`}
              defaultValue={inputPair[field.id]}
              register={register}
              requiredMessage={`${field.label} is required`}
              errors={errors}
              multi={field.multi}
              type={field.type}
            />
          ))}
          <Button
            variant="outlined"
            startIcon={<MdDelete />}
            className={"w-fit"}
            color="error"
            type="delete"
            onClick={(e) => {
              e.preventDefault();
              if (id) handleDeleteClick(index);
              else handleDeleteClick(inputPair[fields[0].id]);
              e.target.parentElement.remove();
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
