"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CreateSelect({register, errors, value = ""}) {
  const [cat, setCat] = React.useState(value);
  const handleChange = (event) => {
    setCat(event.target.value);
  };

  return (
    <FormControl fullWidth variant="filled"
                 required={true}
                 error={errors['cat']}
    >
      <InputLabel id="cat">Category</InputLabel>
      <Select
        id="cat"
        value={cat}

        label="cat"
        {...register('cat', {
          required: {
            value: true,
            message: 'Category is required'
          }
        })}
        onChange={handleChange}
      >
        <MenuItem value="first_grade">First grade</MenuItem>
        <MenuItem value="second_grade">Second grade</MenuItem>
        <MenuItem value="third_grade">Third grade</MenuItem>
        <MenuItem value="fourth_grade">Fourth grade</MenuItem>
      </Select>
      {<p className={"error text-[0.75rem] font-[400] text-[#d32f2f] "}>{errors["cat"]?.message}</p>}
    </FormControl>
  )
}