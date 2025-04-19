import { useState } from "react";
import "./GlassDropdown.css";
import { toTitleCase } from "../../utils/custom_string";

type GlassDropdownProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export const GlassDropdown = ({
  options,
  selected,
  onChange,
}: GlassDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {toTitleCase(selected)}
        <span className="arrow">▼</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {toTitleCase(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
