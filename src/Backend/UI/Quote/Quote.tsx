import React from "react";
import styles from "./Quote.module.scss";
import clsx from "clsx";

interface QuoteProps {
  children?: React.ReactNode;
  glass?: boolean;
  bold?: boolean;
}

const Quote = ({ children, glass, bold }: QuoteProps) => {
  return (
    <div
      className={clsx(styles.quotesContainer, {
        [styles.glass]: glass || false,
        [styles.bold]: bold || false,
      })}
    >
      <span className={styles.arrow}>{`>>`}</span>
      <span className={styles.quote}>{children}</span>
    </div>
  );
};

export default Quote;
