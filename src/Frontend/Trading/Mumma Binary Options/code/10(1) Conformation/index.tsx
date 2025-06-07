import { Title, H1, Media, Note, Para } from "../../../../../Backend/UI";
import { domain } from "../../content";

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

      <Media
        customDomain={domain}
        sequence={{
          base: "Part A/10 Conformation/",
          start: 1,
          end: 2,
        }}
      />
    </>
  );
};

export default Conformation;
