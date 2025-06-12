import HealthRules15ToChangeYourLife from "../code/15 Health Rules to Change your Life";
import EightRulesToBecomeDangerous from "../code/8 Rules to Become Dangerous";
import Stop4ThingsImmediately from "../code/Four Things You Have To Stop Doing Immediately";
import FundamentalRulesForHealthyLifestyle from "../code/Fundamental Rules for a Healthy Lifestyle";
import WaitYourTurn from "../code/Wait your turn!";

const lifeRulesContent = {
  about: {
    subCategory: "Self Improvement",
    name: "Rules of Presence",
    description:
      "Level up your mindset with rules that shape powerful habits and presence.",
    img: "lion.jpg",
  },
  route: [
    {
      topic: "Fundamental Rules for a Healthy Lifestyle",
      page: <FundamentalRulesForHealthyLifestyle />,
    },
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
    {
      topic: "15 Health Rules to Change your Life",
      page: <HealthRules15ToChangeYourLife />,
    },
  ],
};

export default lifeRulesContent;
