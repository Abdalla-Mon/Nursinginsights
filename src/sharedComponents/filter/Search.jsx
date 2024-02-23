"use client";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import modifyParams from "@/lib/fetch_data/modifySearchParams";
import { useRouter } from "next/navigation";
import { useDeferredValue, useState } from "react";
import getData from "@/lib/fetch_data/getData";

export default function SearchField({ searchParams }) {
  return (
    <Stack spacing={5} sx={{ width: 300 }}>
      <SearchInput searchParams={searchParams} />
    </Stack>
  );
}

function SearchInput({ searchParams }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const deferredQuery = useDeferredValue(data);
  function handleChange(event, value) {
    if (value === null) value = "";
    const search = modifyParams(searchParams, value, "title");

    router.push(search);
  }
  async function handleInputChange(input) {
    setLoading(true);
    const { category } = searchParams;
    if (input.value === "") {
      setData([]);
      setLoading(false);
      return;
    }
    const titleData = await getData(
      `/api/courses?title=${input.value}&category=${category}`,
    );

    setData(titleData.titleData);
    setLoading(false);
  }
  return (
    <Autocomplete
      disablePortal
      className={"search_input"}
      onChange={(event, value) => {
        handleChange(event, value);
      }}
      sx={{
        width: 300,
        "& .MuiInputLabel-root": {
          // color: "white",
        },
      }}
      options={deferredQuery}
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
