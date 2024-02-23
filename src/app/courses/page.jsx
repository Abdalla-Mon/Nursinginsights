import getData from "@/lib/fetch_data/getData";
import CourseCard from "@/sharedComponents/cards/courseCard/CourseCard";
import Banner from "@/sharedComponents/banner/Banner";
import Filter from "@/sharedComponents/filter/Filter";
import PagePagination from "@/sharedComponents/pagination/Pagination";

export default async function Courses({ searchParams }) {
  let { page, limit, title, category } = searchParams;
  if (!page) {
    page = 1;
  }
  if (!limit) {
    limit = 12;
  }
  if (!title) {
    title = "";
  }
  if (!category||category==="all") {
    category = "";
  }
  let path =
    "/api/courses" +
    `?page=${page}&limit=${limit}&title=${title}&category=${category}`;
  const result = await getData(path);
  if (!result) return <div>loading...</div>;
  const data = result.data;
  return (
    <section className={""}>
      <Banner>
        <BannerContent category={category} searchParams={searchParams} />
      </Banner>
      <div
        className={
          "container mx-auto section_padding mt-[-150px] relative z-[10]"
        }
      >
        <div
          className={"grid tab:grid-cols-2 lap:grid-cols-3 gap-6 "}
          id="scroll"
        >
          {data.map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
        <PagePagination searchParams={searchParams} length={result.total} />
      </div>
    </section>
  );
}
function BannerContent({ category = "all", length, searchParams, titleData }) {
  category = category.replace(/_/g, " ");

  return (
    <div className={"z-[10] relative"}>
      <div className={"flex gap-5 items-center  "}>
        <h2 className={"capitalize font-bold"}>
          {category && category} Courses
        </h2>
        {length && (
          <div className="flex gap-2 items-center text-xl bg-purple-200 bg-opacity-80 shadow-lg px-5 py-4 tab:px-5 tab:py-6 border border-white rounded-full h-12 leading-12  font-medium tracking-tighter justify-center text-gray-900 w-max-content">
            {length} <span>Courses</span>
          </div>
        )}
      </div>
      <Filter
        length={length}
        titleData={titleData}
        searchParams={searchParams}
      />
    </div>
  );
}
