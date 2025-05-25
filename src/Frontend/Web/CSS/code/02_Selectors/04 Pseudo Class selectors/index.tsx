import {
  H1,
  H3,
  Para,
  Syntax,
  Note,
  List,
  Title,
  HL,
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
          ":nth-last-child(n)",
          ":nth-of-type(n)",
          ":nth-last-of-type(n)",
          "only-child",
          "only-of-type",
          "first-of-type",
          "last-of-type",
          "empty",
          "not",
          "target",
          "lang",
          "is",
          "Link states",
          "Form states",
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
      <Para>
        Selects the <b>nth child</b> (of any type) among its parent's children.
        Accepts patterns like <code>2n</code>, <code>odd</code>,{" "}
        <code>even</code>, and <code>3n-1</code>.
      </Para>
      <Syntax title="style.css" language="css" code={nthChildCSS} />
      <Syntax title="index.html" language="html" code={nthChildHTML} />

      <H1>:nth-last-child(n)</H1>
      <Para>
        Selects the <b>nth child from the end</b> among its siblings. Useful
        with patterns like <code>2n</code>, <code>odd</code>, <code>even</code>,{" "}
        <code>3n-1</code>.
      </Para>
      <Syntax title="style.css" language="css" code={nthLastChildCSS} />
      <Syntax title="index.html" language="html" code={nthLastChildHTML} />

      <H1>:nth-of-type(n)</H1>
      <Para>
        Selects the <b>nth element of a specific type</b> among its siblings.
        Counts only siblings of the same type. You can use formulas like{" "}
        <code>2n</code> (even), <code>2n+1</code> (odd), <code>3n-1</code>, etc.
      </Para>
      <Syntax title="style.css" language="css" code={nthOfTypeCSS} />
      <Syntax title="index.html" language="html" code={nthOfTypeHTML} />

      <H1>:nth-last-of-type(n)</H1>
      <Para>
        Selects the <b>nth element of a specific type</b> counting from the end
        among its siblings. Counts only siblings of the same type. Like{" "}
        <code>:nth-of-type</code>, formulas like <code>2n</code>,{" "}
        <code>odd</code>, or <code>3n-1</code> can be used.
      </Para>
      <Syntax title="style.css" language="css" code={nthLastOfTypeCSS} />
      <Syntax title="index.html" language="html" code={nthLastOfTypeHTML} />
      <H1>:only-child</H1>
      <Para>
        Selects an element that is the <b>only child</b> of its parent,
        regardless of type. If the parent has more than one child element, none
        will be selected.
      </Para>
      <Syntax title="style.css" language="css" code={onlyChildCSS} />
      <Syntax title="index.html" language="html" code={onlyChildHTML} />

      <H1>:only-of-type</H1>
      <Para>
        Selects an element that is the <b>only one of its type</b> among its
        siblings. If there are multiple elements of the same type, none will be
        selected.
      </Para>
      <Syntax title="style.css" language="css" code={onlyOfTypeCSS} />
      <Syntax title="index.html" language="html" code={onlyOfTypeHTML} />

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
          <>
            <HL>:link</HL> - Unvisited links
          </>,
          <>
            <HL>:visited</HL> - Visited links
          </>,
          <>
            <HL>:hover</HL> - When mouse is over the link
          </>,
          <>
            <HL>:active</HL> - When the link is being clicked
          </>,
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

      <H1>Form states</H1>

      <Para>
        <b>:focus</b> styles an element when it has keyboard or mouse focus.
      </Para>
      <Syntax title="style.css " language="css" code={cssFocus} />
      <Syntax title="index.html" language="html" code={htmlFocus} />

      <Para>
        <b>:checked</b> styles a checkbox or radio button when it is checked.
      </Para>
      <Syntax title="style.css" language="css" code={cssChecked} />
      <Syntax title="index.html" language="html" code={htmlChecked} />

      <Para>
        <b>:enabled</b> styles enabled form elements, <b>:disabled</b> styles
        disabled ones, and <b>:required</b> styles required inputs.
      </Para>
      <Syntax
        title="style.css"
        language="css"
        code={cssEnableDisableRequired}
      />
      <Syntax
        title="index.html"
        language="html"
        code={htmlEnableDisableRequired}
      />

      <Para>
        <b>:read-only</b> styles inputs that cannot be edited, and{" "}
        <b>:read-write</b> styles inputs that can be edited.
      </Para>
      <Syntax title="style.css" language="css" code={cssReadOnlyReadWrite} />
      <Syntax title="index.html" language="html" code={htmlReadOnlyReadWrite} />

      <Para>
        <b>:valid</b> styles inputs that match their validation pattern, and{" "}
        <b>:invalid</b> styles those that don’t.
      </Para>
      <Syntax title="style.csS" language="css" code={cssValidInvalid} />
      <Syntax title="index.html" language="html" code={htmlValidInvalid} />

      <Para>
        <b>:default</b> styles the initially selected radio button or select
        option.
      </Para>
      <Syntax title="style.css" language="css" code={cssDefault} />
      <Syntax title="index.html" language="html" code={htmlDefault} />
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
/* Even children */
ul li:nth-child(even) {
  background-color: #e0f7fa;
}

/* Odd children */
ul li:nth-child(odd) {
  background-color: #fce4ec;
}

/* Every 2nd child */
ul li:nth-child(2n) {
  font-style: italic;
}

/* Custom pattern: 3n-1 */
ul li:nth-child(3n-1) {
  font-weight: bold;
  color: seagreen;
}
`;

const nthLastChildCSS = `
/* Even children from end */
ul li:nth-last-child(even) {
  background-color: #ffecb3;
}

/* Odd children from end */
ul li:nth-last-child(odd) {
  background-color: #e1bee7;
}

/* Every 2nd child from end */
ul li:nth-last-child(2n) {
  text-decoration: underline;
}

/* Custom pattern: 3n-1 from end */
ul li:nth-last-child(3n-1) {
  border: 1px dashed #777;
}
`;

const nthOfTypeCSS = `
/* Even paragraphs */
section p:nth-of-type(even) {
  background-color: #f1f1f1;
}

/* Odd paragraphs */
section p:nth-of-type(odd) {
  color: darkblue;
}

/* Every 2nd element (same as even) */
section p:nth-of-type(2n) {
  font-weight: bold;
}

/* Custom pattern: 3n-1 */
section p:nth-of-type(3n-1) {
  text-decoration: underline;
  color: seagreen;
}
`;

const nthLastOfTypeCSS = `
/* Even paragraphs from end */
section p:nth-last-of-type(even) {
  background-color: #ffe4e1;
}

/* Odd paragraphs from end */
section p:nth-last-of-type(odd) {
  color: maroon;
}

/* Every 2nd element from end */
section p:nth-last-of-type(2n) {
  font-style: italic;
}

/* Custom pattern: 3n-1 from end */
section p:nth-last-of-type(3n-1) {
  border-bottom: 1px dashed black;
}
`;

const nthOfTypeHTML = `
<section>
  <p>Paragraph 1 (1st child)</p>
  <p>Paragraph 2 (2nd child)</p>
  <p>Paragraph 3 (3rd child)</p>
  <spam>ignored</spam>
  <p>Paragraph 4 (4th child)</p>
  <p>Paragraph 5 (5th child)</p>
</section>
`;

const nthLastOfTypeHTML = nthOfTypeHTML;

const nthChildHTML = `
<ul>
  <li>Item 1 (1st child)</li>
  <li>Item 2 (2nd child)</li>
  <li>Item 3 (3rd child)</li>
  <li>Item 4 (4th child)</li>
  <li>Item 5 (5th child)</li>
  <li>Item 6 (6th child)</li>
</ul>
`;

const nthLastChildHTML = nthChildHTML;

const onlyChildCSS = `
/* Style any element that is the only child of its parent */
p:only-child {
  color: white;
  background-color: #ff7043;
  padding: 10px;
  border-radius: 5px;
}

div > h2:only-child {
  font-style: italic;
  border-bottom: 2px solid #673ab7;
}
`;

const onlyChildHTML = `
<div>
  <p>This paragraph is the only child of its parent div and will be styled.</p>
</div>

<div>
  <h2>This h2 is the only child inside this div and will be styled.</h2>
</div>

<div>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
`;

const onlyOfTypeCSS = `
/* Style the only <p> element among siblings */
p:only-of-type {
  color: white;
  background-color: #4caf50;
  padding: 10px;
  border-radius: 5px;
}

/* Style the only <h2> element among siblings */
h2:only-of-type {
  font-style: italic;
  border-bottom: 2px solid #2196f3;
}
`;

const onlyOfTypeHTML = `
<div>
  <p>This paragraph is the only paragraph inside this div and will be styled.</p>
  <h2>This heading is the only h2 here and will be styled.</h2>
  <span>Some other element</span>
</div>

<div>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <h2>Heading 1</h2>
  <h2>Heading 2</h2>
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

// CSS snippets
const cssFocus = `
#txt:focus {
  outline: none;
  border: 1px solid brown;
}`;

const htmlFocus = `<input type="text" id="txt" />`;

const cssChecked = `
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px red;
}`;

const htmlChecked = `<input type="checkbox" id="cricket" />
<label for="cricket">Cricket</label>`;

const cssEnableDisableRequired = `
input[type="text"]:enabled {
  background-color: pink;
}
input[type="text"]:disabled {
  background-color: red;
}
input[type="text"]:required {
  background-color: green;
}`;

const htmlEnableDisableRequired = `<input type="text" />  <!-- enabled -->
<input type="text" disabled />  <!-- disabled -->
<input type="text" required />  <!-- required -->`;

const cssReadOnlyReadWrite = `
input[type="email"]:read-only {
  background-color: gray;
}
input[type="email"]:read-write {
  background-color: plum;
}`;

const htmlReadOnlyReadWrite = `<input type="email" />
<input type="email" readonly />`;

const cssValidInvalid = `
input[type="text"]:invalid {
  border-color: red;
}
input[type="text"]:valid {
  border-color: rgb(15, 225, 15);
}`;

const htmlValidInvalid = `<input type="text" placeholder="Enter Username" pattern="[a-z]*" />`;

const cssDefault = `
input[type="radio"]:default {
  box-shadow: 0 0 0 3px green;
}
option:default {
  color: red;
}`;

const htmlDefault = `<input type="radio" name="gender" id="male" checked />
<label for="male">Male</label>
<input type="radio" name="gender" id="female" />
<label for="female">Female</label>

<select>
  <option value="">select</option>
  <option value="C">C</option>
  <option value="C++">C++</option>
  <option value="Java">Java</option>
  <option value="CSS" selected>CSS</option>
</select>`;
