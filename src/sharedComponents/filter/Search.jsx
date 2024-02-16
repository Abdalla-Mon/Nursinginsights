"use client";
import * as React from "react";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import modifyParams from "@/lib/fetch_data/modifySearchParams";
import { useRouter } from "next/navigation";
import { useDeferredValue, useState } from "react";
import getData from "@/lib/fetch_data/getData";

export default function SearchField({ titleData, searchParams }) {
  return (
    <Stack spacing={5} sx={{ width: 300 }}>
      <SearchInput titleData={titleData} searchParams={searchParams} />
    </Stack>
  );
}

function SearchInput({ titleData, searchParams }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const deferredQuery = useDeferredValue(data);
  function handleChange(event, value) {
    if (value === null) value = "";
    const search = modifyParams(searchParams, value, "title");

    let newSearch;
    if (searchParams?.title) {
      newSearch = "?" + search;
    } else {
      newSearch = "?title=" + value + "&" + search;
    }
    router.push(newSearch);
  }
  async function handleInputChange(input) {
    setLoading(true);
    const titleData = await getData(`/api/courses?title=${input.value}`);

    setData(titleData.titleData);
    setLoading(false);
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
      // options={titleData}
      options={data}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a course"
          onChange={(e) => handleInputChange(e.target)}
        />
      )}
    />
  );
}
