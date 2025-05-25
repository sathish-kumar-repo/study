import { Title, H1, Syntax } from "../../../../../../Backend/UI";

const SimpleSelectors = () => {
  return (
    <>
      <Title>Simple Selectors</Title>
      <H1>Element or Tag Selector</H1>
      <Syntax title="style.css" language="css" code={code1} />

      <H1>Class Selector</H1>
      <Syntax title="style.css" language="css" code={code2} />

      <H1>id Selector</H1>
      <Syntax title="style.css" language="css" code={code3} />

      <H1>Universal Selectors</H1>
      <Syntax title="style.css" language="css" code={code4} />

      <H1>Group Selectors</H1>
      <Syntax title="style.css" language="css" code={code5} />
    </>
  );
};

export default SimpleSelectors;

var code1 = `
h1 {
  font-size: 30px;
}
`;

var code2 = `
.classname {
  font-size: 30px;
}
`;

var code3 = `
#idname {
  font-size: 30px;
}
`;

var code4 = `
* {
  margin: 0;
  padding: 0;
}
`;

var code5 = `
h1, h1, h3, h3, h5, h6, b {
  color: red;
  font-family: rockwell;
}
`;
