import { H1, Media, Title } from "../../../../../components/UI";
import resistance from "./img/resistance.png";
import support from "./img/support.png";

const SupplyAndDemand = () => {
  return (
    <>
      <Title>Supply and Demand</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/mlyfWrWvpkg" />

      <H1>Supply:</H1>
      <Media src={resistance} />

      <H1>Demand:</H1>
      <Media src={support} />
    </>
  );
};

export default SupplyAndDemand;
