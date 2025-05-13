import { H1, Media, Note, Para, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";
import img2 from "./img/2.png";

const Conformation = () => {
  return (
    <>
      <Title>Conformation</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/c-F8LDCe0cY" />

      <Note>
        <Para tab={false}>
          It says like strategy or rules or price action or candlestick
          psychology
        </Para>
        <Para tab={false}>It small help used to analysis the chart</Para>
      </Note>

      <Media src={[img1, img2]} />
    </>
  );
};

export default Conformation;
