import { H1, List, Media, Title } from "../../../../components/UI";
import typesOfCandle from "./img/1.png";

const TypesOfCandle = () => {
  return (
    <>
      <Title>Types of Candle</Title>
      <H1>Types</H1>
      <List
        items={[
          {
            text: "Buyer (bullish)",
          },
          {
            text: "Seller (bearish)",
          },
          {
            text: "Doji",
          },
        ]}
      />
      <Media src={typesOfCandle} />
    </>
  );
};

export default TypesOfCandle;
