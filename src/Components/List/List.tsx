import React from "react";
import "./List.css";

type ListType = "ordered" | "unordered";

type ListItem = {
  text: string;
  children?: ListItem[];
};

type ListProps = {
  items: ListItem[];
  type?: ListType;
};

const GlassmorphismList: React.FC<ListProps> = ({
  items,
  type = "unordered",
}) => {
  const renderList = (items: ListItem[], nested = false) => {
    const ListTag = type === "ordered" ? "ol" : "ul";
    return (
      <ListTag className={`glassmorphic-list ${nested ? "nested" : ""}`}>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <span
              className={`list-symbol ${
                type === "unordered" ? "circle-symbol" : "number-symbol"
              }`}
            >
              {type === "ordered" ? `${index + 1}.` : ""}
            </span>
            {item.text}
            {item.children && renderList(item.children, true)}
          </li>
        ))}
      </ListTag>
    );
  };

  return <div className="glassmorphic-list-container">{renderList(items)}</div>;
};

export default GlassmorphismList;
