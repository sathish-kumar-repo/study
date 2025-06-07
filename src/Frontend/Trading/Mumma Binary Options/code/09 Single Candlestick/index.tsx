import { Title, H1, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const SingleCandlestick = () => {
  return (
    <>
      <Title>Single Candlestick</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/fT4Kn4N56qk" />

      <H1>Candlestick</H1>
      <Media
        customDomain={domain}
        src={[
          "Part A/09 Single Candlestick/1.png",
          "Part A/09 Single Candlestick/2.png",
          "Part A/07 Size of Candle/3.png",
        ]}
      />
    </>
  );
};

export default SingleCandlestick;
