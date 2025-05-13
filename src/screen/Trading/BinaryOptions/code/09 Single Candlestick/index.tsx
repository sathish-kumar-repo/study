import { H1, Media, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

const SingleCandlestick = () => {
  return (
    <>
      <Title>Single Candlestick</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/fT4Kn4N56qk" />

      <H1>Candlestick</H1>
      <Media src={[img1, img2, img3]} />
    </>
  );
};

export default SingleCandlestick;
