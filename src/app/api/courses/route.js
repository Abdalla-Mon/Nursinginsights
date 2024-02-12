import getCollectionDocuments from "@/lib/fetch_data/firebase/getCollectionDocuments";
import getSupabaseData from "@/lib/fetch_data/supabase/getSupabaseData";

export async function GET(request) {
  try {
    const tableName = "courses";
    const columnName = "courses";
    const filterByCategory = request.nextUrl.searchParams.get("category");
    const limit = request.nextUrl.searchParams.get("limit");
    const title = request.nextUrl.searchParams.get("title");
    const page = request.nextUrl.searchParams.get("page");
    const data = await getSupabaseData(
      tableName,
      columnName,
      filterByCategory,
      title,
    );
    let finalData = data.map((course) => {
      return course.courses;
    });
    if (page && limit) {
      finalData = finalData.slice(page * limit, page * limit + limit);
      finalData = finalData.slice(0, limit);
    }
    return Response.json(finalData);
  } catch (error) {
    console.log(
      Response.json({ error: "An error occurred while fetching data" }),
    );

    return Response.json({ error: "An error occurred while fetching data" });
  }
}

// export async function GET(request) {
//   try {
//     const dataInfo = {collection: "courses"};
//     let data = await getCollectionDocuments(dataInfo);
//     const filterByCategory = request.nextUrl.searchParams.get("category");
//     const searchByTitle = request.nextUrl.searchParams.get("q");
//     const id = request.nextUrl.searchParams.get("id");
//     if (filterByCategory && filterByCategory !== "all") {
//       data = data.filter((course) => course.category === filterByCategory);
//     }
//     if (searchByTitle) {
//       data = data.filter((course) => course.title.toLowerCase().includes(searchByTitle.toLowerCase()));
//     }
//     if (id) {
//       data = data.filter((course) => course.id === id);
//     }
//
//     return Response.json(data);
//   } catch (error) {
//     console.log(Response.json({error: "An error occurred while fetching data"}));
//     return null
//   }
// }