import { Intro } from "../code/01 Intro/Intro";
import AssetsAndOTC from "../code/02 Assets and OTC/AssetsAndOTC";
import SupplyAndDemand from "../code/03 Supply and Demand/SupplyAndDemand";
import TrendLine from "../code/04 Trend Line/TrendLine";

const BinaryOptionContent = {
  about: {
    name: "Binary Options",
    description: "Learn about price action and candlestick physcology.",
    link: "",
    img: "design.jpg",
  },
  route: [
    {
      topic: "Introduction",
      page: <Intro />,
    },
    {
      topic: "Assets and OTC",
      page: <AssetsAndOTC />,
    },
    {
      topic: "Supply and Demand",
      page: <SupplyAndDemand />,
    },
    {
      topic: "Trend Line",
      page: <TrendLine />,
    },
  ],
};

export default BinaryOptionContent;
