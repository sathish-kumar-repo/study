import { Title, H1, Media, Para } from "../../../../../Backend/UI";
import { domain } from "../../content";

const Intro = () => {
  return (
    <>
      <Title>Introduction</Title>
      <H1>Basic of trading knowledge</H1>
      <Media src="https://youtu.be/spUZ3tWnUH4" />

      <H1>Broker Interface</H1>
      <Media src="https://youtu.be/UuXWGKlIA64" />

      <Para>
        Binary option contracts offer defined risk and clear outcomes. They are
        considered ‘binary’ because there are only two possible outcomes at
        expiration: you either make a predefined profit, or you lose the money
        you paid to open the trade.
      </Para>
      <Para>
        This makes it easier for you when deciding whether to trade, as you know
        exactly how much you could lose if the markets move against you.{" "}
      </Para>
      <Para>
        And if they don’t, you know the exact size of your potential profit,
        making this a controlled, yet exciting way to trade.{" "}
      </Para>
      <H1>What is a binary option?</H1>
      <Para>
        A binary option is a financial instrument that turns every trade into a
        simple yes or no question – you decide whether a market is likely to be
        above a certain price, at a certain time. If you think it will be, you
        buy. If you think it won’t be, you sell.
      </Para>
      <Media
        customDomain={domain}
        src={"Part A/01 Basic Lesson/binary-option.png"}
      />
    </>
  );
};
export default Intro;
