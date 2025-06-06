import { Title, H1, Media, List } from "../../../../../Backend/UI";
import { domain } from "../../content";

const TypesOfCandle = () => {
  return (
    <>
      <Title>Types of Candle</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/1JuYd3UrvPc" />

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
      <Media customDomain={domain} src={"Part A/06 Types of candle/1.png"} />
    </>
  );
};

export default TypesOfCandle;
