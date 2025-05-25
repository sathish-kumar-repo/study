import { H1, Para, Syntax, Table, Title } from "../../../../../../Backend/UI";

const PseudoElementSelectors = () => {
  return (
    <>
      <Title>Pseudo Elements in CSS</Title>
      <Para>
        A <b>pseudo-element</b> is a special keyword added to a selector that
        allows you to style specific parts of an element. While pseudo-classes
        style the element in a certain state, pseudo-elements style parts
        **inside** the element — like the first letter, line, or generated
        content.
      </Para>

      <Table>
        <thead>
          <tr>
            <th>Selector</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>::before</td>
            <td>
              Inserts content <b>before</b> the actual content of the element
            </td>
          </tr>
          <tr>
            <td>::after</td>
            <td>
              Inserts content <b>after</b> the actual content of the element
            </td>
          </tr>
          <tr>
            <td>::first-letter</td>
            <td>
              Styles the <b>first letter</b> of a block of text
            </td>
          </tr>
          <tr>
            <td>::first-line</td>
            <td>
              Styles the <b>first line</b> of a block of text
            </td>
          </tr>
          <tr>
            <td>::selection</td>
            <td>
              Styles the portion of text <b>highlighted</b> by the user
            </td>
          </tr>
          <tr>
            <td>::placeholder</td>
            <td>
              Styles the <b>placeholder text</b> of an input element
            </td>
          </tr>
          <tr>
            <td>::marker</td>
            <td>
              Styles the <b>bullet or number</b> of list items
            </td>
          </tr>
        </tbody>
      </Table>

      <Syntax title="style.css" language="css" code={css} />
      <Syntax title="index.html" language="html" code={html} />
    </>
  );
};

export default PseudoElementSelectors;

const css = `
/* Placeholder text styling */
input::placeholder {
  color: teal;
  font-style: italic;
}

/* Highlighted text styling */
p::selection {
  background-color: #222f3e;
  color: white;
}

/* First letter styling */
p::first-letter {
  font-size: 40px;
  font-weight: bold;
  color: red;
}

/* First line styling */
p::first-line {
  color: blue;
  font-style: italic;
}

/* Box styling with before and after pseudo-elements */
.box {
  background-color: #333;
  color: white;
  width: 300px;
  height: 100px;
  position: relative;
  padding: 20px;
}

/* Inserts a red bar at the top */
.box::before {
  content: '';
  width: 100%;
  height: 20px;
  background-color: #ff4757;
  position: absolute;
  top: 0;
  left: 0;
}

/* Inserts a red bar at the bottom */
.box::after {
  content: '';
  width: 100%;
  height: 20px;
  background-color: #ff4757;
  position: absolute;
  bottom: 0;
  left: 0;
}
`;
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Pseudo Elements Demo</title>
  </head>

  <body>
    <h1>Pseudo Element Selectors Demo</h1>

    <div class="box">This is a styled box using ::before and ::after</div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
      suscipit nunc. Integer non lectus eget odio mattis lacinia.
    </p>

    <p>
      Another paragraph to demonstrate ::first-line and ::first-letter styling.
    </p>

    <input type="text" placeholder="Enter your name" />
  </body>
</html>`;
