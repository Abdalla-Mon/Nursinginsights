"use client";
import * as React from "react";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import modifyParams from "@/lib/fetch_data/modifySearchParams";
import { useRouter } from "next/navigation";

export default function SearchField({ titleData, searchParams }) {
  console.log(titleData, searchParams);
  return (
    <Stack spacing={5} sx={{ width: 300 }}>
      <MovieSelect titleData={titleData} searchParams={searchParams} />
    </Stack>
  );
}

function MovieSelect({ titleData, searchParams }) {
  const router = useRouter();
  function handleChange(event, value) {
    const search = modifyParams(searchParams, value, "title");
    let newSearch;
    if (searchParams?.title) {
      newSearch = "?" + search;
    } else {
      newSearch = "?title=" + value + "&" + search;
    }
    router.push(newSearch);
  }
  return (
    <Autocomplete
      disablePortal
      onChange={(event, value) => {
        handleChange(event, value);
      }}
      sx={{
        width: 300,

        "& .MuiInputLabel-root": {
          // color: "white",
        },
      }}
      options={titleData}
      renderInput={(params) => (
        <TextField {...params} label="Search for a course" />
      )}
    />
  );
}
