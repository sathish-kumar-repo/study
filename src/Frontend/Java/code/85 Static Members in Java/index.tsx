import { List, Para, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const StaticMembersInJava = () => {
  return (
    <>
      <Title>Static Members in Java</Title>
      <Para>
        Static method in Java is a method which belongs to the class and not to
        the object. A static method can access only static data. It is a method
        which belongs to the class and not to the object(instance).
      </Para>
      <List
        items={[
          "A static method can access only static data. It cannot access non-static data (instance variables).",
          "A static method can call only other static methods and cannot call a non-static method from it.",
          "A static method can be accessed directly by the class name and doesn’t need any object.",
        ]}
      />
      <Syntax
        src="85 Static Members in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default StaticMembersInJava;
