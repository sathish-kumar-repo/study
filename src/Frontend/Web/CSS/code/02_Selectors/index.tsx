import { Title, H1, List, H3, Note, Space } from "../../../../../Backend/UI";

const Selectors = () => {
  return (
    <>
      <Title>CSS Selectors</Title>
      <H1>Types</H1>
      <H3>1. Simple Selectors</H3>
      <List
        items={[
          "Element (tagname) selector",
          "Class (.) selector",
          "D (#) selector",
          "Universal (*) selector",
          "Group selectors",
        ]}
      />
      <H3>2. Combinators Selectors</H3>
      <List
        items={[
          "Descendant",
          "Direct child",
          "Adjacent siblings",
          "General siblings",
        ]}
      />
      <H3>3. Attribute selectors</H3>
      <H3>4. Pseudo Class selectors</H3>
      <H3>5. Pseudo element selectors</H3>

      <Space sT={30} />
      <Note>
        CSS selectors are used to "find" (or select) HTML elements based on
        their. Mainly used Selectors are following :
      </Note>
    </>
  );
};

export default Selectors;
