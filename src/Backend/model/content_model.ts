import { JSX } from "react";

export type ContentDataType = {
  about: {
    subCategory?: string;
    name: string;
    description: string;
    img: string;
  };
  route: {
    heading?: string;
    subHeading?: string;
    topic: string;
    topicH1: string;
    topicH2: string;
    topicH3: string;
    page: JSX.Element;
  }[];
};
