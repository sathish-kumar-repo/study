import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  showSearch: boolean;
  ref: React.Ref<HTMLDivElement>;
}
const Search = ({ showSearch, ref }: SearchProps) => {
  return (
    <div className={`search-section ${showSearch ? "active" : undefined}`}>
      <div className="search-container" ref={ref}>
        <div className="search-card">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <span className="toggle-button">
              <SearchIcon />
            </span>
          </div>
        </div>
        <div className="search-results">
          <div className="result-message">
            {/* <p>
              No results found for <strong>search term</strong>
            </p> */}
            <p>
              Search result <strong>here</strong>
            </p>
          </div>
          {/* <div className="result-container">
            <div className="result-card">
              <h3>Sample 1</h3>
              <ul>
                <li>
                  <a href="">dfdf</a>
                </li>
                <li>
                  <a href="">dfdf</a>
                </li>
                <li>
                  <a href="">dfdf</a>
                </li>
              </ul>
            </div>
            <div className="result-card">
              <h3>Sample 2</h3>
              <ul>
                <li>
                  <a href="">dfdf</a>
                </li>
              </ul>
            </div>
            <div className="result-card">
              <h3>Sample 2</h3>
              <ul>
                <li>
                  <a href="">dfdf</a>
                </li>
              </ul>
            </div>
            <div className="result-card">
              <h3>Sample 2</h3>
              <ul>
                <li>
                  <a href="">dfdf</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
