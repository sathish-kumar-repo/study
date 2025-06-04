import { H1, Media, Para, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const NestedInnerClassInJava = () => {
  return (
    <>
      <Title>Inner Class in Java</Title>
      <Media
        src="81 Nested Inner Class in Java/img.jpg"
        customDomain={domain}
      />
      <H1>Nested Inner Class</H1>
      <Para>
        A class is a non-primitive or user-defined data type in Java, while an
        object is an instance of a class. To define a class within another
        class. Such a class is called a Nested Class. Nested Classes are called
        Inner Classes if they were declared as non-static, if not, they are
        simply called Static Nested Classes. This page is to document and
        provide details with examples on how to use Java Nested and Inner
        Classes.
      </Para>
      <Syntax title="Syntax" code={syntax} />
      <Syntax
        src="81 Nested Inner Class in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default NestedInnerClassInJava;

const syntax = `
class Class_Name   // OuterClass
{
. . .
  class Class_Name  // NestedClass
  {
    . . .
  }
}
`;
