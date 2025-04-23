import { FC, ReactNode } from "react";
import "./Table.css";

interface TableProps {
  children: ReactNode;
  textAlign?: "left" | "center" | "right";
}

const Table: FC<TableProps> = ({ children, textAlign = "left" }) => {
  return (
    <div className={`glass-table text-align-${textAlign}`}>
      <table>{children}</table>
    </div>
  );
};

export default Table;
