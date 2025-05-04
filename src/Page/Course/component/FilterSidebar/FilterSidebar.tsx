import { RefObject, useEffect, useRef, useState } from "react";
import "./FilterSidebar.css";
import Switch from "../../../../components/Switch/Switch";
import ClearIcon from "@mui/icons-material/Clear";
import Tilt from "react-parallax-tilt";
import DoneButton from "../DoneButton/DoneButton";

interface FilterSidebarProps {
  toggleFilter: boolean;
  handleToggleFilter: () => void;
  recentlyAdded: boolean;
  handleRecentlyAdded: () => void;
  categoryOptions: string[];
  selectedCategory: string;
  handelSelectedCategory: (value: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  toggleFilter,
  handleToggleFilter,
  recentlyAdded,
  handleRecentlyAdded,
  categoryOptions,
  selectedCategory,
  handelSelectedCategory,
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
        {/* <DoneButton onClick={handleToggleFilter} /> */}
        {isMobileView && <DoneButton onClick={handleToggleFilter} />}
      </aside>
    </>
  );
};

export default FilterSidebar;
