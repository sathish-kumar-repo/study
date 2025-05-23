import React from "react";
import styles from "./Backdrop.module.css";

interface BackdropProps {
  onClick?: () => void;
  enable?: boolean;
  zIndex?: number;
}

const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  enable = false,
  zIndex = 999,
}) => {
  if (enable) {
    return (
      <div
        className={styles.backdrop}
        style={{ zIndex }}
        onClick={onClick}
      ></div>
    );
  }
  return null;
};

export default Backdrop;
