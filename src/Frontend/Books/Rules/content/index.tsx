import EightRulesToBecomeDangerous from "../code/8 Rules to Become Dangerous";
import Stop4ThingsImmediately from "../code/Four Things You Have To Stop Doing Immediately";
import WaitYourTurn from "../code/Wait your turn!";

const lifeRulesContent = {
  about: {
    subCategory: "Self-Mastery",
    name: "Rules of Presence",
    description:
      "Level up your mindset with rules that shape powerful habits and presence.",
    img: "lion.jpg",
  },
  route: [
    {
      topic: "8 Rules to Become Dangerous",
      page: <EightRulesToBecomeDangerous />,
    },
    {
      topic: "Four Things You Have To Stop Doing Immediately",
      page: <Stop4ThingsImmediately />,
    },
    {
      topic: "Wait your Turn",
      page: <WaitYourTurn />,
    },
  ],
};

export default lifeRulesContent;
