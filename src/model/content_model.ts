import { JSX } from "react";

export type ContentDataType = {
  about: {
    name: string;
    description: string;
    link: string;
    img: string;
  };
  route: {
    heading?: string;
    topic: string;
    page: JSX.Element;
  }[];
};
