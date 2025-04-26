import { JSX, useEffect, useRef, useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import mainData from "../../data/main_data"; // Replace with the actual path to your data
import { Link } from "react-router-dom";

import ClearIcon from "@mui/icons-material/Clear";

interface SearchProps {
  showSearch: boolean;
  ref: React.Ref<HTMLDivElement>;
  onClose: () => void;
}

interface Route {
  topic: string;
  page: JSX.Element;
}

interface Course {
  about: { name: string };
  route: Route[];
}

interface CourseResult {
  category: string;
  name: string;
  routes: Route[];
}

const Search = ({ showSearch, ref, onClose }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
    }
  }, [showSearch, inputRef]);

  useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
      setTimeout(() => {
        inputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // slight delay after focus for better behavior on mobile
    }
  }, [showSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredResults: CourseResult[] = Object.entries(mainData)
    .flatMap(([category, courses]) =>
      courses.map((course: Course) => {
        const matchingRoutes = course.route.filter((route) =>
          route.topic.toLowerCase().includes(searchTerm)
        );
        if (matchingRoutes.length > 0) {
          return {
            category,
            name: course.about.name,
            routes: matchingRoutes,
          };
        }
        return null;
      })
    )
    .filter((course): course is CourseResult => course !== null);

  const handleScroll = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section className={`search-section ${showSearch ? "active" : ""}`}>
      <div className="search-container" ref={ref}>
        <div className="search-header">
          <div className="search-bar">
            <span className="search-icon">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search here..."
              onChange={handleSearchChange}
              ref={inputRef}
              value={searchTerm}
            />
            <span
              className={`clear-icon ${searchTerm ? "active" : undefined}`}
              onClick={handleClear}
            >
              <ClearIcon />
            </span>
          </div>
          <span className="toggle-button cancel" onClick={onClose}>
            Cancel
          </span>
        </div>

        <div className="search-results" onScroll={handleScroll}>
          {filteredResults.length > 0 ? (
            <div className="result-container">
              {filteredResults.map((result, index) => (
                <div className="result-card" key={index}>
                  <h3>{result.name}</h3>
                  <ul>
                    {result.routes.map((route, idx) => (
                      <li key={idx}>
                        <Link
                          onClick={onClose}
                          to={`/${result.category}/${result.name}/${route.topic}`}
                        >
                          {route.topic}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="result-message">
              <p>
                No results found for <strong>{searchTerm}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
