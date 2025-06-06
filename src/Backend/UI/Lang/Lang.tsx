import "./Lang.module.css";

type type = "Table" | "";

interface LangProperties {
  type: type;
}

const Lang: React.FC<LangProperties> = ({ type }) => {
  return <>Lang</>;
};

export default Lang;
