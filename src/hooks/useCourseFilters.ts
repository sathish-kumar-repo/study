import { useSearchParams } from "react-router-dom";

export default function useCourseFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSubCategory = searchParams.get("sub") || "All";
  const recentlyAdded = searchParams.get("recent") === "true";
  const searchQuery = searchParams.get("q") || "";

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  const handleSubCategoryChange = (value: string) => {
    updateParam("sub", value);
  };

  const handleRecentlyAddedChange = () => {
    updateParam("recent", (!recentlyAdded).toString());
  };

  const handleSearchQueryChange = (value: string) => {
    updateParam("q", value);
  };

  return {
    selectedSubCategory,
    recentlyAdded,
    searchQuery,
    handleSubCategoryChange,
    handleRecentlyAddedChange,
    handleSearchQueryChange,
  };
}
