import React from "react";
import styles from "./Para.module.css";

interface ParaProps {
  children?: React.ReactNode;
  tab?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

const Para: React.FC<ParaProps> = ({
  children,
  tab = false,
  bold = false,
  italic = false,
  underline = false,
  strikethrough = false,
  code = false,
}) => {
  const classNames = [
    styles.para,
    tab && styles.tabbed,
    bold && styles.bold,
    italic && styles.italic,
    underline && styles.underline,
    strikethrough && styles.strikethrough,
    code && styles.codeStyle,
  ]
    .filter(Boolean)
    .join(" ");

  return <p className={classNames}>{children}</p>;
};

export default Para;
