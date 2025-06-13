import { ContentDataType } from "../../../../Backend/model/content_model";
import LossingTradesInsideBar from "../code/Inside Bar strategy/Losing Trades";
import InsideBarStrategy from "../code/Inside Bar strategy/Tutorial";
import WinningTradesInsideBar from "../code/Inside Bar strategy/Winning Trades";
import LossingTradesSupplyAndDemand from "../code/Supply and Demand/Losing Trades";

import SupplyAndDemand from "../code/Supply and Demand/Tutorial";
import WinningTradesSupplyAndDemand from "../code/Supply and Demand/Winning Trades";

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
      topic: "Supply and Demand",
      page: <SupplyAndDemand />,
    },
    {
      topic: "Winning Trades 📈 (SNR)",
      page: <WinningTradesSupplyAndDemand />,
    },
    {
      topic: "Lossing Trades 📈 (SNR)",
      page: <LossingTradesSupplyAndDemand />,
    },
    {
      heading: "Inside Bar strategy",
      topic: "Inside Bar strategy",
      page: <InsideBarStrategy />,
    },
    {
      topic: "Winning Trades 📈 (Inside Bar)",
      page: <WinningTradesInsideBar />,
    },
    {
      topic: "Losing Trades 📉 (Inside Bar",
      page: <LossingTradesInsideBar />,
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
