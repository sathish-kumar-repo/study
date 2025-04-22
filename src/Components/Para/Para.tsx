import "./Para.css";

interface ParaProps {
  children?: React.ReactNode;
}

const Para = ({ children }: ParaProps) => {
  return <p className="para">{children}</p>;
};

export default Para;
