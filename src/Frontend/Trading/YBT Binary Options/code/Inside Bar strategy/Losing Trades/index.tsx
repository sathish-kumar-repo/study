import { Media, Title } from "../../../../../../Backend/UI";
import { domain } from "../../../content";

const LossingTrades = () => {
  return (
    <>
      <Title>Lossing Trades</Title>
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 3,
          base: "Inside Bar Strategy/demo/loss/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default LossingTrades;
