"use client";
import SearchField from "@/sharedComponents/filter/Search";
import Categories from "@/sharedComponents/filter/Categories";
import { createContext } from "react";
export const FilterContext = createContext(null);
export default function Filter({
  length,
  titleData,
  searchParams,
  category = true,
}) {
  return (
    <FilterContext.Provider value={{ searchParams, length }}>
      <div>
        <SearchField titleData={titleData} searchParams={searchParams} />
        {category && <Categories />}
      </div>
    </FilterContext.Provider>
  );
}
