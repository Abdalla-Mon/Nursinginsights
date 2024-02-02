import getCollectionDocuments from "@/lib/fetch_data/firebase/getCollectionDocuments";

export async function GET(request) {
  const dataInfo = { collection: "courses" };
  let data = await getCollectionDocuments(dataInfo);
  const filterByCategory = request.nextUrl.searchParams.get("category");
  if (filterByCategory) {
    data = data.filter((course) => course.category === filterByCategory);
  }
  // const data = await res.json();

  return Response.json(data);
}
