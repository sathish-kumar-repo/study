import Intro from "../code/01 Intro";
import AssetsAndOTC from "../code/02 Assets and OTC";
import SupplyAndDemand from "../code/03 Supply and Demand";
import TrendLine from "../code/04 Trend Line";
import TypesOfCandle from "../code/05 Types of Candle";
import StructureOfCandle from "../code/06 Structure of Candle";
import SizeOfCandle from "../code/07 Size of Candle";
import TypesOfBuyerSeller from "../code/08 Types of Buyer Seller";
import SingleCandlestick from "../code/09 Single Candlestick";
import PAVSCP from "../code/10 Price Action vs. Candlestick Psychology";
import BuyerPyscology from "../code/11 Buyer Pyscology";
import SellerPyscology from "../code/12 Seller Pyscology";
import UpDownTrend from "../code/13 Up Down Trand";
import PullBackAndRetracement from "../code/14 Pull Back and Retracement";
import TrandReversal from "../code/15 Trand Reversal";
import Rule123 from "../code/16 Rule 1 2 3";
import Rule456 from "../code/17 Rule 4 5 6";
import Rule78 from "../code/18 Rule 7 8";
import TrandChange from "../code/19 Trand Change";
import Rules8Chart from "../code/20 8 Rules Chart";
import CandlestickPattern from "../code/21 Candlestick Pattern";
import PDFExplain from "../code/22 PDF Explain";
import Momentum from "../code/23 Momentum";
import BCT from "../code/24 BCT";
import BRT from "../code/25 BRT";
import Pbrt1 from "../code/26 pbrt 1";
import Pbrt2 from "../code/27 pbrt 2";
import Pbcrt_prct from "../code/28 pbcrt(prct)";
import Momentum1 from "../code/29 Momentum 1";
import Momentum2 from "../code/30 Momentum 2";
import Momentum3 from "../code/31 Momentum 3";
import Momentum4 from "../code/32 Momentum 4";
import DT_DB from "../code/33 DT & DB";
import DTAndDB2 from "../code/34 DT and DB 2";
import H_S1 from "../code/35 H & S 1";
import H_S2 from "../code/36 H & S 2";
import H_S3 from "../code/37 H & S 3";
import OrderBlock from "../code/38 Order Block";
import Sec5Conformation from "../code/39 5 Sec Conformation";
import News from "../code/40 News";
import MoneyManagement from "../code/41 Money Management";
import MoneyManagement1 from "../code/42 Money Management";
import Links from "../code/43 Links";

const BinaryOptionContent = {
  about: {
    subCategory: "Binary Options",
    name: "Binary Options",
    description: "Learn about price action and candlestick physcology.",
    link: "",
    img: "binary-trading.jpg",
  },
  route: [
    {
      heading: "Part A",
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
    {
      topic: "Types of Candle",
      page: <TypesOfCandle />,
    },
    {
      topic: "Structure of Candle",
      page: <StructureOfCandle />,
    },
    {
      topic: "Size of Candle",
      page: <SizeOfCandle />,
    },
    {
      topic: "Types of Buyer Seller",
      page: <TypesOfBuyerSeller />,
    },
    {
      topic: "Single Candlestick",
      page: <SingleCandlestick />,
    },
    {
      topic: "Price action vs. Candlestick Psychology",
      page: <PAVSCP />,
    },
    {
      topic: "Buyer Pyscology",
      page: <BuyerPyscology />,
    },
    {
      topic: "Seller Pyscology",
      page: <SellerPyscology />,
    },
    {
      topic: "Up Down Trend",
      page: <UpDownTrend />,
    },
    {
      topic: "Pull Back and Retracement",
      page: <PullBackAndRetracement />,
    },
    {
      topic: "Trand Reversal",
      page: <TrandReversal />,
    },
    {
      topic: "Rule 1 2 3",
      page: <Rule123 />,
    },
    {
      heading: "Part - B",
      topic: "Rule 4 5 6",
      page: <Rule456 />,
    },
    {
      topic: "Rule 7 8",
      page: <Rule78 />,
    },
    {
      topic: "Trand Change",
      page: <TrandChange />,
    },
    {
      topic: "8 Rules Chart",
      page: <Rules8Chart />,
    },
    {
      topic: "Candlestick Pattern",
      page: <CandlestickPattern />,
    },
    {
      topic: "PDF Explain",
      page: <PDFExplain />,
    },
    {
      topic: "Momentum",
      page: <Momentum />,
    },
    {
      topic: "BCT",
      page: <BCT />,
    },
    {
      topic: "BRT",
      page: <BRT />,
    },
    {
      topic: "pbrt 1",
      page: <Pbrt1 />,
    },
    {
      topic: "pbrt 2",
      page: <Pbrt2 />,
    },
    {
      topic: "Pbcrt (prct)",
      page: <Pbcrt_prct />,
    },
    {
      topic: "Momentum 1",
      page: <Momentum1 />,
    },
    {
      topic: "Momentum 2",
      page: <Momentum2 />,
    },
    {
      heading: "Part - C",
      topic: "Momentum 3",
      page: <Momentum3 />,
    },
    {
      topic: "Momentum 4",
      page: <Momentum4 />,
    },
    {
      topic: "DT & DB",
      page: <DT_DB />,
    },
    {
      topic: "DT and DB 2",
      page: <DTAndDB2 />,
    },
    {
      topic: "H & S 1",
      page: <H_S1 />,
    },
    {
      topic: "H & S 2",
      page: <H_S2 />,
    },
    {
      topic: "H & S 3",
      page: <H_S3 />,
    },
    {
      topic: "Order Block",
      page: <OrderBlock />,
    },
    {
      topic: "5 Sec Conformation",
      page: <Sec5Conformation />,
    },
    {
      topic: "News",
      page: <News />,
    },
    {
      topic: "Money Management",
      page: <MoneyManagement />,
    },
    {
      topic: "Money Management1",
      page: <MoneyManagement1 />,
    },
    {
      topic: "Link",
      page: <Links />,
    },
  ],
};

export default BinaryOptionContent;
