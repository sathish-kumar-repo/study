import { JSX } from "react";

export type ContentDataType = {
  about: {
    name: string;
    description: string;
    link: string;
    img: string;
  };
  route: {
    topic: string;
    page: JSX.Element;
  }[];
};
