import getSupaBaseLectures from "@/lib/fetch_data/supabase/getSupaBaseLectures";

export async function GET(request, { params }) {
  const { courseId } = params;
  if (!courseId) {
    throw new Error("Course ID is required");
  }

  const { searchParams } = request.nextUrl;
  const limit = searchParams.get("limit");
  const title = searchParams.get("title");
  const page = searchParams.get("page");

  try {
    const data = await getSupaBaseLectures("courses", "lectures", courseId);
    let finalData = data.map((course) => course.lectures)[0];

    if (page && limit) {
      finalData.lectures = finalData.lectures.slice(
        page * limit,
        page * limit + limit,
      );
      finalData.lectures = finalData.lectures.slice(0, limit);
    }

    if (title) {
      finalData.lectures = finalData.lectures.filter((lecture) =>
        lecture.lectureName.includes(title),
      );
    }

    return Response.json(finalData);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "An error occurred while fetching data" });
  }
}
