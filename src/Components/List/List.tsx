import React from "react";
import "./List.css";

type ListType = "ordered" | "unordered";
type OrderedSymbol =
  | "number"
  | "alphabet"
  | "roman"
  | "uppercase-alphabet"
  | "lowercase-roman";

type ListItem = {
  text: string | React.ReactNode; // Allow both strings and components
  children?: ListItem[]; // Option for nested items
};

type ListProps = {
  items: (string | ListItem)[]; // Items can now be strings or full ListItem objects
  type?: ListType;
  orderedSymbol?: OrderedSymbol; // New prop for ordered list symbol
  glass?: boolean;
};

const List: React.FC<ListProps> = ({
  items,
  type = "unordered",
  orderedSymbol = "number",
  glass = false,
}) => {
  const getOrderedSymbol = (index: number): string => {
    switch (orderedSymbol) {
      case "alphabet":
        return String.fromCharCode(97 + index); // a, b, c, ...
      case "uppercase-alphabet":
        return String.fromCharCode(65 + index); // A, B, C, ...
      case "roman":
        return toRoman(index + 1); // Convert to Roman numerals
      case "lowercase-roman":
        return toRoman(index + 1).toLowerCase(); // Convert to lowercase Roman numerals
      case "number":
      default:
        return (index + 1).toString();
    }
  };

  const toRoman = (input: number | string): string => {
    const num = typeof input === "string" ? Number(input) : input;
    if (isNaN(num)) {
      throw new Error("Invalid input, must be a number or numeric string.");
    }

    const romanMap: [string, number][] = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];

    let result = "";
    let currentNum = num;

    for (const [symbol, value] of romanMap) {
      while (currentNum >= value) {
        result += symbol;
        currentNum -= value;
      }
    }

    return result;
  };

  const renderList = (items: (string | ListItem)[], nested = false) => {
    const ListTag = type === "ordered" ? "ol" : "ul";
    return (
      <ListTag
        className={`glassmorphic-list ${nested ? "nested" : ""} ${
          glass ? "glass" : ""
        }`}
      >
        {items.map((item, index) => {
          const itemText = typeof item === "string" ? item : item.text;
          return (
            <li key={index} className="list-item">
              <span
                className={`list-symbol ${
                  type === "unordered" ? "circle-symbol" : "number-symbol"
                }`}
              >
                {type === "ordered" ? `${getOrderedSymbol(index)}.` : ""}
              </span>
              {itemText}
              {typeof item !== "string" &&
                item.children &&
                renderList(item.children, true)}
            </li>
          );
        })}
      </ListTag>
    );
  };

  return <div className="glassmorphic-list-container">{renderList(items)}</div>;
};

export default List;
