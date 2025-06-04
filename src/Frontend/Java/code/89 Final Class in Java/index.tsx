import { Para, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const FinalClassInJava = () => {
  return (
    <>
      <Title>Final Class in Java</Title>
      <Para>
        In Java, a final class is a class that cannot be subclassed or extended
        by any other class. When a class is declared final, it means that its
        implementation is complete and cannot be modified by any other class.
      </Para>
      <Para>Here's an example of a final class in Java:</Para>
      <Syntax title="Example" code={eg} />
      <Syntax
        src="89 Final Class in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default FinalClassInJava;

const eg = `
final public class MyFinalClass
{
    // class members and methods
}
`;
