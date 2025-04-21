import { JSX } from "react";
import Intro from "../code/Intro";
import HowToInstall from "../code/HowToInstall";

export type content = {
  topic: string;
  page: JSX.Element;
};

const photographyContent = [
  {
    topic: "intro",
    page: <Intro />,
  },
  {
    topic: "how to install",
    page: <HowToInstall />,
  },
];

export default photographyContent;
