import "./Lang.module.css";

type type = "Table" | "Sentence";

interface LangProperties {
  type: type;
}

const Lang: React.FC<LangProperties> = ({ type = "Sentence" }) => {
  return <>Lang</>;
};

export default Lang;
