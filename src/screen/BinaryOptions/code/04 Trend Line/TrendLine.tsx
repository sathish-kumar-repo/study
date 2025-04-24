import { H1, Media, Title } from "../../../../components/UI";
import uptrend from "./img/uptrend.png";
import uptrendEg from "./img/uptrend_eg.png";
import downtrend from "./img/downtrend.png";
import downtrendEg from "./img/downtrend_eg.png";
const TrendLine = () => {
  return (
    <>
      <Title>Trend Line</Title>

      <H1>Uptrend</H1>
      <Media src={uptrend} />
      <Media src={uptrendEg} />

      <H1>Downtrend</H1>
      <Media src={downtrend} />
      <Media src={downtrendEg} />
    </>
  );
};

export default TrendLine;
