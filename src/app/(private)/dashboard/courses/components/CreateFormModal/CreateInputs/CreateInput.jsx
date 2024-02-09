import TextField from '@mui/material/TextField';

export default function CreateInput({field, errors, register}) {
  const {input} = field;
  return (
    <>
      <TextField {...input} label={input.name} variant="filled" {...register(input.id, field.pattern)}
                 error={errors[input.id]}
                 helperText={errors[input.id]?.message}
      />
    </>

  )
}
