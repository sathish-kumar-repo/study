import { H1, Para, Syntax, Title } from "../../../../../../Backend/UI";

const CombinatorsSelectors = () => {
  return (
    <>
      <Title>Combinators Selectors</Title>

      <H1>Descendant</H1>
      <Para>
        The descendant selector (`A B`) selects all B elements that are inside
        A, at any level.
      </Para>
      <Syntax title="style.css" language="css" code={code6} />
      <Syntax title="index.html" language="html" code={html6} />

      <H1>Direct child</H1>
      <Para>
        The direct child selector (`A {">"} B`) selects only B elements that are
        immediate children of A.
      </Para>
      <Syntax title="style.css" language="css" code={code7} />
      <Syntax title="index.html" language="html" code={html7} />

      <H1>Adjacent siblings</H1>
      <Para>
        The adjacent sibling selector (`A + B`) selects the first B element
        immediately after A.
      </Para>
      <Syntax title="style.css" language="css" code={code8} />
      <Syntax title="index.html" language="html" code={html8} />

      <H1>General siblings</H1>
      <Para>
        The general sibling selector (`A ~ B`) selects all B elements that are
        siblings of A and come after it.
      </Para>
      <Syntax title="style.css" language="css" code={code9} />
      <Syntax title="index.html" language="html" code={html9} />
    </>
  );
};

export default CombinatorsSelectors;

const code6 = `/* Descendant selector: selects all <p> inside <div> */
div p {
  color: blue;
}`;

const html6 = `<!-- Descendant Example -->
<div>
  <p>This paragraph is inside a div.</p>
  <section>
    <p>This paragraph is inside a section inside a div.</p>
  </section>
</div>
<p>This paragraph is outside the div.</p>`;

const code7 = `/* Direct child selector: selects only immediate <p> children of <div> */
div > p {
  color: green;
}`;

const html7 = `<!-- Direct Child Example -->
<div>
  <p>This paragraph is a direct child of div.</p>
  <section>
    <p>This paragraph is NOT a direct child of div.</p>
  </section>
</div>`;

const code8 = `/* Adjacent sibling selector: selects <p> immediately after <h1> */
h1 + p {
  color: red;
}`;

const html8 = `<!-- Adjacent Sibling Example -->
<h1>Heading</h1>
<p>This paragraph comes immediately after h1.</p>
<p>This paragraph will not be selected.</p>`;

const code9 = `/* General sibling selector: selects all <p> siblings after <h1> */
h1 ~ p {
  color: orange;
}`;

const html9 = `<!-- General Sibling Example -->
<h1>Heading</h1>
<p>This paragraph is selected.</p>
<p>This one too.</p>
<div>Not a paragraph, not selected.</div>`;
