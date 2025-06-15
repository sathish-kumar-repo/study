import ShortSummary from "../code/Short Summary";
import Summary from "../code/Summary";

const thePsychologyOfMoneyContent = {
  about: {
    subCategory: "Wealth & Financial Wisdom",
    name: "The Psychology of Money",
    description:
      "A deeply insightful summary of Morgan Housel's best-selling book that explores how behavior, not intelligence, drives financial success.",
    img: "The-Psychology-of-Money.png", // Replace with your actual image path
  },
  route: [
    {
      topic: "Summary",
      page: <Summary />,
    },
    {
      topic: "Short Summary",
      page: <ShortSummary />,
    },
  ],
};

export default thePsychologyOfMoneyContent;
