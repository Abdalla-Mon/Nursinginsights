import Filter from "@/sharedComponents/filter/Filter";

export default function Banner({ children }) {
  return (
    <div className={"shared_banner banner relative "}>
      <div className={"container mx-auto"}>{children}</div>
    </div>
  );
}

export function BannerContent({ category = "all", length, searchParams, titleData ,title="Courses"}) {
    category = category.replace(/_/g, " ");

    return (
          <div className={" relative"}>
              <div className={"flex gap-5 items-center  "}>
                  <h2 className={"capitalize font-bold"}>
                      {category && category} {title}
                  </h2>
                  {length && (
                        <div className="flex gap-2 items-center text-xl bg-[#ff5b5c] bg-opacity-80 shadow-lg px-5 py-4 tab:px-5 tab:py-6 border border-white rounded-full h-12 leading-12  font-medium tracking-tighter justify-center text-gray-900 w-max-content">
                            {length} <span>{title}</span>
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
