import { Para, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const AsciiInJava = () => {
  return (
    <>
      <Title>ASCII in Java</Title>
      <Syntax
        src="47 ASCII in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default AsciiInJava;
