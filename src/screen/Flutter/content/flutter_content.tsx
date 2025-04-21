import IntroFlutter from "../code/01_Intro";
import { FlutterSdk } from "../code/02_flutterSdk";

const flutterContent = {
  about: {
    name: "Flutter dfdf",
    description: "Learn about photography.",
    link: "",
    img: "design.jpg",
  },
  route: [
    {
      topic: "intro flutter",
      page: <IntroFlutter />,
    },
    {
      topic: "flutter sdk",
      page: <FlutterSdk />,
    },
  ],
};

export default flutterContent;
