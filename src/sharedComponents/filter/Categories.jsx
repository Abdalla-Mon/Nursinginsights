import modifyParams from "@/lib/fetch_data/modifySearchParams";
import { FilterContext } from "@/sharedComponents/filter/Filter";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { name: "All Courses", id: "" },
    ,
    { name: "First Grade", id: "first_grade" },
    { name: "Second Grade", id: "second_grade" },
    { name: "Third Grade", id: "third_grade" },
    { name: "Fourth Grade", id: "fourth_grade" },
  ];
  return (
    <div className={"categories_container flex gap-5 flex-wrap "}>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
function CategoryItem({ category }) {
  const { searchParams } = useContext(FilterContext);
  function handleCategoryClick(id) {
    const search = modifyParams(searchParams, id, "category");

    return search;
  }
  const condition = searchParams.category === category.id||(!searchParams.category && category.id === "");
  return (
    <Link
      href={handleCategoryClick(category.id)}
      className={" category_item cursor-pointer  " + (condition && "active")}
      // style={{ backgroundColor: condition&& "#1AB69D" ,color: condition&& "white" }}
    >
      {category.name}
    </Link>
  );
}
