import React from "react";
import styles from "./Para.module.css";
import { A } from "..";

interface ParaProps {
  children?: React.ReactNode;
  link?: string;
  tab?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

const Para: React.FC<ParaProps> = ({
  children,
  link,
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

  if (children && link) {
    throw new Error(
      "Para component cannot have both 'children' and 'link' props."
    );
  }
  return (
    <p className={classNames}>
      {link ? (
        <>
          Further details can be found at: <A link={link}>{link}</A>
        </>
      ) : (
        children
      )}
    </p>
  );
};

export default Para;
