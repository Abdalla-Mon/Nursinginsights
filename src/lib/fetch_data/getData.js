export default async function getData(path) {
  const productionUrl = "https://nursinginsights.vercel.app";
  const url = "http://localhost:3000";

  const res = await fetch(`${productionUrl}${path}`);
  const data = await res.json();
  return data;
}
