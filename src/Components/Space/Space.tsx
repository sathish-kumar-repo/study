import React from "react";

interface SpaceProps {
  children: React.ReactNode;
  paddingTop?: string;
  paddingBottom?: string;
}

const Space: React.FC<SpaceProps> = ({
  children,
  paddingTop = "10px",
  paddingBottom = "10px",
}) => {
  return <div style={{ paddingTop, paddingBottom }}>{children}</div>;
};

export default Space;
