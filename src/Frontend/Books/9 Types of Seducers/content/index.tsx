import Reference from "../code/Reference";
import Summary from "../code/Summary";

const seducerContent = {
  about: {
    subCategory: "Social & Relationship Skills",
    name: "The Art of Seduction – 9 Types of Seducers",
    description:
      "A simple breakdown of the 9 seductive personality types from Robert Greene’s 'The Art of Seduction'.",
    img: "seducers.jpg",
  },

  route: [
    {
      topic: "Summary",
      page: <Summary />,
    },
    {
      topic: "Reference",
      page: <Reference />,
    },
  ],
};

export default seducerContent;
