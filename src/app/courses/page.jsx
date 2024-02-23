import getData from "@/lib/fetch_data/getData";
import CourseCard from "@/sharedComponents/cards/courseCard/CourseCard";
import Banner, {BannerContent} from "@/sharedComponents/banner/Banner";
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
        <BannerContent category={category} searchParams={searchParams}  length={result.total}/>
      </Banner>
      <div
        className={
          "container mx-auto px-[15px] py-[40px] mt-[-150px] relative z-[10]"
        }
      >
        <div
          className={"grid tab:grid-cols-2 lg:grid-cols-3 gap-6 "}
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
