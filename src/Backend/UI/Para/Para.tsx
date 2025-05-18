import React from "react";
import "./Para.css";

interface ParaProps {
  children?: React.ReactNode;
  tab?: boolean; // Tab prop as a boolean
}

const Para: React.FC<ParaProps> = ({ children, tab = true }) => {
  return <p className={`para ${tab ? "tabbed" : ""}`}>{children}</p>;
};

export default Para;
