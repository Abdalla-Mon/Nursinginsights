"use client"
import {Fab, Button} from "@mui/material";
import {IoMdAdd} from "react-icons/io";
import {useReducer} from "react";
import TextField from "@mui/material/TextField";
import {MdDelete} from "react-icons/md";

const initialState = [];

function inputPairReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INPUT_PAIR':
      return [...state, {heading: '', textBody: ''}];
    case 'DELETE_INPUT_PAIR':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
}

function RenderTextField({label, id, name, register, requiredMessage, errors}) {
  return (
    <TextField
      label={label}
      variant="filled"
      fullWidth
      id={id}
      name={name}
      {...register(name, {required: requiredMessage})}
      error={!!errors[name]}
    />
  );
}

export default function CreateDescription({register, errors}) {
  const [state, dispatch] = useReducer(inputPairReducer, []);

  const handleAddClick = () => {
    dispatch({type: 'ADD_INPUT_PAIR'});
  };
  const handleDeleteClick = (index) => {
    dispatch({type: 'DELETE_INPUT_PAIR', index});
  };
  return (
    <div className={"mt-2"}>
      <Fab variant="extended" size="medium" className={"w-fit bg-fuchsia-700 text-[white]"} aria-label="add"
           onClick={handleAddClick}
      >
        <IoMdAdd sx={{mr: 1}}/>
        Add a description
      </Fab>
      <DescriptionContent
        register={register} errors={errors} handleDeleteClick={handleDeleteClick} state={state}
      />
    </div>
  )
}

function DescriptionContent({state, register, errors, handleDeleteClick}) {
  return (
    <div className={"flex flex-col gap-2 mt-3"}>
      {state?.map((inputPair, index) => (
        <div key={index} className={"flex flex-col gap-2"}>
          <RenderTextField
            label="Heading"
            id={`heading-${index}`}
            name={`heading-${index}`}
            register={register}
            requiredMessage='Heading is required'
            errors={errors}
          />
          <RenderTextField
            label="Text body (press enter for new line)"
            id={`textBody-${index}`}
            name={`textBody-${index}`}
            register={register}
            requiredMessage='Text body is required'
            errors={errors}
          />
          <Button variant="outlined" startIcon={<MdDelete/>} className={"w-fit"} color="error"
                  type="delete" onClick={() => handleDeleteClick(index)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  )
}