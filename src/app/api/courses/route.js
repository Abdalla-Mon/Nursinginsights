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

// dont understand this is how i get the data by firebase import { supabase } from "@/lib/supabaseConfig/supabaseConfig"; export default async function getSupabaseData( tableName, columnName, category, title, ) { let query = supabase.from(tableName).select(columnName); if (category && category !== "all") { query = query.filter(${tableName}->>category, "eq", category); } if (title) { query = query.filter(${tableName}->>title, "ilike", %${title}%); } let { data, error } = await query; if (error) { throw new Error(error.message); } return data; } and this is the root which handle the data and return an api import getSupabaseData from "@/lib/fetch_data/supabase/getSupabaseData"; export async function GET(request) { const tableName = "courses"; const columnName = "courses"; const { searchParams } = request.nextUrl; let filterByCategory = searchParams.get("category"); let limit = searchParams.get("limit"); let title = searchParams.get("title"); let page = searchParams.get("page") ; let id = searchParams.get("id"); try { const data = await getSupabaseData( tableName, columnName, filterByCategory, title, ); const titleData = data.map((course) => course.courses.title); if (id) { const course = data.filter((course) => course.courses.id === id)[0]; return Response.json(course.courses); } let finalData = data.map((course) => { return course.courses; }); if (title && title.length > 0) { finalData = finalData.filter((course) => { return course.title.toLowerCase().includes(title.toLowerCase()); }); } const total = finalData.length; if (page && limit) { page--; finalData = finalData.slice(page * limit, page * limit + limit); finalData = finalData.slice(0, limit); } return Response.json({ data: finalData, total, titleData }); } catch (error) { return Response.json({ error: error.message}); } } when i go to url?category=first_grade it work fine but when i navigate to url?category=all it return the error i provided before and it also work local but on deployment the eroror hapeen with cat=all only