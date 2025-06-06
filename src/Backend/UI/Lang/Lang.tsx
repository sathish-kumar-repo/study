import Table from "../Table/Table";
import styles from "./Lang.module.scss";

type Type = "Table" | "Sentence";

type Sentences = {
  eng: string;
  tam: string;
};
type Lang = {
  primary: string;
  secondary: string;
};
interface LangProperties {
  lang?: Lang;
  type?: Type;
  sentences: Sentences[];
}

const Lang: React.FC<LangProperties> = ({
  type = "Sentence",
  lang = {
    primary: "English",
    secondary: "Tamil",
  },
  sentences,
}) => {
  if (type === "Sentence")
    return (
      <div className={styles.sentenceContainer}>
        {sentences.map((sentence, index) => (
          <div className={styles.sentence} key={`sentence-${index}`}>
            <div className={styles.primary}>{sentence.eng}</div>
            <div className={styles.secondary}>{sentence.tam}</div>
          </div>
        ))}
      </div>
    );

  return (
    <Table>
      <thead>
        <tr>
          <th>{lang.primary}</th>
          <th>{lang.secondary}</th>
        </tr>
      </thead>
      <tbody>
        {sentences.map((sentence, index) => (
          <tr key={`sentence-${index}`}>
            <td>{sentence.eng}</td>
            <td>{sentence.tam}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Lang;
