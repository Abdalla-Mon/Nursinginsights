import { url, localUrl } from "@/lib/fetch_data/url";

export default function modifyParams(
  searchParams,
  value,
  modifiedParam = "page",
  changePage = false,
  scrollId = "",
) {
  let search = [];
  for (const param in searchParams) {
    search.push(`${param}=${searchParams[param]}`);
  }

  search = search.map((param) => {
    if (param.includes(modifiedParam)) {
      return `${modifiedParam}=` + value;
    }
    if (changePage && param.includes("page")) {
      return `page=` + 1;
    }
    return param;
  });
  return search.join("&") + `#${scrollId}`;
}

// export async function getData(
//   id,
//   page = 0,
//   limit = 4,
//   category = "",
//   fullLength = false,
// ) {
//
//   let requestUrl =
//     url + id + `?page=${page}&limit=${limit}&category=${category}`;
//   if (fullLength) {
//     requestUrl = url + id + `?category=${category}`;
//   }
//   const res = await fetch(requestUrl);
//   const data = await res.json();
//   return data;
// }
