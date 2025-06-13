import {
  H1,
  H3,
  HL,
  List,
  Media,
  Note,
  Para,
  Quote,
  Space,
  Title,
} from "../../../../../Backend/UI";
import { domain } from "../../content";
// Inside Bar strategy
const InsideBarStrategy = () => {
  return (
    <>
      <Title>Inside Bar Strategy</Title>

      <H1>Tutorial</H1>
      <Media src="https://youtu.be/pON_df9wfOU?si=woaL-w-zyN4SlTDY" />

      <H3>Important Note</H3>
      <Para>
        This strategy is designed for live market conditions and is not
        recommended for OTC (Over The Counter) markets.
      </Para>

      <Note>
        When trading on a 1-minute chart, perform your analysis using a 2-minute
        timeframe. Similarly, for a 2-minute trade, analyze using a 3-minute or
        ideally a 4-minute chart.
        <Quote>
          A 4-minute chart provides optimal analysis, but platforms like Quotex
          may not support this timeframe.
        </Quote>
      </Note>

      <H1>Strategy Explanation</H1>
      <List
        items={[
          "Identify a strong seller (bearish) candle.",
          "Draw horizontal lines at the opening and closing prices of the seller candle.",
        ]}
      />

      <H3>Case 1: Bearish Reversal</H3>
      <List
        items={[
          "If three buyer (bullish) candles appear entirely within the body of the seller candle,",
          "Expect the next candle to be bearish.",
          <>
            Execute a <HL>Put</HL> option.
          </>,
        ]}
      />

      <H3>Case 2: Bullish Reversal</H3>
      <List
        items={[
          "If two buyer candles and one seller candle form inside the body of the main seller candle,",
          "Expect the next candle to be bullish.",

          <>
            Execute a <HL>Buy</HL> option.
          </>,
          <>
            <HL>Rule:</HL> Avoid the trade if the final seller candle closes
            below the initial seller candle’s close.
          </>,
          <>
            <HL>However:</HL> You may take an entry if the new seller candle
            closes just below the initial closing price and your setup is still
            valid.
          </>,
        ]}
      />

      <Para>
        In some cases, the bullish candle may appear after one or two error
        candles. Stay patient and observe closely.
      </Para>

      <Space sT={20} />

      <Note>
        Always analyze using a 2-minute chart and execute your entry on a
        1-minute trade. If the first attempt results in a loss, consider using a
        martingale approach. This is a <HL>rare but highly accurate pattern</HL>
        , typically appearing once every 30 minutes.
      </Note>

      <H1>Quotex Live Example</H1>
      <Media
        sequence={{
          start: 1,
          end: 3,
          base: "Inside Bar Strategy/main/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default InsideBarStrategy;
