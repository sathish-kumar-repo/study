import IntroFlutter from "../code/01_Intro";
import { FlutterSdk } from "../code/02_flutterSdk";
import Widgets from "../code/03_Widgets";
import MediaOverview from "../code/04_Media";

const flutterConceptContent = {
  about: {
    subCategory: "Mobile Development",
    name: "Flutter Concepts",
    description:
      "Understand the core concepts of Flutter, including its architecture, rendering, and reactive programming model.",
    img: "flutter-concept.png",
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
    {
      topic: "Media Overview",
      page: <MediaOverview />,
    },
  ],
};

export default flutterConceptContent;
