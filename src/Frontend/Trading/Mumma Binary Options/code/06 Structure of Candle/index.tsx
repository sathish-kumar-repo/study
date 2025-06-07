import { Title, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const StructureOfCandle = () => {
  return (
    <>
      <Title>Structure of Candle</Title>

      <Media
        customDomain={domain}
        src={[
          "Part A/07 Size of Candle/1.png",
          "Part A/08 Types of buyer seller/1.png",
        ]}
      />
    </>
  );
};

export default StructureOfCandle;
