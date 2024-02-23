"use client";
import SearchField from "@/sharedComponents/filter/Search";
import Categories from "@/sharedComponents/filter/Categories";
import { createContext } from "react";
import ItemsPerPage from "@/sharedComponents/filter/ItemsPerPgae";
export const FilterContext = createContext(null);
export default function Filter({
  length,
  searchParams,
  category = true,
}) {
  return (
    <FilterContext.Provider value={{ searchParams, length }}>
      <div className={"px-[12px] py-5"}>
          <div className={"flex justify-between items-center gap-4"}
           style={{flexWrap: "wrap" }}
          >
          <ItemsPerPage />
        <SearchField />

          </div>
        {category && <Categories />}
      </div>
    </FilterContext.Provider>
  );
}
