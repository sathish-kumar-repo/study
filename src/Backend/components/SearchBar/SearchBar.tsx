import React, { RefObject, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./SearchBar.css";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  inputRef,
  placeholder = "Search here...",
}) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const activeRef = inputRef ?? internalRef;

  const handleClear = () => {
    setSearchTerm("");
    if (activeRef.current) {
      activeRef.current.focus();
    }
  };

  return (
    <div className="search-bar">
      <span className="search-icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        ref={activeRef}
        value={searchTerm}
      />
      <span
        className={`clear-icon ${searchTerm ? "active" : ""}`}
        onClick={handleClear}
      >
        <ClearIcon />
      </span>
    </div>
  );
};

export default SearchBar;
