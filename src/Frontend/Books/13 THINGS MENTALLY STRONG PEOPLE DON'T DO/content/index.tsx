import Reference from "../code/Reference";
import ShortSummary from "../code/Short Summary";
import Summary from "../code/Summary";

const things13MentallyStrongPeopleDontDo = {
  about: {
    subCategory: "Mindset & Self-Discipline",
    name: "13 Things Mentally Strong People Don’t Do",
    description:
      "A guide by Amy Morin on habits to avoid for building true mental strength and resilience.",
    img: "13-things-dont-do.png",
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
    {
      topic: "Reference",
      page: <Reference />,
    },
  ],
};

export default things13MentallyStrongPeopleDontDo;
