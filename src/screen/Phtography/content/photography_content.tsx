import { JSX } from "react";
import Intro from "../code/Intro";

export type content = {
  topic: string;
  page: JSX.Element;
};

const flutterContent = [
  {
    topic: "photography",
    page: <Intro />,
  },
];

export default flutterContent;
