import { H1, Para, List, Title, Table } from "../../../../components/UI";

const PAVSCP = () => {
  return (
    <>
      <Title>Price action vs. Candlestick Psychology</Title>
      <Para>
        Price action and candlestick psychology are closely related, but they
        focus on different aspects of market behavior. Let's break them down:
      </Para>

      <H1>Price Action</H1>
      <List
        items={[
          {
            text: (
              <span>
                Price action refers to the movement of price over time without
                relying on indicators
              </span>
            ),
          },
          {
            text: (
              <span>
                It involves analyzing{" "}
                <b>
                  chart patterns, support & resistance, trendlines, breakouts,
                  and market structure
                </b>{" "}
                to make trading decisions.
              </span>
            ),
          },
          {
            text: (
              <span>
                Price action traders focus on{" "}
                <b>
                  market structure (higher highs, lower lows), momentum,
                  liquidity zones, and institutional moves
                </b>{" "}
                rather than just individual candlesticks.
              </span>
            ),
          },
          {
            text: (
              <span>
                Example: If price forms a <b>double bottom at strong support</b>
                , a price action trader looks for confirmation (higher highs
                forming) before entering a buy trade.
              </span>
            ),
          },
        ]}
      />

      <H1>Candlestick Psychology</H1>
      <List
        items={[
          {
            text: (
              <span>
                Candlestick psychology focuses on the{" "}
                <b>story behind each candlestick</b> — who is in control (buyers
                or sellers) and what emotions are driving the price.
              </span>
            ),
          },
          {
            text: (
              <span>
                Traders analyze the{" "}
                <b>size of the body, wicks, and position of candles</b> to
                understand fear, greed, indecision, or confirmation.
              </span>
            ),
          },
          {
            text: (
              <span>
                Example: A <b>long lower wick on a bullish candle at support</b>
                shows rejection of lower prices, indicating buyers are stepping
                in.
              </span>
            ),
          },
        ]}
      />

      <Table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Price Action</th>
            <th>Candlestick Psychology</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scope</td>
            <td>Broad market movements</td>
            <td>Individual candlesticks</td>
          </tr>
          <tr>
            <td>Focus</td>
            <td>Trends, breakouts, key levels</td>
            <td>Buyer/seller behavior in a candle</td>
          </tr>
          <tr>
            <td>Decision Basis</td>
            <td>Patterns, market structure</td>
            <td>Wick, body, momentum shift</td>
          </tr>
          <tr>
            <td>Use Case</td>
            <td>Identifying trends, reversals, and liquidity zones</td>
            <td>Spotting immediate entry signals</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PAVSCP;
