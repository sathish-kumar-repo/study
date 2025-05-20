import "./H3.css";

interface HProps {
  children?: React.ReactNode;
}
const H3 = ({ children }: HProps) => {
  return <h6 className="h">{children}</h6>;
};

export default H3;
