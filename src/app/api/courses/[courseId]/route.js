import getSupaBaseLectures from "@/lib/fetch_data/supabase/getSupaBaseLectures";

export async function GET(request, { params }) {
  const { courseId } = params;
  if (!courseId) {
    throw new Error("Course ID is required");
  }

  const { searchParams } = request.nextUrl;
  const limit = searchParams.get("limit");
  const title = searchParams.get("title");
  let page = searchParams.get("page");

  try {
    const data = await getSupaBaseLectures("courses", "lectures", courseId);
    let finalData = data.map((course) => course.lectures)[0];

    if (title && title.length > 0) {
      finalData.lectures = finalData.lectures.filter((lecture) => {
        return lecture.lectureName.toLowerCase().includes(title.toLowerCase());
      });
    }
    const total = finalData.lectures.length;
    if (page && limit) {
      page--;
      finalData.lectures = finalData.lectures.slice(
        page * limit,
        page * limit + limit,
      );
      finalData.lectures = finalData.lectures.slice(0, limit);
    }
    return Response.json({ lectures: finalData.lectures, total });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "An error occurred while fetching data" });
  }
}
