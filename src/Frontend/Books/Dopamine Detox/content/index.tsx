import Reference from "../code/Reference";
import Summary from "../code/Summary";

const dopamineDetoxContent = {
  about: {
    subCategory: "Mindset & Self-Discipline",
    name: "Dopamine Detox",
    description:
      "Reset your brain, escape distractions, and build better habits with Dopamine Detox.",
    img: "dopamine-detox.jpg",
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

export default dopamineDetoxContent;
