import getCollectionDocuments from "@/lib/fetch_data/firebase/getCollectionDocuments";

export async function GET(request, {params}) {
  const {courseId} = params;

  if (!courseId) {
    throw new Error("Course ID is required");
  }

  try {
    const dataInfo = {collection: "courses"};
    let data = await getCollectionDocuments(dataInfo, `${courseId}/lectures`);
    const searchByTitle = request.nextUrl.searchParams.get("q");

    if (searchByTitle) {
      data = data.filter((course) => course.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({error: "An error occurred while fetching data"});
  }
}