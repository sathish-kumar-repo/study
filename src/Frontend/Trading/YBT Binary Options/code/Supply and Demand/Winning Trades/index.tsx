import { Media, Title } from "../../../../../../Backend/UI";
import { domain } from "../../../content";

const WinningTradesSupplyAndDemand = () => {
  return (
    <>
      <Title>Winning Trades</Title>
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 3,
          base: "YBT Supply and Demand/demo/win/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default WinningTradesSupplyAndDemand;
