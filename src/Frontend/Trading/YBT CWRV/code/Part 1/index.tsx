import { Title, Media, H1 } from "../../../../../Backend/UI";
import { domain } from "../../content";

const Part1 = () => {
  return (
    <>
      <Title>Candlesticks</Title>
      <H1>Tutorial</H1>
      <Media src="https://youtu.be/7i0IOofFgX0" />

      <H1>Candlesticks Structure</H1>
      <Media
        src="Part - 1/01 Candlesticks Structure/img.png"
        customDomain={domain}
      />

      <H1>Week Reading</H1>
      <Media src="Part - 1/02 Week Reading/img.png" customDomain={domain} />

      <H1>Single Candlesticks Name</H1>
      <Media
        src={[
          "Part - 1/03 Single Candlestick Name/1.png",
          "Part - 1/03 Single Candlestick Name/2.png",
        ]}
        customDomain={domain}
      />
    </>
  );
};

export default Part1;
