import React from "react";
import "./Animated.css";

interface AnimatedProps {
  children?: React.ReactNode;
}
const Animated = ({ children }: AnimatedProps) => {
  return (
    <>
      <div className="area">
        {children}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Animated;
