import { H1, H2, Para, Syntax, Title } from "../../../../../../Backend/UI";

const AtributeSelectors = () => {
  return (
    <>
      <Title>Attribute selectors</Title>
      <Para>
        In CSS, an attribute selector is a way to target elements based on the
        presence or value of their attributes. It allows you to select elements
        that have a specific attribute or apply styles to elements based on the
        attribute value. Attribute selectors are denoted by square brackets [ ]
        and can be used with various comparison operators.
      </Para>

      <H1>Select elements with a specific attribute:</H1>
      <Para>
        This selects all elements that have the specified attribute, regardless
        of its value. For example, [required] selects all elements that have the
        required attribute.
      </Para>
      <Syntax title="style.css" language="css" code={code10} />

      <H1>Select elements with a specific attribute and value:</H1>
      <Para>
        This selects elements that have the specified attribute and exactly
        match the attribute value. For example, [type=text] selects all elements
        with type="text".
      </Para>
      <Syntax title="style.css" language="css" code={code11} />

      <H1>
        Select elements with an attribute value starting with a specific string:
      </H1>
      <Para>
        This selects elements whose attribute value starts with the specified
        string. For example, [href^="https://"] selects all elements with an
        href attribute that starts with "https://".
      </Para>
      <Syntax title="style.css" language="css" code={code12} />

      <H1>
        Select elements with an attribute value ending with a specific string:
      </H1>
      <Para>
        This selects elements whose attribute value ends with the specified
        string. For example, [src$=".png"] selects all elements with a src
        attribute that ends with ".png".
      </Para>
      <Syntax title="style.css" language="css" code={code13} />

      <H1>
        Select elements with an attribute value containing a specific string:
      </H1>
      <Para>
        This selects elements whose attribute value contains the specified
        string. For example, [class*="active"] selects all elements with a class
        attribute that contains the string "active".
      </Para>
      <Syntax title="style.css" language="css" code={code14} />

      <H2>Some Example</H2>
      <Syntax title="style.css" language="css" code={code15} />

      <H2>Example in based anchor</H2>
      <Syntax title="style.css" language="css" code={code16} />
    </>
  );
};

export default AtributeSelectors;

var code16 = `
a[title]{
    color: blanchedalmond;
}
a[title="Link-1"]{
    color: orange;
}

a[href]{
    color:aqua
}
a[href="test.png"]{
    color:aqua
}

/* start with text channge color(add symbol ^)  */
a[href^="test"]{
    color: blueviolet;
}
/* end with text channge color(add symbol ^)  */
a[href$="#"]{
    color: red;
}
`;
var code15 = `
/* Attribute selectors */
div[class]{
    background: gray;
}
div[id]{
    background: gray;
}

/* in particular class or id */
div[class~="inner"]{
    background: gray;
}

/* suppose use multiple  */
/* For example -->inner and txt */
/* inner class property affected */
.txt{
    color: white;
}
/* solution is symbol ~ */
div[class~="inner"]{
    background: gray;
}
.txt{
    color: white;
}
`;
var code14 = `
[attribute*=value] {
    /* Styles applied to elements with the specified attribute value containing the given string */
}
`;
var code13 = `
[attribute\$=value] {
    /* Styles applied to elements with the specified attribute value ending with the given string */
}
`;
var code12 = `
[attribute^=value] {
    /* Styles applied to elements with the specified attribute value starting with the given string */
}
`;
var code11 = `
[attribute=value] {
    /* Styles applied to elements with the specified attribute and value */
}
`;

var code10 = `
[attribute] {
    /* Styles applied to elements with the specified attribute */
}
`;
