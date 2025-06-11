import { ContentDataType } from "../../../../../Backend/model/content_model";
import DayPractice from "../../../Demo";
import SupplyAndDemand from "../code";

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
      heading: "Supply and Demand",
      topic: "Tutorial",
      page: <SupplyAndDemand />,
    },
    {
      subHeading: "Practice",
      topic: "Day 1",
      page: (
        <DayPractice
          title={"Day 1"}
          path={"YBT Supply and Demand/demo/Day 1"}
          count={2}
        />
      ),
    },
    {
      topic: "Day 2",
      page: (
        <DayPractice
          title={"Day 2"}
          path={"YBT Supply and Demand/demo/Day 2"}
          count={2}
        />
      ),
    },
  ],
};

export default ybtBinaryOptionsContent;
