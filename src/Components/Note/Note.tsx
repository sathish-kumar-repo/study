import React from "react";
import "./Note.css";

interface NoteProps {
  children?: React.ReactNode;
}

const Note = ({ children }: NoteProps) => {
  return (
    <div className="note-container">
      <h3>Note:</h3>
      <div className="notes">{children}</div>
    </div>
  );
};

export default Note;
