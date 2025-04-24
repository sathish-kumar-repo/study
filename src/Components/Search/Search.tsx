import { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import mainData from "../../data/main_data";
import { Link } from "react-router-dom";

interface SearchProps {
  showSearch: boolean;
  ref: React.Ref<HTMLDivElement>;
}
const Search = ({ showSearch, ref }: SearchProps) => {
  const inputRef = ref as React.RefObject<HTMLInputElement>;
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
    }
  });

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }

  return (
    <div className={`search-section ${showSearch ? "active" : undefined}`}>
      <div className="search-container">
        <div className="search-card">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search here..."
              onChange={handleSearchChange}
              ref={inputRef}
            />
            <span className="toggle-button">
              <SearchIcon />
            </span>
          </div>
        </div>
        <div className="search-results">
          <div className="result-message">
            <p>
              No results found for <strong>search term</strong>
            </p>
            <p>
              Search result <strong>here</strong>
            </p>
          </div>

          <div className="result-container">
            {Object.entries(mainData).map(([_, courses]) => {
              return courses.map((course, index) => {
                return course.route.map((route, index) => {
                  const courseName = route.topic.toLowerCase();
                  if (courseName.includes(searchTerm)) {
                    return (
                      <div className="result-card" key={index}>
                        <h3>{course.about.name}</h3>
                        <ul>
                          <li key={index}>
                            <Link to={route.topic}>{route.topic}</Link>
                          </li>
                        </ul>
                      </div>
                    );
                  }
                  return null;
                });
              });
            })}
            {/* <div className="result-card">
            //   <h3>Sample 1</h3>
            //   <ul>
            //     <li>
            //       <a href="">dfdf</a>
            //     </li>
            //     <li>
            //       <a href="">dfdf</a>
            //     </li>
            //     <li>
            //       <a href="">dfdf</a>
            //     </li>
            //   </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
