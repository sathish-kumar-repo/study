import { Title, H1, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const SupplyAndDemand = () => {
  return (
    <>
      <Title>Supply and Demand</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/mlyfWrWvpkg" />

      <H1>Supply:</H1>
      <Media
        customDomain={domain}
        src={"Part A/04 Supply and Demand/resistance.png"}
      />

      <H1>Demand:</H1>
      <Media
        customDomain={domain}
        src={"Part A/04 Supply and Demand/support.png"}
      />
    </>
  );
};

export default SupplyAndDemand;
