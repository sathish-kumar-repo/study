import { RefObject, useEffect, useRef, useState } from "react";
import "./FilterSidebar.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Switch from "../../../../components/Switch/Switch";
import ClearIcon from "@mui/icons-material/Clear";
import Tilt from "react-parallax-tilt";
import DoneButton from "../DoneButton/DoneButton";

interface FilterSidebarProps {
  toggleFilter: boolean;
  handleToggleFilter: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  recentlyAdded: boolean;
  handleRecentlyAdded: () => void;
  categoryOptions: string[];
  selectedCategory: string;
  handelSelectedCategory: (value: string) => void;
  ref: RefObject<HTMLInputElement | null>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  toggleFilter,
  handleToggleFilter,
  searchQuery,
  setSearchQuery,
  recentlyAdded,
  handleRecentlyAdded,
  categoryOptions,
  selectedCategory,
  handelSelectedCategory,
  ref,
}) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1200);
  const prevIsMobileRef = useRef(isMobileView);

  useEffect(() => {
    const handleResize = () => {
      const currentIsMobile = window.innerWidth <= 1200;

      // Only update if crossing the 1200px threshold
      if (currentIsMobile !== prevIsMobileRef.current) {
        setIsMobileView(currentIsMobile);
        prevIsMobileRef.current = currentIsMobile;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (toggleFilter && isMobileView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleFilter, isMobileView]);

  return (
    <>
      <div className={`filter-header ${toggleFilter && "active"}`}>
        <div className="filter-button" onClick={handleToggleFilter}>
          <h4>Filter</h4>
          <span>
            <FilterListIcon />
          </span>
        </div>
        <SearchBar
          searchTerm={searchQuery}
          setSearchTerm={setSearchQuery}
          placeholder="Search courses..."
          inputRef={ref}
        />
      </div>

      {/* 🔳 Backdrop only on mobile */}
      {toggleFilter && isMobileView && (
        <div className="sidebar-backdrop" onClick={handleToggleFilter}></div>
      )}

      <aside className={`filter-sidebar ${toggleFilter && "active"}`}>
        <span className="close-filter-toggle" onClick={handleToggleFilter}>
          <ClearIcon />
        </span>
        <div className="recently-added">
          <Switch checked={recentlyAdded} onChange={handleRecentlyAdded} />
          <h4>Recently Added</h4>
        </div>
        <h2 className="category-title">Category</h2>
        <Tilt className="radio-list">
          <div>
            {categoryOptions.map((option) => (
              <label key={option} className="radio-option">
                <input
                  type="radio"
                  name={"radio-list"}
                  value={option}
                  checked={selectedCategory === option}
                  onChange={() => handelSelectedCategory(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </Tilt>
        <DoneButton onClick={handleToggleFilter} />
        {isMobileView && <DoneButton onClick={handleToggleFilter} />}
      </aside>
    </>
  );
};

export default FilterSidebar;
