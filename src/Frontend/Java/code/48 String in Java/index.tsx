import { Media, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const StringInJava = () => {
  return (
    <>
      <Title>String in Java</Title>
      <Media
        sequence={{
          start: 1,
          end: 3,
          base: "48 String in Java/img/",
          ext: "jpg",
        }}
        customDomain={domain}
      />
      <Syntax
        src="48 String in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default StringInJava;
