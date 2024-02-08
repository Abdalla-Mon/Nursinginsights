import getCollectionDocuments from "@/lib/fetch_data/firebase/getCollectionDocuments";

export async function GET(request) {
    const dataInfo = {collection: "courses"};
    let data = await getCollectionDocuments(dataInfo);
    const filterByCategory = request.nextUrl.searchParams.get("category");
    if (filterByCategory && filterByCategory !== "all") {
        data = data.filter((course) => course.category === filterByCategory);
    }

    return Response.json(data);
}
