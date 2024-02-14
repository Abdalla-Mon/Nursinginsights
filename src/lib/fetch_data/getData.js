import { url, localUrl } from "./url.js";

export default async function getData(path) {
  let res = await fetch(localUrl + path);

  const data = await res.json();
  return data;
}
