import { Title, H1, Media, PDF } from "../../../../../Backend/UI";
import { domain } from "../../content";

const PDFExplain = () => {
  return (
    <>
      <Title>PDFExplain</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/K-GhBQNRCwY" />

      <PDF customDomain={domain} heading file="pdf/candlestickpattern.pdf" />
    </>
  );
};

export default PDFExplain;
