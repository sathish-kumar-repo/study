import EightRulesToBecomeDangerous from "../code/Rules";
import WaitYourTurn from "../code/Wait your turn!";

const eightRulesToBecomeDangerousContent = {
  about: {
    subCategory: "Mindset & Self-Discipline",
    name: "8 Rules to Become Dangerous",
    description:
      "A short but powerful guide to mastering presence, self-control, and mental strength through 8 impactful rules that build unshakable confidence.",
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
