import React from "react";
import "./Note.css";

interface NoteProps {
  children?: React.ReactNode;
  link?: string;
}

const Note = ({ children, link }: NoteProps) => {
  if (children && link) {
    throw new Error(
      "Note component cannot have both 'children' and 'link' props."
    );
  }

  return (
    <div className="note-container">
      <h3>Note:</h3>
      <div className="notes">
        {link ? (
          <>
            Click here to learn more{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Note;
