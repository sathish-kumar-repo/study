import Intro from "../code/Intro";
import HowToInstall from "../code/HowToInstall";

const photographyContent = {
  about: {
    name: "Photography",
    description: "Learn about photography.",
    link: "",
    img: "photography.jpg",
  },
  route: [
    {
      topic: "intro",
      page: <Intro />,
    },
    {
      topic: "how to install",
      page: <HowToInstall />,
    },
  ],
};

export default photographyContent;
