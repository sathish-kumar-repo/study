import IntroFlutter from "../code/01_Intro";
import { FlutterSdk } from "../code/02_flutterSdk";
import Widgets from "../code/03_Widgets";
import MediaOverview from "../code/04_Media";

const flutterContent = {
  about: {
    name: "My Ui Component",
    description: "Learn about My Ui Component via Flutter documention.",
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
    {
      topic: "Media Overview",
      page: <MediaOverview />,
    },
  ],
};

export default flutterContent;
