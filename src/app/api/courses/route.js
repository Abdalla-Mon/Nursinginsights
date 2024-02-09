import getCollectionDocuments from "@/lib/fetch_data/firebase/getCollectionDocuments";

export async function GET(request) {
  try {
    const dataInfo = {collection: "courses"};
    let data = await getCollectionDocuments(dataInfo);
    const filterByCategory = request.nextUrl.searchParams.get("category");
    const searchByTitle = request.nextUrl.searchParams.get("q");

    if (filterByCategory && filterByCategory !== "all") {
      data = data.filter((course) => course.category === filterByCategory);
    }
    if (searchByTitle) {
      data = data.filter((course) => course.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({error: "An error occurred while fetching data"});
  }
}