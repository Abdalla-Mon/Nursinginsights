import modifyParams from "@/lib/fetch_data/modifySearchParams";
import { FilterContext } from "@/sharedComponents/filter/Filter";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { name: "All Courses", id: "all" },
    ,
    { name: "First Grade", id: "first_grade" },
    { name: "Second Grade", id: "second_grade" },
    { name: "Third Grade", id: "third_grade" },
    { name: "Fourth Grade", id: "fourth_grade" },
  ];
  return (
    <div className={"flex gap-5 flex-wrap py-3"}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
function CategoryItem({ category }) {
  const { searchParams } = useContext(FilterContext);
  const router = useRouter();
  function handleCategoryClick(id) {
    const search = modifyParams(searchParams, id, "category");
    let newSearch;
    if (searchParams?.category) {
      newSearch = "?" + search;
    } else {
      newSearch = "?category=" + id + "&" + search;
    }
    return newSearch;
    router.push(newSearch);
  }
  return (
    <Link
      href={handleCategoryClick(category.id)}
      className={
        "bg-white p-4 rounded-[50px] cursor-pointer shadow-lg font-bold"
      }
    >
      {category.name}
    </Link>
  );
}
