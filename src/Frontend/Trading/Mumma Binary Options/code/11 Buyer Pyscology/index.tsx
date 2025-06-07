import { Title, H1, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const BuyerPyscology = () => {
  return (
    <>
      <Title>Buyer Pyscology</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/y0kGJnD3zXk" />

      <H1>Pyscology and Price Action</H1>
      <Media customDomain={domain} src={"Part A/11 Buyer Pyscology/1.png"} />
    </>
  );
};

export default BuyerPyscology;
