import SearchField from "@/sharedComponents/filter/Search";

export default function Filter({ length, titleData, searchParams }) {
  return (
    <div>
      <SearchField titleData={titleData} searchParams={searchParams} />
    </div>
  );
}
