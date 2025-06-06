import React from "react";
import styles from "./HighlightMatch.module.css";

interface HighlightMatchProps {
  text: string;
  query: string;
}

// ✅ Escape all regex special characters in query string
function escapeRegExp(input: string): string {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const HighlightMatch: React.FC<HighlightMatchProps> = ({ text, query }) => {
  if (!query.trim()) return <>{text}</>;

  try {
    const escapedQuery = escapeRegExp(query);
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className={styles.highlight}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  } catch (error) {
    console.warn("HighlightMatch error:", error);
    return <>{text}</>; // fallback gracefully
  }
};

export default HighlightMatch;
