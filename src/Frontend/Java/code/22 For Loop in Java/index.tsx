import { Para, Syntax, Title } from "../../../../Backend/UI";
import { domain } from "../../content";

const ForLoopInJava = () => {
  return (
    <>
      <Title>For Loop in Java</Title>
      <Para>
        {`The for loop in Java is an entry-controlled loop. A for loop is a
        repetition control structure which allows us to write a loop that is
        executed a specific number of times. The three components of the for
        loop (separated by ;) are variable declaration/initialization (here int
        i = 0), the condition (here i < 100), and the increment statement
        (here i++).`}
      </Para>
      <Para>{`The variable declaration is done once as if placed just inside the { on the first run. Then the condition is checked, if it is true the body of the loop will execute, if it is false the loop will stop. Assuming the loop continues, the body will execute and finally when the } is reached the increment statement will execute just before the condition is checked again.`}</Para>
      <Para>
        The curly braces are optional (you can one line with a semicolon) if the
        loop contains just one statement. But, it's always recommended to use
        braces to avoid misunderstandings and bugs. The for loop components are
        optional. If your business logic contains one of these parts, you can
        omit the corresponding component from your for loop.
      </Para>
      <Syntax
        src="22 For Loop in Java/App.java"
        customDomain={domain}
        language="java"
      />
    </>
  );
};

export default ForLoopInJava;
