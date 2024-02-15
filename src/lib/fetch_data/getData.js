import { localUrl } from "@/lib/fetch_data/url";

export default async function getData(path) {
  const res = await fetch(localUrl + path);
  const data = await res.json();
  return data;
}
