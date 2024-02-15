import getData from "@/lib/fetch_data/getData";
import CourseCard from "@/sharedComponents/cards/courseCard/CourseCard";
import Banner from "@/sharedComponents/banner/Banner";
import Filter from "@/sharedComponents/filter/Filter";

export default async function Courses({ searchParams }) {
  const category = searchParams.category;

  const result = await getData(`/api/courses?category=${category || "all"}`);

  const data = result.data;
  if (!data) return <div>loading...</div>;
  return (
    <section className={""}>
      <Banner>
        <BannerContent
          category={category}
          length={result.total}
          titleData={result.titleData}
          searchParams={searchParams}
        />
      </Banner>
      <div
        className={
          "container mx-auto section_padding mt-[-150px] relative z-[10000]"
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
      </div>
    </section>
  );
}
function BannerContent({ category = "all", length, searchParams, titleData }) {
  category = category.replace(/_/g, " ");

  return (
    <div className={"z-[100000000000] relative"}>
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
