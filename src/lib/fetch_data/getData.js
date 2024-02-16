export default async function getData(path) {
  const productionUrl = "https://nursinginsights.vercel.app";
  const url = "http://localhost:3000";

  const res = await fetch(`${url}${path}`);
  const data = await res.json();
  return data;
}
