import { Title, H1, Media } from "../../../../../Backend/UI";
import { domain } from "../../content";

const TypesOfBuyerSeller = () => {
  return (
    <>
      <Title>Types of Buyer Seller</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/5YrjtyIa0Sk" />

      <H1>Types:</H1>
      <Media
        customDomain={domain}
        src={"Part A/08 Types of buyer seller/2.png"}
      />
    </>
  );
};

export default TypesOfBuyerSeller;
