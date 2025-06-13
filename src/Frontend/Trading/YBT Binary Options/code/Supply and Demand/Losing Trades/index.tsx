import { Media, Title } from "../../../../../../Backend/UI";
import { domain } from "../../../content";

const LossingTradesSupplyAndDemand = () => {
  return (
    <>
      <Title>Lossing Trades</Title>
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 1,
          base: "YBT Supply and Demand/demo/loss/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default LossingTradesSupplyAndDemand;
