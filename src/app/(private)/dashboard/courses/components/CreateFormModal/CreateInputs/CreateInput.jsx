import TextField from '@mui/material/TextField';

export default function CreateInput({field, errors, register}) {
  return (
    <>
      <TextField {...field} label={field.name} variant="filled" {...register(field.id, {
          required: {
            "value": field.required,
            "message": "This field is required"
          }
        }
      )} error={errors[field.id]} helperText={errors[field.id]?.message}
      />
    </>

  )
}
