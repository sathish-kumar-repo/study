import { Title, H1, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const TrendLine = () => {
  return (
    <>
      <Title>Trend Line</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/Qnd06fMR3BI" />

      <H1>Uptrend</H1>
      <Media customDomain={domain} src={"Part A/05 Trend line/uptrend.png"} />
      <Media
        customDomain={domain}
        src={"Part A/05 Trend line/uptrend_eg.png"}
      />

      <H1>Downtrend</H1>
      <Media customDomain={domain} src={"Part A/05 Trend line/downtrend.png"} />
      <Media
        customDomain={domain}
        src={"Part A/05 Trend line/downtrend_eg.png"}
      />
    </>
  );
};

export default TrendLine;
