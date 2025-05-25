import { H1, H2, H3, Para, Syntax, Title } from "../../../../../../Backend/UI";

const AtributeSelectors = () => {
  return (
    <>
      <Title>Attribute Selectors</Title>

      <Para>
        CSS Attribute Selectors allow you to apply styles based on attributes in
        HTML elements. You can style elements with:
        <br />– A specific attribute
        <br />– A specific value
        <br />– Values that start with, end with, or contain certain text
      </Para>

      <H1>1. Select elements with a specific attribute</H1>
      <Para>
        Matches elements that contain the given attribute (any value).
        <br />
        Example: [required] selects inputs with the "required" attribute.
      </Para>
      <Syntax title="style.css" language="css" code={code10} />
      <Syntax title="index.html" language="html" code={code10_html} />

      <H1>2. Select elements with a specific attribute and value</H1>
      <Para>
        Matches elements where the attribute is exactly equal to the value.
        <br />
        Example: [type="text"] selects only input elements of type text.
      </Para>
      <Syntax title="style.css" language="css" code={code11} />
      <Syntax title="index.html" language="html" code={code11_html} />

      <H1>3. Match value that starts with specific text (^)</H1>
      <Para>
        Matches attribute values that start with a certain string.
        <br />
        Example: [href^="https://"] targets links starting with https.
      </Para>
      <Syntax title="style.css" language="css" code={code12} />
      <Syntax title="index.html" language="html" code={code12_html} />

      <H1>4. Match value that ends with specific text ($)</H1>
      <Para>
        Matches attribute values that end with specific text.
        <br />
        Example: [src$=".png"] selects images ending in ".png".
      </Para>
      <Syntax title="style.css" language="css" code={code13} />
      <Syntax title="index.html" language="html" code={code13_html} />

      <H1>5. Match value that contains specific text (*)</H1>
      <Para>
        Matches attribute values that contain specific string anywhere.
        <br />
        Example: [class*="btn"] selects any class with "btn" in it.
      </Para>
      <Syntax title="style.css" language="css" code={code14} />
      <Syntax title="index.html" language="html" code={code14_html} />

      <H1>6. More examples with class and id attributes</H1>
      <Para>
        Attribute selectors also work with class and id. Use ~= to match whole
        words in multi-class attributes.
      </Para>
      <Syntax title="style.css" language="css" code={code15} />
      <Syntax title="index.html" language="html" code={code15_html} />

      <H1>Practical example with anchor tags</H1>
      <Para>
        Example of using multiple attribute selectors with anchor (&lt;a&gt;)
        elements.
      </Para>
      <Syntax title="style.css" language="css" code={code16} />
      <Syntax title="index.html" language="html" code={code16_html} />
    </>
  );
};

export default AtributeSelectors;

// ------------------------- CSS Variables -------------------------
const code10 = `input[required] {
  border: 2px solid red;
}`;
const code11 = `input[type="text"] {
  background-color: lightyellow;
}`;
const code12 = `a[href^="https://"] {
  color: green;
}`;
const code13 = `img[src$=".png"] {
  border: 3px solid blue;
}`;
const code14 = `div[class*="btn"] {
  padding: 10px;
  background-color: lightblue;
}`;
const code15 = `div[class~="inner"] {
  background: gray;
}
.txt {
  color: white;
}`;
const code16 = `a[title] {
  color: blanchedalmond;
}
a[title="Link-1"] {
  color: orange;
}
a[href] {
  color: aqua;
}
a[href="test.png"] {
  color: aqua;
}
a[href^="test"] {
  color: blueviolet;
}
a[href$="#"] {
  color: red;
}`;

// ------------------------- HTML Variables -------------------------
const code10_html = `<input type="text" required />
<input type="text" />`;

const code11_html = `<input type="text" />
<input type="password" />`;

const code12_html = `<a href="https://google.com">Secure</a>
<a href="http://example.com">Not Secure</a>`;

const code13_html = `<img src="photo.png" />
<img src="image.jpg" />`;

const code14_html = `<div class="btn-primary">Button</div>
<div class="container">Not a button</div>`;

const code15_html = `<div class="box inner txt">Content</div>
<div class="box outer">Other</div>`;

const code16_html = `<a title="Link-1" href="test.png">Image Link</a>
<a href="test-file">Starts with "test"</a>
<a href="index.html#">Anchor Ending</a>`;
