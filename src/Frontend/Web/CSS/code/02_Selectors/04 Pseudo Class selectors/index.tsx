import {
  H1,
  H3,
  Para,
  Syntax,
  Note,
  List,
  Title,
} from "../../../../../../Backend/UI";

const PseudoClassSelectors = () => {
  return (
    <>
      <Title>Pseudo Class selectors</Title>
      <Para>
        A <b>pseudo-class</b> lets you style an element in a special state, like
        when a user hovers over it or when a link has been visited.
      </Para>

      <List
        items={[
          "When a user moves the mouse over an element",
          "Style links differently if they are visited or not",
          "When an element gets keyboard focus",
        ]}
      />

      <H3>Common Types of Pseudo-Class Selectors</H3>
      <List
        type="ordered"
        items={[
          "root",
          "first-child",
          "last-child",
          "nth-child",
          "nth-of-type",
          "only-child",
          "only-of-type",
          "first-of-type",
          "last-of-type",
          "empty",
          "not",
          "target",
          "lang",
          "is",
          "link, visited, hover, active",
        ]}
      />

      <H1>:root</H1>
      <Para>
        The <code>:root</code> selector targets the root element of the document
        (usually &lt;html&gt;).
      </Para>
      <Syntax title="style.css" language="css" code={rootCSS} />

      <H1>:first-child</H1>
      <Para>Selects the first child element among its siblings.</Para>
      <Syntax title="style.css" language="css" code={firstChildCSS} />
      <Syntax title="index.html" language="html" code={firstChildHTML} />

      <H1>:last-child</H1>
      <Para>Selects the last child element of its parent.</Para>
      <Syntax title="style.css" language="css" code={lastChildCSS} />
      <Syntax title="index.html" language="html" code={lastChildHTML} />
      <Note>This only works if the element has a parent container.</Note>

      <H1>:nth-child(n)</H1>
      <Para>Selects the nth child of its parent (starting from 1).</Para>
      <Syntax title="style.css" language="css" code={nthChildCSS} />
      <Syntax title="index.html" language="html" code={nthChildHTML} />

      <H1>:nth-of-type(n)</H1>
      <Para>Selects the nth child of a specific type among its siblings.</Para>
      <Syntax title="style.css" language="css" code={nthOfTypeCSS} />
      <Syntax title="index.html" language="html" code={nthOfTypeHTML} />

      <H1>:only-child</H1>
      <Para>Selects an element that is the only child of its parent.</Para>
      <Syntax title="style.css" language="css" code={onlyChildCSS} />
      <Syntax title="index.html" language="html" code={onlyChildHTML} />
      <Note>Parent element is necessary.</Note>

      <H1>:empty</H1>
      <Para>
        Selects elements that have no children at all (no text or elements).
      </Para>
      <Syntax title="style.css" language="css" code={emptyCSS} />
      <Syntax title="index.html" language="html" code={emptyHTML} />
      <Note>Even spaces count as content, so element is not empty.</Note>

      <H1>:not(selector)</H1>
      <Para>
        Selects elements that do NOT match the selector inside{" "}
        <code>:not()</code>.
      </Para>
      <Syntax title="style.css" language="css" code={notCSS} />
      <Syntax title="index.html" language="html" code={notHTML} />

      <H1>:lang(language-code)</H1>
      <Para>Selects elements based on their language attribute.</Para>
      <Syntax title="style.css" language="css" code={langCSS} />
      <Syntax title="index.html" language="html" code={langHTML} />

      <H1>:is(selector-list)</H1>
      <Para>
        Matches any element matching one of the selectors inside{" "}
        <code>:is()</code>. Makes writing complex selectors easier.
      </Para>
      <Syntax title="style.css" language="css" code={isCSS} />
      <Syntax title="index.html" language="html" code={isHTML} />

      <H1>
        Link states: <code>:link</code>, <code>:visited</code>,{" "}
        <code>:hover</code>, <code>:active</code>
      </H1>
      <Para>
        These pseudo-classes are used to style links in different states:
      </Para>
      <List
        items={[
          "<code>:link</code> - Unvisited links",
          "<code>:visited</code> - Visited links",
          "<code>:hover</code> - When mouse is over the link",
          "<code>:active</code> - When the link is being clicked",
        ]}
      />
      <Syntax title="style.css" language="css" code={linkStatesCSS} />
      <Syntax title="index.html" language="html" code={linkStatesHTML} />

      <H1>:target</H1>
      <Para>
        Styles the element targeted by the URL fragment (the part after #).
      </Para>
      <Syntax title="style.css" language="css" code={targetCSS} />
      <Syntax title="index.html" language="html" code={targetHTML} />
    </>
  );
};

export default PseudoClassSelectors;

// --- Syntax Blocks ---
const rootCSS = `
/* Style the root element */
:root {
  --main-color: blue;
  font-size: 18px;
}
body {
  color: var(--main-color);
}
`;

const firstChildCSS = `
/* Style the first child element */
p:first-child {
  color: red;
}
`;

const firstChildHTML = `
<div>
  <p>This paragraph is first child and will be red.</p>
  <p>This paragraph is not first child.</p>
</div>
`;

const lastChildCSS = `
ul li:last-child {
  font-weight: bold;
}
`;

const lastChildHTML = `
<ul>
  <li>First item</li>
  <li>Last item (bold)</li>
</ul>
`;

const nthChildCSS = `
li:nth-child(2) {
  color: green;
}
`;

const nthChildHTML = `
<ul>
  <li>First item</li>
  <li>Second item (green)</li>
  <li>Third item</li>
</ul>
`;

const nthOfTypeCSS = `
p:nth-of-type(2) {
  color: blue;
}
`;

const nthOfTypeHTML = `
<div>
  <p>First paragraph</p>
  <span>Not a paragraph</span>
  <p>Second paragraph (blue)</p>
</div>
`;

const onlyChildCSS = `
div > p:only-child {
  color: purple;
}
`;

const onlyChildHTML = `
<div>
  <p>This paragraph is the only child and purple.</p>
</div>
<div>
  <p>First child</p>
  <p>Second child</p>
</div>
`;

const emptyCSS = `
div:empty {
  background-color: yellow;
  border: 1px solid orange;
}
`;

const emptyHTML = `
<div></div> <!-- Will be yellow -->
<div> </div> <!-- Not empty because of space -->
<div><p>Not empty</p></div>
`;

const notCSS = `
p:not(.special) {
  color: gray;
}
`;

const notHTML = `
<p>This paragraph is gray.</p>
<p class="special">This paragraph is not gray.</p>
`;

const langCSS = `
p:lang(en) {
  color: blue;
}
p:lang(fr) {
  color: red;
}
`;

const langHTML = `
<p lang="en">This paragraph is blue.</p>
<p lang="fr">This paragraph is red.</p>
`;

const isCSS = `
/* Select h1 or h2 inside #container */
#container :is(h1, h2) {
  color: green;
}
`;

const isHTML = `
<div id="container">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <p>Paragraph</p>
</div>
`;

const linkStatesCSS = `
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
  background-color: yellow;
}
a:active {
  color: orange;
}
`;

const linkStatesHTML = `
<a href="https://example.com">Example Link</a>
`;

const targetCSS = `
p:target {
  background-color: lightgreen;
  font-weight: bold;
}
`;

const targetHTML = `
<a href="#section1">Go to Section 1</a>
<p id="section1">This paragraph is highlighted when targeted.</p>
`;
