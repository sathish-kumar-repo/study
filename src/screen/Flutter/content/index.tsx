import IntroFlutter from "../code/01_Intro";
import { FlutterSdk } from "../code/02_flutterSdk";
import Widgets from "../code/03_Widgets";

const flutterContent = {
  about: {
    name: "Flutter dfdf",
    description: "Learn about photography.",
    link: "",
    img: "design.jpg",
  },
  route: [
    {
      topic: "Getting Started",
      page: <IntroFlutter />,
    },
    {
      heading: "Main Content",
      topic: "Widgets",
      page: <Widgets />,
    },
    {
      topic: "Flutter SDK Setup",
      page: <FlutterSdk />,
    },
  ],
};

export default flutterContent;
