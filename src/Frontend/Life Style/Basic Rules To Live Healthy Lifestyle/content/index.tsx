import Rules from "../code/01 Rules";
import TrackerUpdates from "../code/02 Tracker Updates";

const basicRulesToLiveHealthyLifestyleContent = {
  about: {
    subCategory: "Lifestyle",
    name: "Basic Rules to Live Healthy Life Style",
    description: "Simple habits for lifelong health success.",
    img: "basic-rules-to-live-healthy-lifstyle.jpeg",
  },
  route: [
    {
      topic: "Rules",
      page: <Rules />,
    },
    {
      topic: "Tracker Update",
      page: <TrackerUpdates />,
    },
  ],
};

export default basicRulesToLiveHealthyLifestyleContent;
