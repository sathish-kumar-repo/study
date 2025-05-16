import { H1, List, Media, Title } from "../../../../../components/UI";

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
      <Media src={"Binary Options/Part A/06 Types of candle/1.png"} />
    </>
  );
};

export default TypesOfCandle;
