import getSupabaseData from "@/lib/fetch_data/supabase/getSupabaseData";

export async function GET(request) {
    const tableName = "courses";
    const columnName = "courses";
    const { searchParams } = request.nextUrl;

  let filterByCategory = searchParams.get("category");
  let limit = searchParams.get("limit");
  let title = searchParams.get("title");
    let page = searchParams.get("page") ;
  let id = searchParams.get("id");
  try {
    const data = await getSupabaseData(
      tableName,
      columnName,
      filterByCategory,
      title,
    );
    const titleData = data.map((course) => course.courses.title);
    if (id) {
      const course = data.filter((course) => course.courses.id === id)[0];
      return Response.json(course.courses);
    }
    let finalData = data.map((course) => {
      return course.courses;
    });
    if (title && title.length > 0) {
      finalData = finalData.filter((course) => {
        return course.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    const total = finalData.length;
    if (page && limit) {
      page--;
      finalData = finalData.slice(page * limit, page * limit + limit);
      finalData = finalData.slice(0, limit);
    }

    return Response.json({ data: finalData, total, titleData });
  } catch (error) {


    return Response.json({ error: error.message});
  }
}

// export async function GET(request) {
//   try {
//     const dataInfo = {collection: "courses"};
//     let data = await getCollectionDocuments(dataInfo);
//     const filterByCategory = searchParams.get("category");
//     const searchByTitle = searchParams.get("q");
//     const id = searchParams.get("id");
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
