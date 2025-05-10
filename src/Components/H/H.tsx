import "./H.css";

interface HProps {
  children?: React.ReactNode;
}
const H = ({ children }: HProps) => {
  return <h6 className="h">{children}</h6>;
};

export default H;
