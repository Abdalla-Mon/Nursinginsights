"use client";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import modifyParams from "@/lib/fetch_data/modifySearchParams";

export default function PagePagination({ searchParams, length }) {
  let { limit, page } = searchParams;
  if (!limit) limit = 12;
  if (!page) page = 1;
  let numberOfPages = Math.ceil(length / limit);
  const router = useRouter();
  function handleChange(event, value) {
    const search = modifyParams(searchParams, value, "page");
    router.push(search);
  }
  return (
    <Pagination
      count={numberOfPages}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
      page={+page}
      showFirstButton
      showLastButton
    />
  );
}
