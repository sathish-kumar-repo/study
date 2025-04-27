import { Intro } from "../code/01 Intro/Intro";
import AssetsAndOTC from "../code/02 Assets and OTC/AssetsAndOTC";
import SupplyAndDemand from "../code/03 Supply and Demand/SupplyAndDemand";
import TrendLine from "../code/04 Trend Line/TrendLine";
import TypesOfCandle from "../code/05 Types of Candle/TypesOfCandle";
import StructureOfCandle from "../code/06 Structure of Candle/StructureOfCandle";
import SizeOfCandle from "../code/07 Size of Candle/SizeOfCandle";
import TypesOfBuyerSeller from "../code/08 Types of Buyer Seller/TypesOfBuyerSeller";
import SingleCandlestick from "../code/09 Single Candlestick/SingleCandlestick";
import PAVSCP from "../code/10 Price Action vs. Candlestick Psychology/PAVSCP";
import BuyerPyscology from "../code/11 Buyer Pyscology/BuyerPyscology";
import SellerPyscology from "../code/12 Seller Pyscology/SellerPyscology";

const BinaryOptionContent = {
  about: {
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
  ],
};

export default BinaryOptionContent;
