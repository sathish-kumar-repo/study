import { Title, H1, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const SellerPyscology = () => {
  return (
    <>
      <Title>Seller Pyscology</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/kaTSIG62nkg" />

      <H1>Pyscology and Price Action</H1>
      <Media customDomain={domain} src={"Part A/12 Seller Pyscology/1.png"} />
    </>
  );
};

export default SellerPyscology;
