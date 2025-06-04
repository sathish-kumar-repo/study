import { Para, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const MethodWithVarargsInJava = () => {
  return (
    <>
      <Title>Method With varargs in Java</Title>
      <Para></Para>
      <Syntax
        src="72 Method With varargs in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default MethodWithVarargsInJava;
