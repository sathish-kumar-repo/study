import { Media, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";
import img2 from "./img/2.png";

const StructureOfCandle = () => {
  return (
    <>
      <Title>Structure of Candle</Title>

      <Media src={[img1, img2]} />
    </>
  );
};

export default StructureOfCandle;
