import CssReference from "../code/01_Css Reference";
import Selectors from "../code/02_Selectors";

import SimpleSelectors from "../code/02_Selectors/01 Simple Selectors";
import CombinatorsSelectors from "../code/02_Selectors/02 Combinators Selectors";
import AtributeSelectors from "../code/02_Selectors/03 Attribute selectors";
import PseudoClassSelectors from "../code/02_Selectors/04 Pseudo Class selectors";
import PseudoElementSelectors from "../code/02_Selectors/05 Pseudo element selectors";
import Units from "../code/03_Units";
import Font from "../code/04_Font";
import Cursor from "../code/05_Cursor";
import Background from "../code/06_Background";
import BoxSizing from "../code/07_Box Sizing";
import Opacity from "../code/08_Opacity";
import TextCss from "../code/09_Text";
import ListStyling from "../code/10_List Styling";
import Margin from "../code/11_Margin";
import Padding from "../code/12_Padding";
import Border from "../code/13_Border";
import Display from "../code/14_Display";
import Table from "../code/15_Table";
import ParentAndChild from "../code/16_Parent And Child";
import BorderRadius from "../code/17_Border Radius";
import Colors from "../code/18_Colors";
import BoxShadow from "../code/19_Box Shadow";
import Chess from "../code/20_Chess";
import Layout from "../code/21_Layout";
import Visibility from "../code/22_Visibility";
import ZIndex from "../code/23_Z Index";
import Outline from "../code/24_Outline";
import MinAndMaxH from "../code/25_Min And Max H";
import MinAndMaxW from "../code/26_Min And Max W";
import Overflow from "../code/27_Overflow";
import Column from "../code/28_Column";
import Transition from "../code/29_Transition";
import FloatAndClear from "../code/30_Float And Clear";
import VerticalCenter from "../code/31_Vertical Center";
import BasicCodeSetup from "../code/32_Basic Code Setup";
import FlexInlineflex from "../code/33_Flex Inlineflex";
import FlexDirection from "../code/34_Flex Direction";
import FlexWrap from "../code/35_Flex Wrap";
import FlexFlow from "../code/36_Flex Flow";
import FGap from "../code/37_F Gap";
import JustifyContent from "../code/38_Justify Content";
import AlignItems from "../code/39_Align Items";
import AlignContent from "../code/40_Align Content";
import FlexOrder from "../code/41_Flex Order";
import FlexGrow from "../code/42_Flex Grow";
import FlexShrink from "../code/43_Flex Shrink";
import FlexBasis from "../code/44_Flex Basis";
import Flex from "../code/45_Flex";
import AlignSelf from "../code/46_Align Self";
import BasicCodeSetupG from "../code/47_Basic Code Setup G";
import GridInlinegrid from "../code/48_Grid Inlinegrid";
import GridTemplateColumns from "../code/49_Grid Template Columns";
import GridTemplateRows from "../code/50_Grid Template Rows";
import GridTemplates from "../code/51_Grid Templates";
import GridGap from "../code/52_Grid Gap";
import JustifyItems from "../code/53_Justify Items";
import PlaceItems from "../code/55_Place Items";
import PlaceContent from "../code/58_Place Content";
import GridAutoFlow from "../code/59_Grid Auto Flow";
import GridColumn from "../code/60_Grid Column";
import GridRow from "../code/61_Grid Row";
import JustifySelf from "../code/62_Justify Self";
import PlaceSelf from "../code/64_Place Self";
import GridTemplateArea from "../code/65_Grid Template Area";
import Stylishpreferences from "../code/66_Stylishpreferences";

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
    {
      heading: "Properties",
      topic: "Font",
      page: <Font />,
    },
    {
      topic: "Cursor",
      page: <Cursor />,
    },
    {
      topic: "Background",
      page: <Background />,
    },
    {
      topic: "Box Sizing",
      page: <BoxSizing />,
    },
    {
      topic: "Opacity",
      page: <Opacity />,
    },
    {
      topic: "Text",
      page: <TextCss />,
    },
    {
      topic: "List Styling",
      page: <ListStyling />,
    },
    {
      topic: "Margin",
      page: <Margin />,
    },
    {
      topic: "Padding",
      page: <Padding />,
    },
    {
      topic: "Border",
      page: <Border />,
    },
    {
      topic: "Display",
      page: <Display />,
    },
    {
      topic: "Table",
      page: <Table />,
    },
    {
      topic: "Parent And Child",
      page: <ParentAndChild />,
    },
    {
      topic: "Border Radius",
      page: <BorderRadius />,
    },
    {
      topic: "Colors",
      page: <Colors />,
    },
    {
      topic: "Box Shadow",
      page: <BoxShadow />,
    },
    {
      topic: "Chess",
      page: <Chess />,
    },
    {
      topic: "Layout",
      page: <Layout />,
    },
    {
      topic: "Visibility",
      page: <Visibility />,
    },
    {
      topic: "Z Index",
      page: <ZIndex />,
    },
    {
      topic: "Outline",
      page: <Outline />,
    },
    {
      topic: "Min And Max H",
      page: <MinAndMaxH />,
    },
    {
      topic: "Min And Max W",
      page: <MinAndMaxW />,
    },
    {
      topic: "Overflow",
      page: <Overflow />,
    },
    {
      topic: "Column",
      page: <Column />,
    },
    {
      topic: "Transition",
      page: <Transition />,
    },
    {
      topic: "Float And Clear",
      page: <FloatAndClear />,
    },
    {
      topic: "Vertical Center",
      page: <VerticalCenter />,
    },
    {
      topic: "Basic Code Setup",
      page: <BasicCodeSetup />,
    },
    {
      topic: "Flex Inlineflex",
      page: <FlexInlineflex />,
    },
    {
      topic: "Flex Direction",
      page: <FlexDirection />,
    },
    {
      topic: "Flex Wrap",
      page: <FlexWrap />,
    },
    {
      topic: "Flex Flow",
      page: <FlexFlow />,
    },
    {
      topic: "F Gap",
      page: <FGap />,
    },
    {
      topic: "Justify Content",
      page: <JustifyContent />,
    },
    {
      topic: "Align Items",
      page: <AlignItems />,
    },
    {
      topic: "Align Content",
      page: <AlignContent />,
    },
    {
      topic: "Flex Order",
      page: <FlexOrder />,
    },
    {
      topic: "Flex Grow",
      page: <FlexGrow />,
    },
    {
      topic: "Flex Shrink",
      page: <FlexShrink />,
    },
    {
      topic: "Flex Basis",
      page: <FlexBasis />,
    },
    {
      topic: "Flex",
      page: <Flex />,
    },
    {
      topic: "Align Self",
      page: <AlignSelf />,
    },
    {
      topic: "Basic Code Setup G",
      page: <BasicCodeSetupG />,
    },
    {
      topic: "Grid Inlinegrid",
      page: <GridInlinegrid />,
    },
    {
      topic: "Grid Template Columns",
      page: <GridTemplateColumns />,
    },
    {
      topic: "Grid Template Rows",
      page: <GridTemplateRows />,
    },
    {
      topic: "Grid Templates",
      page: <GridTemplates />,
    },
    {
      topic: "Grid Gap",
      page: <GridGap />,
    },
    {
      topic: "Justify Items",
      page: <JustifyItems />,
    },
    {
      topic: "Align Items",
      page: <AlignItems />,
    },
    {
      topic: "Place Items",
      page: <PlaceItems />,
    },
    {
      topic: "Justify Content",
      page: <JustifyContent />,
    },
    {
      topic: "Align Content",
      page: <AlignContent />,
    },
    {
      topic: "Place Content",
      page: <PlaceContent />,
    },
    {
      topic: "Grid Auto Flow",
      page: <GridAutoFlow />,
    },
    {
      topic: "Grid Column",
      page: <GridColumn />,
    },
    {
      topic: "Grid Row",
      page: <GridRow />,
    },
    {
      topic: "Justify Self",
      page: <JustifySelf />,
    },
    {
      topic: "Align Self",
      page: <AlignSelf />,
    },
    {
      topic: "Place Self",
      page: <PlaceSelf />,
    },
    {
      topic: "Grid Template Area",
      page: <GridTemplateArea />,
    },
    {
      topic: "Stylishpreferences",
      page: <Stylishpreferences />,
    },
  ],
};

export default cssContent;
