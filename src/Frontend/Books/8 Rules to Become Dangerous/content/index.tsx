import EightRulesToBecomeDangerous from "../code/Rules";
import WaitYourTurn from "../code/Wait your turn!";

const eightRulesToBecomeDangerousContent = {
  about: {
    subCategory: "Mindset & Self-Discipline",
    name: "8 Rules to Become Dangerous",
    description:
      "Master presence, control, and power with these 8 life-changing mindset rules.",
    img: "lion.jpg", // thumbnail from the YouTube Shorts video
  },
  route: [
    {
      topic: "Rules",
      page: <EightRulesToBecomeDangerous />,
    },
    {
      topic: "Wait your turn!",
      page: <WaitYourTurn />,
    },
  ],
};

export default eightRulesToBecomeDangerousContent;
