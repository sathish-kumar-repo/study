import CssReference from "../code/01_Css Reference";
import Selectors from "../code/02_Selectors";
import SimpleSelectors from "../code/02_Selectors/01 Simple Selectors";
import CombinatorsSelectors from "../code/02_Selectors/02 Combinators Selectors";
import AtributeSelectors from "../code/02_Selectors/03 Attribute selectors";
import PseudoClassSelectors from "../code/02_Selectors/04 Pseudo Class selectors";
import PseudoElementSelectors from "../code/02_Selectors/05 Pseudo element selectors";
import Units from "../code/03_Units";

const cssContent = {
  about: {
    subCategory: "Web Development",
    name: "Learn CSS",
    description:
      "Learn how to style your web pages using CSS — from colors and layouts to animations and responsiveness.",
    img: "css.jpg",
  },
  route: [
    {
      topic: "Css Reference",
      page: <CssReference />,
    },
    {
      heading: "Selectors",
      topic: "Selectors types",
      page: <Selectors />,
    },
    {
      topic: "Simple Selectors",
      type: "H2",
      page: <SimpleSelectors />,
    },
    {
      topic: "Combinators Selectors",
      type: "H2",
      page: <CombinatorsSelectors />,
    },
    {
      topic: "Atribute Selectors",
      type: "H2",
      page: <AtributeSelectors />,
    },
    {
      topic: "Pseudo Class Selectors",
      type: "H2",
      page: <PseudoClassSelectors />,
    },
    {
      topic: "Pseudo Element Selectors",
      type: "H2",
      page: <PseudoElementSelectors />,
    },
    {
      heading: "Units",
      topic: "Units",
      page: <Units />,
    },
  ],
};

export default cssContent;
