import { ContentDataType } from "../../../../Backend/model/content_model";
import InsideBarStrategy from "../code/Inside Bar strategy";

import SupplyAndDemand from "../code/Supply and Demand";

export const domain =
  "https://sathish-kumar-repo.github.io/Binary-Options/ybt/";

const ybtBinaryOptionsContent: ContentDataType = {
  about: {
    subCategory: "Binary Options",
    name: "Binary Options (YBT)",
    description:
      "Learn about simple price action and candlestick physcology (with practice)",
    img: "binary-trading-ybt.jpg",
  },
  route: [
    {
      topic: "Supply and Demand",
      page: <SupplyAndDemand />,
    },
    {
      topic: "Inside Bar strategy",
      page: <InsideBarStrategy />,
    },
    // {
    //   subHeading: "Practice",
    //   topic: "Day 1",
    //   page: (
    //     <DayPractice
    //       title={"Day 1"}
    //       path={"YBT Supply and Demand/demo/Day 1"}
    //       count={2}
    //     />
    //   ),
    // },
    // {
    //   topic: "Day 2",
    //   page: (
    //     <DayPractice
    //       title={"Day 2"}
    //       path={"YBT Supply and Demand/demo/Day 2"}
    //       count={2}
    //     />
    //   ),
    // },
  ],
};

export default ybtBinaryOptionsContent;
